# Get it done!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all the dependencies required to run the app

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

## If only we had more time...

This was a lot of fun, though I felt like the 4 hours ran out a lot faster than I was expecting

### Choices made

Most decisions around feature implementations were made based on the limited time, for example

- Arrow buttons to move cards, instead of drag-and-drop
- Nested card collection inside column collection, instead of flat arrays with referenceIds

### Features left forgotten

This app feels very rough around the edges because of the feature set I had to leave out to make the deadline. If i'd had more time to polish, these are the first things that come to mind that I consider missing

- Better keyboard and accessibility interaction
- Atomic components (abstract common styles, eg. card and column textareas)
- SVG icons instead of characters (eg. + and >)
- Better user input validation (provide default/fallback values for blank textareas)
- Unit tests for actions and utils
