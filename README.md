My personal site to show about me, contact and projects.

Goal: I want it to be as fast and as accessible as possible. I also want to learn how to make static sites with HTML, SCSS/CSS and Javascript!

## Setup and Development Instructions:

You must checkout the dev branch to do actual development. master branch is where the built files are dumped!

1. Make sure you have Node installed. I'm using `v12.13.1`. Also make sure you have `yarn` classic installed to manage packages.
2. Have Gulp CLI installed globally: `npm install --global gulp-cli`.
3. Now clone repo and navigate to its directory in your terminal. Run `yarn` to install all dependencies.

You're all setup! To start development in watch mode run `gulp watch`. It'll open this site in your default browser at `localhost:3000` and will hot-reload on any change.

## Deploying to GH Pages

Super sketchy and manual atm...

1. Build site with `gulp`.
2. Commit new `dist`.
3. Push to dev. Copy `dist` and change branches to `master`.
4. Paste new `dist` and overwrite if needed!

That should be it, try going to https://brandensoropia.github.io/ to see it live!

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
