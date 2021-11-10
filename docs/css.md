# CSS / Tailwind Methodologies
We use [Tailwind](https://tailwindcss.com/) extensively in our builds now. This build includes a
version specific for Nuxt and is set up and ready to go.

## Utility First Approach
Tailwind is a "Utility-First" CSS library, as such we try to use its utility classes as much as
possible on HTML elements when styling components. This makes it easy for devs to jump in, view
the markup, and quickly understand what and how things are being styled. You should always try
to achieve as much as possible with Tailwind classes on elements before resorting to scoped styles
or custom CSS components.

## JIT Mode
[JIT (Just In Time) mode](https://tailwindcss.com/docs/just-in-time-mode) is configured in this
build. This means we don't have to monkey with PurgeCSS as the build process will only ever include
the classes used in the components which are added at dev/runtime. In addition to this, JIT mode also
include bracket notation classes which allow us to include arbitrary CSS values:

```html
<div class="absolute w-[762px] h-[918px] top-[-325px] right-[62px] md:top-[-400px] md:right-[80px]">
    <button class="bg-[#1da1f1]">Share on Twitter</button>
</div>
```

### JIT Caveats
JIT mode in Tailwind does have one inconvenience in that it cannot parse dynamic Tailwind class
names, it simply scans your files for the classes to include in the build.
[See the official docs](https://tailwindcss.com/docs/just-in-time-mode#known-limitations) regarding
JITs current limitations.

So, in the following example, JIT will not recognize or parse the dynamic `grid-cols-(n)` class as
it does not run your component code to parse it, thus the dynamic classes you may want will not
be included in the CSS it produces :

 ```html
 <div :class="`grid grid-cols-${columns}`">
     ...
 </div>
 ```

_Solution:_ If you do need to render Tailwind classes dynamically you will need to include a
comment block somewhere in your component code to account for all of the variations the dynamic
class would produce:

 ```javascript
 /**
  grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6
 */
 ```

## Tailwind Config
As stated above, with JIT mode enabled in Tailwind we can create arbitrary styles for "one-offs"
easily. This means we no longer have to litter out Tailwind config file with 24 different font
sizes, or incremental opacity values. What this means is we can reduce the config values in this
file to include only specific design tokens (colors, font faces), or any global config changes deemed
necessary for the project based on the design.

## Single File Component Style Blocks
There are times when a CSS utility class cannot get the job done (pseudo-elements for example).
In this case, your first course of action should be defining these CSS styles within the components
scoped style block. Be sure to add the "scoped" attribute so none of your styles leak out of the
component into the global space. Also, remember to use the tailwind "@apply" directive to use any
existing Tailwind class styles rather than writing them out old-school style.

## Extracting CSS Components
There are rare occasions when it could make sense to create your own CSS component. If this is the
case, you should include the CSS file in the "/assets/css/components" directory, and import it in
the "/assets/css/tailwind.css" file, so it is added to the build chain. Again, within this file you
can still use tailwind classes via the "@apply" directive to keep things DRY. As stated, the occasions
for using a custom CSS component are rare in this build, so before you do it, make sure it is necessary
or actually it could be done with Tailwind and component scoped style blocks.

## Global CSS Stylesheets
If the project requires global style sheets for things like typography, these can be added to the
"/assets/css/base" directory and imported in the "/assets/css/tailwind.css" file. Again, make sure
that the styles you are adding really are "global".