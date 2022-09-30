# Let's Roll

## What is it?

- **A way for Boulder roller skaters to build community by sharing local events!**
- Users can see what local skate events are happening.

- Users can add events to the website by submitting them in the form.

## Image Resource (free): https://www.pexels.com/

- Roller skates image on Home page by [Laura Stanley](https://www.pexels.com/photo/white-and-red-roller-skates-2005992/)
- Group of roller skaters sitting image on About page by [RODNAE Productions](https://www.pexels.com/photo/people-wearing-roller-skates-7335292/)
- Group of roller skaters image on Events page by [RODNAE Productions](https://www.pexels.com/photo/man-in-black-t-shirt-and-yellow-pants-running-on-road-7335260/)

# Installation

In a terminal, type the following:

```
git clone git@github.com:jgifford82/skate-events-app.git
cd skate-events-app
code .
```

## Server: db.json

- To get the server to run, type the command line:
  ```
  npm run server
  ```
- Open another terminal in the editor and type:

  ```
  npm install
  npm start
  ```

- When the website is loaded, a fetch request pulls data from db.json, and updates state with that data. State is passed down as a prop to the EventsList component, which maps over the data and renders the events.
