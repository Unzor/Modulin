# Modulin
A tool for using "require()" in the browser with NPM modules.

# Usage
First, add the Modulin script to your site:
```html
<script src="https://cdn.jsdelivr.net/gh/Unzor/Modulin/index.js"></script>
```
Then, to load a module, use this:
```javascript
Modulin.loadModule(<your NPM module here>).then((require) => {
var module = require(<your NPM module here>);
})
```
