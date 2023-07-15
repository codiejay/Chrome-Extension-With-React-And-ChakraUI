This video below shows you how to install and run this chrome extension in x-minutes
BUT read docs for the webpack file. That's quiet complex but you could skip it and still be golden.
Enjoy:

  https://www.loom.com/share/c499f52cf16a4a2090cffc29fc721915?sid=e9be62c4-29a6-4291-84ab-9198856c4c68

# Docs for webpack.config.js file

## TL;DR

Our Webpack configuration file is the blueprint for bundling our Chrome extension project's assets. It defines entry points for Webpack to start bundling, output destination for the bundled files, and rules for handling different types of files. It uses loaders to transform source code files as they are imported and plugins for tasks like cleaning up the build directory, generating HTML files, copying static files, and injecting environment variables. Environment variables are used to manage settings between development and production builds. Lastly, it handles static files, like images, that can be imported directly into JavaScript files.

This document is a simplified guide to help Junior and Intermediate developers understand our project's Webpack setup.

## Structure of the Configuration File

The configuration file is a JavaScript object, assigned to `module.exports`, which contains the settings for how Webpack will run.

## Key Parts of Configuration

- **Entry**: The `entry` property defines where Webpack starts bundling. In our project, we have two entry points, one for the popup page and one for the background page of our Chrome Extension.
- **Output**: The `output` property defines where Webpack puts the bundle it creates. In our case, it's set to the `build` folder in our project directory.
- **Module and Rules**: The `module` property holds a `rules` array which is used to specify what loaders to use for certain files. In our case, we have different loaders for CSS, SCSS, HTML, JavaScript and TypeScript files. Loaders are transformations that are applied to the source code of a module. They allow you to preprocess files as you `require()` or "load" them.
- **Plugins**: Plugins are used to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

## Environment Variables

In our setup, we use `dotenv` to load environment variables from a `.env` file. We use these variables in our plugins to set up the Chrome Extension manifest and to switch between development and production builds.

## Development and Production Builds

We use the `NODE_ENV` environment variable to switch between development and production builds. In development, we enable source maps to make debugging easier. In production, we minimize our code for performance.

## Handling Static Files

We use the `file-loader` to handle static files such as images. This means you can `import` images in JavaScript and get a final URL that you can use in your application.
