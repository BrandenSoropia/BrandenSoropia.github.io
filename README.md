My personal site to show about me, contact and projects.

Goal: I want it to be as fast and as accessible as possible. I also want to learn how to make static sites with HTML, SCSS/CSS and Javascript!

### Stuff I Learned (Unordered)

- As of mid 2020, `.tff`, `.woff`, `.woff2` fonts are needed for the widest modern browser compatibility (no I.E). [Useful thread about this](https://stackoverflow.com/questions/24990554/how-to-include-a-font-ttf-using-css)

- When using custom web fonts, it takes time to load them! In the mean time, it's best to default to system fonts which can be done simply by adding `font-display: swap;` to all `@font-face` rule sets! [Source](https://web.dev/font-display/?utm_source=lighthouse&utm_medium=devtools)

- Use `<meta name="viewport" content="width=device-width, initial-scale=1" />` to make sure the website is set to match device's width. Without it, mobile users get desktop which is then scaled down to fit! Also a SEO boost to have this as a marker that this site is mobile friendly. Also, it made `include-media` work when it wasn't earlier! [Source](https://web.dev/viewport/?utm_source=lighthouse&utm_medium=devtools)

- Icons can be made a11y friendly by using setting the icon as `aria-hidden="true"` and having a visually hidden child element with description text like so

```
 <div class="thumbnail turquoise">
    <i class="fas fa-globe" aria-hidden="true"></i>
    <span class="visually-hidden">Web Icon</span>
  </div>
```

- If a language is not set in the `html` tag like so, `<html lang="en">`, a screen reader will default to using the language the user set it to as fallback! [Source](https://web.dev/html-has-lang/?utm_source=lighthouse&utm_medium=devtools)
