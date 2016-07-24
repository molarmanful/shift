# shift
A personal web browser written in Electron. Uses a text-command rather than a keyboard-command format.
##Installation
Requirements:

- Node.js 6+

That's it! After, just download this repo, `cd` into the repo's local directory, and run `npm install&&npm start`.

##Modification

**Must know**:

- Electron
- Javascript/Node.js ES6
- Bootstrap

**Should know**:

- Jade
- Stylus

**Important files**:

Main process:

- `main.js` - Handles startup, rendering, windows, and shutdown.

Renderer Process:

- `index.jade` - Holds the browser UI and the webviews.
- `bootstrap.css` - Bootstrap-based theming for `index.jade`.
- `index.styl` - Further styling for `index.jade`.
- `renderer.js` - Handles text commands, tabs, and page navigation.

Webview:

- `new.jade` - The new tab page.

##Todo
- Adblock
