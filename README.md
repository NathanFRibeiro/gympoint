<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="https://github.com/NathanFRibeiro/gympoint/blob/master/frontend/src/assets/logo.png?raw=true" width="200px" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>


> Gym management using Javascript stacks: node.js (backend), ReactJS (frontend) and React Native (mobile) for Android app.

> This project is being built for the final challenge of Rocketseat's GoStack bootcamp.

## Requirements
- [x] Back-end: [Challenge 02](https://github.com/Rocketseat/bootcamp-gostack-desafio-02)
- [x] Back-end: [Challenge 03](https://github.com/Rocketseat/bootcamp-gostack-desafio-03)
- [x]  Front-end web: [Challenge 09](https://github.com/Rocketseat/bootcamp-gostack-desafio-09)
- [x]  Front-end mobile: [Challenge 10](https://github.com/Rocketseat/bootcamp-gostack-desafio-10)

## Technologies

This project was developed using the following libs and technologies:

### Back-end

- [x] [Node.js](https://nodejs.org/en/)
- [x] [Express](https://expressjs.com/)
- [x] [Postgres](https://www.postgresql.org/)
- [x] [Nodemailer](https://nodemailer.com/)
- [x] [Sequelize](https://sequelize.org/)
- [x] [Handlebars](https://handlebarsjs.com/)
- [x] [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [x] [Nodemon](https://nodemon.io/)
- [x] [Sucrase](https://github.com/alangpierce/sucrase)
- [x] [date-fns](https://date-fns.org/)
- [x] [Bee Queue](https://github.com/bee-queue/bee-queue) 
- [x] [Sentry](https://sentry.io/)
- [x] [Youch](https://www.npmjs.com/package/youch)
- [x] [Yup](https://github.com/jquense/yup)
- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)

### Front-end web

- [x] [React](http://reactjs.org)
- [x] [Redux](https://redux.js.org/)
- [x] [Redux Saga](https://github.com/redux-saga/redux-saga)
- [x] [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [x] [Styled Components](https://www.styled-components.com/)
- [x] [Redux Persist](https://github.com/rt2zz/redux-persist)
- [x] [Reactotron](https://github.com/infinitered/reactotron)
- [x] [Axios](https://github.com/axios/axios)
- [x] [date-fns](https://date-fns.org/)
- [x] [Polished](https://github.com/styled-components/polished)
- [x] [React-Toastify](https://github.com/fkhadra/react-toastify)
- [x] [@Rocketseat/Unform](https://github.com/Rocketseat/unform)
- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)

### Mobile

- [x] [React Native](https://facebook.github.io/react-native/)
- [x] [React Navigation](https://reactnavigation.org/)
- [x] [Redux](https://redux.js.org/)
- [x] [Redux Saga](https://github.com/redux-saga/redux-saga)
- [x] [Styled Components](https://www.styled-components.com/)
- [x] [Redux Persist](https://github.com/rt2zz/redux-persist)
- [x] [Reactotron](https://github.com/infinitered/reactotron)
- [x] [Axios](https://github.com/axios/axios)
- [x] [ESLint](https://eslint.org/)
- [x] [Prettier](https://prettier.io/)

## Installation

```sh
# create and start two images on docker: database (postgres) and redis.
docker run --name database -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
docker run --name redisbase -p 6379:6379 -d -t redis:alpine
docker start database redisbase
```
### Backend
```sh
# install all dependencies
yarn install

# execute sequelize migrations and seeds
yarn sequelize db:migrate
yarn sequelize db:seed:all

# start the e-mail queue service
yarn queue

# start the app on a new terminal window
yarn dev
```

### Frontend web
```sh
# install all dependencies
yarn install

# start the app on a new terminal window
yarn start
```

### Mobile
```sh
# install all dependencies
yarn install

# start the app on a new terminal window
# this app was developed only for android.
react-native run-android
react-native start
```

## Author

👤 **Nathan Ribeiro**

* Linkedin: [Nathan Ribeiro](https://www.linkedin.com/in/nathanfribeiro/)
* Github: [@NathanFRibeiro](https://github.com/NathanFRibeiro)

## Show your support

Give a ⭐️ if you like this project!

***
_Made with ❤️ by [Nathan Ribeiro](https://github.com/NathanFRibeiro)_
