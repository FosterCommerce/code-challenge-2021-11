# GraphQL Setup

## Nuxt/Apollo setup and usage
The build make use of the [Nuxtjs/Apollo](https://github.com/nuxt-community/apollo-module) package
for communicating with Craft to get data and apply mutations. Craft has its own GQL client endpoint
however it does have some limitations in the way of native GQL file parsing and fragment importing.
The package also keeps many of the nuts-and-bolts under the hood which keeps the codebase cleaner and
easier to understand.

### Usage

Within your components you can use the apollo package to import you QGL query files directly and
run them to fetch data. Example:

```javascript
import EntriesBlog from '@/queries/EntriesBlog.gql';

export default {
  apollo: {
        entry: {
            query: EntriesBlog,
            prefetch: false,
            variables() {
                return {
                    limit: 1,
                    slug: this.$route.params.slug,
                };
            },
            update: (data) => data.entries[0],
        },
    },
  }
```

### GQL fragments
Another cool thing, is we can import GQL fragments within GQL files. This keeps things organized
especially when dealing with complex data structures like content builder fields from Craft. It
also prevents repetition and provides a single point of truth for these field types where they
can easily be updated. All you have to do is import the fragment at the top of the GQL file and
call it later in the query. Example

```gql
#import "./fragments/FieldContentBlocks.gql"

query EntriesBlog (
    $limit: Int = 150
    $offset: Int = 0
    $slug: [String] = ["*"]
    $uri: [String] = ["*", null]
) {
    entries (
        section: ["blog"]
        slug: $slug
        uri: $uri
        limit: $limit
        offset: $offset
    ) {
        id
        title
        uri
        slug
        ... on blog_article_Entry {
            ...FieldContentBlock
        }
    }
}
```

### GQL File Naming Conventions
Just like components, we should keep a naming convention and directory structure for GQL files,
so they are easy to understand for all the developers working on the project.

#### Query Files
These are the main queries that can be called from components. They should be named as follows:

- ``Entries<CraftSectionHandle>.gql`` If the query can return one or multiple results
- ``Entry<CraftSectionHandle>.gql`` If the query will only ever return one result (example, singles)
- ``fragments/Field<CraftFieldHandle>.gql`` For fragments regarding specific Craft fields
- ``fragments/<FragmentName>.gql`` For miscellaneous fragments used for things like image transforms or plugin GQL options
