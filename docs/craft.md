# Craft CMS
We use [Craft CMS](https://craftcms.com/) for our backend authoring experience and data modeling.
A full description of Craft and how to develop with it goes beyond this project documentation so you
should read the [official online documentation](https://craftcms.com/docs/) if you are not familiar with Craft.

In this documentation we will only be highlighting the peculiarities of this projects setup and experiences we
have garnered using Craft through the years.  

## Project-config
In order to keep data structures in sync while you and other developers are working on the project, we use
[project-config](https://craftcms.com/docs/3.x/project-config.html) to keep track and sync database changes
on all environments. If there have been changes to the data structures in Craft that you have pulled down to
your local machine, you will need to run the migration script and project-config manually to make sure you have
the latest changes. Also, it's a good idea to run composer install as well in case there have been any updates
added to Craft or plugins. As such we generally run the following commands in the terminal within the projects
root directory, whenever pulling down changes from the repo, and in this order:

```bash
$ composer install
$ ./craft migrate/all
$ ./craft project-config/apply
```

Note that these scripts are also run automatically on the staging and production server whenever merges or
deploys are performed. You will only have to run these commands manually on you local machine.

### The --force flag

Occasionally, there have been glitches with project-config not updating the database after running it. If it
looks like the changes made by yourself or someone else, have not been applied to your local environment, you
will need to run the project-config command again but with a flag to force the data structure update:

```bash
$ ./craft project-config/apply --force
```

## Section Types
As stated above, if you are not familiar with Craft you should read the
[official online documentation](https://craftcms.com/docs/), in this case especially those in regard to the different
[sections and entry types](https://craftcms.com/docs/3.x/entries.html#sections) Craft offers. We will here however,
include some notes on how we prefer the usage of these different section types:

### Single Sections
In almost all cases, we generally only ever use one "single" section, for the sites' homepage. All other
so-called "one-off" pages we generally include them as entry types of "structure" sections (see below), so the
client has the ability to nest or place them anywhere within the sites' URL structure.

### Channel Sections
Channels are usually use for any sections that do not have a hierarchical structure in relation to other entries
in the same section. A good example of using a channel section would be for a blog or news articles section however,
we also use them for anything that falls within the description of not having a hierarchical relation.

#### Reusable Content
Sometimes it makes sense to create a reusable content channel section when a piece of content needs to appear
in multiple locations, but we do not want to force the authors the have to re-input that data every time. This can
also be achieved by using [Craft Globals](https://craftcms.com/docs/3.x/globals.html#global-sets-in-templates) however,
we have found that Craft will re-save global data on every cache refresh even if it has not changed. So we prefer to
move those pieces of data to entry types of a "Reusable Content" channel section, where they will only be refreshed
in the cache if they are changed.

### Structure Sections
We generally use a structure section for "pages" within a site. As Craft allows for multiple entry types within a
section that can have different field layouts, we make use of this feature to allow the authors to "architect"
the site page structure by including entry types like "general" pages, "listing" pages (for things like blogs), and
"one-off" pages (for things like contact or about pages). By using a single "Pages" structure section the author
can then nest the pages as they like or repeat these entry types anywhere in the structure if necessary.

### Naming Conventions
The names for your sections should be descriptive, yet short and concise (i.e.; "Blog", "Pages", "Employees", etc.).

## Entry Types
Both "Channels" and "Structure" section types include "Entry Types". This allows you to setup different fields for each
entry type while maintaining all of the entries in the same section. A prime example of this could be a "Pages"
structure section that has a "General" page type, with the fields necessary to create a general page, and a
"Blog Listing" page type with different fields that could apply (i.e.; "Number of Posts to List",
"Category of Posts to List", etc.). So in this example, rather than creating a "Single" for the blog listing page in a
separate section, it remains in the "Pages" section (with any parent/child relations intact) and also allows the
content editor the ability to create multiple Blog listing pages within the site if necessary.

## Fields
Fields should be grouped by their type (i.e.; "Text", "Assets", "Compound", "Content Builders", etc.) or functionality
("Styling"), rather than the section they may belong to. This makes it easy for us to find the fields that need to
be edited.

### Naming Conventions
Field names should be short and concise whenever possible with an eye on reuse. For example a text field named "Heading"
could be used in multiple sections and even within a content builder block if they are used in a "Vizy" or "Neo" field.

## Assets
The project makes use of the following technologies to upload and manage assets for things like images and documents:

### Amazon S3
Asset files are stored on Amazon S3 servers. Craft is set up to store any assets uploaded in the CMS automatically so
there should be no need to make any configuration changes there. This also makes development easier as you will not
need to download any asset files manually from production or staging to your local environment. If you do not see an
asset in you local environment that exists on staging or production it probably means your local asset index is out of
date. In order to remedy this you just need to go to "Utilities" > "Asset Indexes" in the CMS admin area and click the
"Update asset indexes" button which will sync your assets for you.

### Imgix
In order to automatically optimize image assets we use the [Imgix](https://imgix.com/) service to optimize images used
by Craft and to take advantage of their CDNs and next generation image formats like WebP. These images are generated
automatically from the Amazon S3 account when uploaded via the Craft assets interface. In order to transform and fetch
the correct image sizes and formats we have the Imager X plugin (see plugins section below) configured to work
with Imgix.

## Avoiding Complex Data Structures
A common problem we have found in using Craft CMS as a headless content management system is timeouts occurring during
the static site build process. There are various reasons that this can occur but one of them is due to Craft having to
parse complex data structures. Craft allows you to create some really complex data structures with things like Matrix
fields and nested Super Table fields within them however, we should try to limit the complexity whenever feasible for
performance at build time. "With great power comes great responsibility" Peter Parker, so you should at least put some
thought into how/if you can achieve the same functionality or data structure without going too deep/complex. As always,
when in doubt, ping Michael or Stephen on Basecamp for advice.

## Plugins
In our experience with Craft we have found you can get really far with creating complex data structures and functionality
using native Craft features. We like to keep the Craft build as "stock" as possible however, there are times when a
third-party plugin is just what a feature may need. We have included in the project the most useful plugins we have
experience with to cover these gaps so if it all possible, please do not deviate from them. If you can make a case for
adding another plugin that is not included in this build, consult the team first before adding it.

### Manifest
The following are a list of stock plugins we include in all our builds:

#### [Amazon S3](https://github.com/craftcms/aws-s3/blob/master/README.md)
This first-party plugin is needed to store uploaded assets to the clients AWS account.

#### [Entries Subset](https://github.com/nfourtythree/craft3-entriessubset/blob/master/README.md)
This is an AX plugin to limit selection based on entry types for entries in an entries relational field. If the plugin
is removed it simply reverts any existing fields to standard Craft entries field types.

#### [Formie](https://verbb.io/craft-plugins/formie/docs/get-started/installation-setup)
This plugin allows admins to create and manage forms, and form submissions on the site. In the past we have used
[Solspace Freeform](https://docs.solspace.com/craft/freeform/v3/) however Formie seems to offer better GQL support
than Freeform so with our move to headless, we have opted to use Formie instead.

#### [Imager X](https://imager-x.spacecat.ninja/overview.html)
This plugin is set up to optimize and crop image assets for the front-end from the Imgix service.

#### [Navigation](https://verbb.io/craft-plugins/navigation/docs/get-started/installation-setup)
This plugin is used to allow admins to create whatever navigation scheme they want for the site regardless of entry
sections or structures.

#### [Redactor](https://github.com/craftcms/redactor/blob/v2/README.md)
This first-party plugin is a wrapper for the "Redactor" rich text editor. Even though the same can be achieved with
Vizy (see below) this field still comes in handy for one-off instances where you need to add a rich text field. Once
Vizy is further along in its development we may be retiring this plugin though.

#### [SEOMatic](https://nystudio107.com/docs/seomatic/)
This is our go-to plugin for SEO meta and site map generation. We've tried others in the past but none are as robust as
SEOMatic.

#### [Super Table](https://verbb.io/craft-plugins/super-table/docs/get-started/installation-setup)
When you need to create more complex data structures than what Matrix or Vizy fields can offer, we use this field type
to create a sort of Matrix-within-matrix field. It is also appropriate to use this field type when the data structure
you are creating is "tabular" that is, when every row has the same fields (like a table). This contrasts with a Matrix
field which allows you to include different row types, each with their own field setup.

#### [Typed Link Field](https://github.com/sebastian-lenz/craft-linkfield)
This field is an AX convenience field that allow the author to insert links, whether they are entries in the site, or
external links, and allows them to specify the links text at the same time or wether to open the link in a new tab.
In the past we have used [LinkIt](https://github.com/presseddigital/linkit/blob/master/README.md) however due to the
current poor state of GQL compatibility we have opted to use Typed Link Field instead. Note, this plugin is still in
its early stages of development, so if you come across any bugs let us know.

#### [Vizy](https://verbb.io/craft-plugins/vizy/docs/get-started/installation-setup)
We use this plugin now as a content-builder/WYSIWYG field, whereas before we were creating similar setups using a
combination of Matrix and Super Table. The main reason we switched to Vizy is due to its performance as it saves the
data structures as plain JSON in the database. This prevents complex database relational look-ups at build time. It also
offers a more natural authoring experience when mixing rich text and pre-defined components as a content builder.

#### [Neo](https://github.com/spicywebau/craft-neo/wiki)
*NOTE: Not installed by default*

In the case the content builder field in the project needs to be more robust to handle things like editorial design
layout and options, you should use Neo as the "parent" field for this, with Vizy fields nested for the content areas.
This plugin is not installed by default, so it should only be added if the project warrants it, as it does add another
layer of complexity to the build and data structures.

### Do not use
We have had performance problems with the following plugins in the past so please do not add them to the project

#### [ImageOptimize](https://plugins.craftcms.com/image-optimize)
Although a great concept, in practicality this plugin slows down the admin and static site builds considerably by adding
numerous background tasks to optimize images.

#### [Preparse Field](https://plugins.craftcms.com/preparse-field)
Another one that is a great concept, but slows down the admin and static site builds considerably.
