# Vue Methodologies
With our experience so far, we have come up with a few approaches we have found to work well.

## Component naming conventions
Components should be named following a specific order to allow for ease of use and easier work
between multiple developers on a single project. We have come up with the following conventions to
help us work more smoothly in a group.

### Components Directory
We would like to use a flat directory structure in the /components directory. That is, no sub-directories
in the /components directory except fo the "/views" sub-directory. This allows devs to easily see if there
are components that already exist that fit their needs without having to scan through nested sub-directories.

### Base Components
The majority of the UI components we usually need in a project are base components. These components should
be app data agnostic and are only concerned with the visual and interactive aspects of the UI. They are basically
the building blocks which we use inside of "wrapper" components that are data specific, but by abstracting
these base components we make them more reusable. Base components should be named as:

``Base<ComponentName>.vue``

They can make use of other base components if necessary, but try to keep them as ignorant as possible of the
data they will be working with. Additionally, base components can also be used for layout patterns in a
project (grids, columns, etc). As they are still considered "base", they should retain the same "Base" prefix,
but also include a layout indicator, so they are easily found. Example:

``BaseLayoutGrid.vue``

In the end, the important thing to remember is "base" components should always be "dumb". Unaware of the 
specifics of the data that is being brought into them wither by props or slots. Their job is just to supply
a user interface and functionality as the design requires.

####  The "views" sub-directory
This should be the only sub-directory in the component's folder. It is used to house components that operate
on a "page level", mainly pertaining to layout of full pages and page specific data. The naming of these
components should follow the following order based on Craft sections and entry types:

``<SectionName><EntryTypeName>.vue``

This will allow us to dynamically call them using the

``<component :is="getComponentName(sectionHandle, typeHandle)">``

vue tag, which is a cleaner way than including a bunch of v-if, v-if-else directives.

## Slots usage
Speaking of "base" and "base layout" components, slots are incredibly useful in keeping these components
as flexible as possible. Having named slots for things like "media" and "content", or "sidebar" allows
us to pump in any content we want into more complex base components like "cards" or "layout columns"
base components. You should consider named or scoped slots if a component will likely be the parent of
other components. 

## Wrapper components
With our library of base components built up that are data agnostic, we can then use them within data
specific components within a "wrapper" component. The wrapper component could make a call to an endpoint
to get data, or if the data is passed to it via a prop, format it to then pass it on to its child "base"
components. By abstracting the content specific data in the wrapper component, and then passing it to the
base child components, we are promoting re-usability of the base UI components.

## Nuxt File System Routing
As we are using Nuxt, which is a meta-library for Vue, we want to follow its conventions as close as possible.
One of the Nuxt conventions is [File System Routing](https://nuxtjs.org/docs/2.x/get-started/directory-structure)
based on the directory structure in the "/pages" folder. So for example, if a URI is something like "/blog/slug-here",
we would create a "blog" directory in the "/pages" directory and include a "_slug.vue" file to handle the rendering
of that page. We want to follow this convention as close as possible however, there are cases where it is not
possible at the moment.

### Craft Structure Sections
Craft allows us to create "structure" sections where there is a parent-child relation in URIs. As such, we
cannot use the Nuxt routing system as the parent and child URIs are dynamic. To compensate for this, we use
the "_.vue" file for all Craft sections of this type. In a sense, it acts as its own router by dynamically
importing the "View" components based on the Craft section name and entry type as mentioned above. 

## Vuex
Nuxt come preconfigured with Vuex, [a state management tool](https://nuxtjs.org/docs/2.x/directory-structure/store).
Simply by adding an index.js file within the "/store" directory, it is enabled. If you are unfamiliar with Vuex,
have a read through [the docs](https://vuex.vuejs.org/) to get up to speed. Note: Vuex syntax is a little different
in Nuxt but basically the concepts are the same.

### State
This is the state of the data you are working on. The analogous in Vue components would be "data".

### Getters
This is the state of the data you are working on but with different "views" of it. The analogous in Vue components
would be "computed properties".

### Mutations
Methods for altering the state of the data you are working with. They should not however be accessed directly from
components, instead they are called from "actions" in Vuex.

### Actions
These are asynchronous methods that can be called from components. The analogous in Vue components would be
"methods".

### Vuex Map Helpers
Vuex [provides helpers](https://vuex.vuejs.org/api/) to allow you register state, getters, and actions within
your component. Use them to keep things clean and understandable.

### Vuex Modules
Having a single index.js file in your Vue store can become unwieldy when you are trying to keep track of the state
of multiple sections and objects. If this is the case, you should break out your Vuex store
[into multiple modules](https://vuex.vuejs.org/guide/modules.html) to keep things clean and organized.

## Incorporating third party libraries
There are times when you will need to use a third-party library that has not been ported over to Vue yet,
or a bit of custom JS functionality you want to add. In these cases you should do the following:
- Import the library into the project via yarn
- Create a plugin file in the "/plugins" folder, naming it "<package-name>.js"
- In this file, import the package and if it warrants it, make a
[custom directive](https://vuejs.org/v2/guide/custom-directive.html) for it.