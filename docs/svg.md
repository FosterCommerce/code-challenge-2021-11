# SVG Sprites

## Nuxt/SVG-Sprite Usage
The build includes the [Nuxtjs/SVG-Sprite module](https://github.com/nuxt-community/svg-sprite-module)
to make working with SVG icons as easy as possible.

### Adding an SVG to the sprite
- Name the SVG file based on its visual appearance (ex: arrow-left.svg or user.svg)
- Remove any "width" or "height" attributes on the SVG, just leaving the "viewbox" attribute
- Try to keep the icon in a square viewbox for consistency.
- Drop the file in the "/assets/sprite/svg/icons" directory while in dev mode and it will be
processed and added to the sprite automatically.

### Using the sprite in your component
Use the sprite component with the name of the icon file you want to display (sans ".svg"), title,
fill and classes you want to add to it.

```html
<svg-icon
    :name="`icons/${file}`"
    :title="alt"
    fill="currentColor"
    class="absolute inset-0 block w-full h-full"
/>
```

### Storybook Module
The build also include a module for Storybook that displays all the icons currently in the sprite
as a convenience.