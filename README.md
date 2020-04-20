# Next React-Redux Boilerplate

This project eases the starting of a bext app using redux as a state manager.

## .env file

Create a .env file at the root of the project then include the following inside it:

```
BASE_API_URL=http://localhost:5000
```

## API Request

This project includes `redux-api-middleware`, `redux-api-middleware-broker` and `isomorphic-fetch` as dependencies to make it easier to work with internet request.

An example request exists inside of: `store/actions/currentUser.js` which attempts to create a new user.

To some level of complexity, this project is batteries included.
