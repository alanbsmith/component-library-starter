# Component Library Starter
_a small starter for building a component library with [styled-components](https://github.com/styled-components/styled-components) 💅_

## Overview
This component lib is set up to use
 [styled-components](https://github.com/styled-components/styled-components),
 [polished](https://github.com/styled-components/polished), and [styled-components-modifiers](https://github.com/Decisiv/styled-components-modifiers) 💅. This
 starter is designed to help you create your own components and easily publish them to npm.

## Up & Running
To install dependencies with Yarn, run:
```sh
$ yarn
```

or to install with npm, run:

```sh
$ npm install
```

## File Structure
This component library borrows its structure from [BEM](http://getbem.com/introduction/) and is set
 up to use Blocks, Elements, and Modifiers. Below is a description of each.

### Blocks
Blocks are the highest level of abstraction in the Blocks, Elements, Modifiers concept.
 They are responsible for providing the context for Elements, handling UI logic, and rendering the
 Elements within the Block. They are not connected to application state, nor do they handle any
 business logic.

### Elements
Elements are the smallest, indivisible parts of UI. They are responsible for actually rendering the
 UI. They do not handle application logic or UI logic, but they do handle their own modifiers which
 modify the element’s style. Elements generally exist within the context of a Block (as their own
 file in the Block’s directory) allowing the reuse of that set of Elements, but they are not
 exclusively bound to blocks. An example of a stand-alone Element would be an A, Link, H3, or P.
 These common elements live in `lib/elements`.

### Modifiers
This library utilizes
 [`styled-components-modifiers`](https://github.com/Decisiv/styled-components-modifiers) to build
 modifiers. Modifiers are small functions that allow us to alter the properties of an Element.
 They primarily live in the Element's file and are solely responsible for modifying styles.
 Some modifiers are common to multiple Elements. An example would be `fontWeights`.
 These common modifiers live in `lib/modifiers`

### An Example Structure
```
├ lib/
├── blocks/
|   ├── Card
|   |   ├── Body.js     // <- Element
|   |   ├── Footer.js   // <- Element
|   |   ├── Header.js   // <- Element
|   |   └── index.js    // <- Block
|   └── index.js        // <- export for all Blocks
├── elements/
|   ├── A
|   |   ├── __tests__
|   |   |   ├── __snapshots__
|   |   |   |   └── index.js.snap   // <- Snapshot Test
|   |   |   └── index.js            // <- Test
|   |   └── index.js                // <- Element
|   ├── Link
|   |   └── index.js                // <- Element
|   ├── H3
|   |   └── index.js                // <- Element
|   ├── P
|   |   └── index.js                // <- Element
|   └── etc.
|   └── index.js                    // <- export for all Blocks
├── modifiers/
|   ├── fontWeights
|   └── etc.
└── index.js                        // <- main export for the library
```

## Local Development

### Module Development Workflow
Helpful information on development workflow in this library lives
 [here](https://gist.github.com/alanbsmith/6c581e5042b8e5e558b0b4454192eb69).

### Linting
_**NOTE:** The linter will run against everything in the `lib` directory. I've added an initial
 `.eslintrc` file for some basic configuration. Feel free to edit or replace it as needed. The
 intent is to help give you a guide for syntax as you build your application. However, if the
 linters are too distracting and / or confusing, feel free to ignore them._

### JavaScript Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ yarn lint:js
```

To run the watch task:
```
$ yarn lint:js:watch
```

#### Style Linting
I've also added a style linter for Sass / SCSS.

To run the style linter:
```
$ yarn lint:style
```

#### Linting JavaScript & Styles
To run both linters:
```
$ yarn lint
```

### Testing
An initial test suite has been setup with two tests (one passing and one intentionally failing).
 We're using Jest Snapshots for our initial test setup, though Enzym and Expect are also available.
 The basic test setup lives in `./__tests__`. The main configuration for Jest lives at the bottom
 of `package.json`.  I've also added a few handy scripts, which I've listed below. Jest also gives
 us a test coverage tool for free, so I've added that too. The setup is at the bottom of
 `package.json`. Everything is set to 90% coverage, but your welcome to update that to whatever
 you'd like.

To run the tests once:
```
$ npm test
```

To run the watch script (for only relevant test files)
```
$ npm run test:watch
```

To run the watch script (for all test files)
```
$ npm run test:watchAll
```

To view the coverage report:
```
$ npm run test:coverage:report
```

### Review
If you'd like to run the linters and tests at once (this is a nice check before pushing to
Github or deploys), you can run:

```
$ npm run review
```

### Build
_**NOTE:** When you run `build`, Babel will create a `build` directory. This is what your users
will interact with when they use your library. Nothing in `lib` gets shipped with your
published module._

Run once:
```
$ npm run build
```

Run the watch script:
```
$ npm run build:watch
```

_**NOTE:** the build script runs in the `prepublish` script just before you publish to npm._

## Publishing
If you already have an account with npm, you can simply run:
```
$ npm login
$ npm publish
```

If you don't have an account with npm:

_**NOTE:** Your email address is public_
```
$ npm set init.author.name "Your Name"
$ npm set init.author.email "you@example.com"
$ npm set init.author.url "http://yourblog.com"
$ npm adduser
$ npm publish
```

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines](https://github.com/alanbsmith/component-library-starter/blob/master/.github/CONTRIBUTING.md).

## License
[MIT](https://github.com/alanbsmith/component-library-starter/blob/master/LICENSE)
