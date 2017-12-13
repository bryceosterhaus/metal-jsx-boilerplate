# metal-jsx-boilerplate

Generic boilerplate for creating [metal-jsx](https://github.com/metal/metal.js) component packages for npm. This boilerplate is simply a launching point for creating useful components. Feel free to do whatever you want with it.

## How to Use
* Clone repo `git clone git@github.com:bryceosterhaus/metal-jsx-boilerplate.git`
* Rename package specific properties
	- directory name
	- name, author, description in [package.json](./package.json)
	- author in [LICENSE.md](./LICENSE.md)
	- README.md [README.md](./README.md)
* Make any other changes you want

## NPM Scripts
* **build** - compiles `/src` files and outputs to `/lib`
* **format** - runs both `prettier` and `eslint --fix`
* **lint** - lints files and checks for errors
* **prepublish** - Used for running **build** before publishing to npm
* **test** - runs unit tests via `jest`
