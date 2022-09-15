# Let's Roll

## What is it?

- **A way for Boulder roller skaters to build community by sharing local events!**
- Users can see what local skate events are happening.

- Users can add events to the website by submitting them in the form.

## Server: db.json

- To get the server to run, install it by typing `npm install -g json-server` in the terminal.

- Then type the command line to run the server: `json-server --watch db.json --port 3004`

- When the website is loaded, a fetch request pulls data from db.json, and updates state with that data. State is passed down as a prop to the EventsList component, which maps over the data and renders the events.

<!-- ## Blog: -->

<!-- This section needs to be updated when a blog is ready -->

<!-- - For help on setting up a basic fetch request, refer to my [blog](https://dev.to/jgifford82/how-to-make-a-fetch-request-4hlh). -->

<!-- This section needs to be updated when a blog is ready -->

<!-- ## [Video walk-through](https://youtu.be/z1JCUrtSRgk) -->

## Project requirements met:

1. Make a single page application (only one index.html file) using create-react-app.
2. Use at least 5 components in a way that keeps your code well organized.

   - **App**
     - **NavBar**
     - **Home**
     - **About**
     - **EventsContainer**
       - **EventsForm**
       - **EventsList**

3. At least 3 client-side routes using React Router. Include a nav bar or other UI element that allows users to navigate between routes.
   - **Home**
   - **About**
   - **Events**
4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component.
5. Add some styling: you're encouraged to write your CSS from scratch, either by using styled components or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React Bootstrap, Semantic UI, or Material UI) if you prefer.
   - **[Material UI](https://mui.com/core/)**

## Image Resource (free): https://www.pexels.com/

- Roller skates image on Home page by [Laura Stanley](https://www.pexels.com/photo/white-and-red-roller-skates-2005992/)
- Group of roller skaters sitting image on About page by [RODNAE Productions](https://www.pexels.com/photo/people-wearing-roller-skates-7335292/)
- Group of roller skaters image on Events page by [RODNAE Productions](https://www.pexels.com/photo/man-in-black-t-shirt-and-yellow-pants-running-on-road-7335260/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
