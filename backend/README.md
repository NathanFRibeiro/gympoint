## Gympoint - Backend

<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/.github/logo.png?raw=true" width="200px" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>


> Gym management using Javascript stacks: node.js (backend), ReactJS (frontend) and React Native (mobile).

> This project is being built for the final challenge of Rocketseat's GoStack bootcamp.

## Requirements
- [x] Back-end: [Challenge 02](https://github.com/Rocketseat/bootcamp-gostack-desafio-02)
- [x] Back-end: [Challenge 03](https://github.com/Rocketseat/bootcamp-gostack-desafio-03)

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


## Author

👤 **Nathan Ribeiro**

* Linkedin: [Nathan Ribeiro](https://www.linkedin.com/in/nathanfribeiro/)
* Github: [@NathanFRibeiro](https://github.com/NathanFRibeiro)

## Show your support

Give a ⭐️ if you like this project!

***
_Made with ❤️ by [Nathan Ribeiro](https://github.com/NathanFRibeiro)_
