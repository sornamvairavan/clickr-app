## Overview
[Clickr](https://clickr-app.herokuapp.com/), a [Flickr](https://www.flickr.com/) clone, is a photo-sharing platform where users can upload photos for others to see. It is truly photo-centric platform built for photography enthusiasts to show off their work while enjoying the work of others.

## Clickr setup

To run this App locally:
  1. Git clone this repo (*https://github.com/sornamvairavan/clickr-app.git*)
  3. Run `npm install` in both the backend and frontend folders that are within the clickr-app folder to install the relevant packages.
  4. Create a `.env` file to define the environment variables, based on `.env.example` file in the backend folder - Add a user password and a strong JWT secret.
  5. Create a database user using the same credentials in the `.env` file with the ability to create databases - `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`
  6. Create the database using sequelize - `npx dotenv sequelize db:create`
  7. Run `npx dotenv sequelize db:migrate` to migrate the database.
  8. Run `npx dotenv sequelize db:seed:all` to seed the database.
  9. Run `npm start` in the backend folder to start the Express backend sever and also run `npm start` in your frontend folder to start the React frontend server.
  10. Navigate to *http://localhost:3000*.

## Technologies used
  - React
  - Redux
  - Javascript / JSX
  - HTML
  - CSS
  - Express
  - Sequelize
  - PostgreSQL
  - Heroku
  - AWS S3

## Screenshots
Splash page:
![Screen Shot 2022-01-13 at 3 47 58 PM](https://user-images.githubusercontent.com/80495013/149426663-3f58f798-8135-47eb-8fef-37eeadbfe32d.png)

Sign up Page:
<img width="1440" alt="Screen Shot 2022-03-25 at 3 00 41 PM" src="https://user-images.githubusercontent.com/80495013/160208959-6422de61-54a9-41b0-a549-e7a273a1e084.png">

Explore tab:
![Screen Shot 2022-01-15 at 2 08 02 PM](https://user-images.githubusercontent.com/80495013/149639333-acc86cc0-03f2-4890-94e2-8256732c3a33.png)

Image Details:
<img width="1440" alt="Screen Shot 2022-03-25 at 3 00 25 PM" src="https://user-images.githubusercontent.com/80495013/160209219-cb97028c-1b88-4667-847c-ecdda7727596.png">

Upload a photo:
<img width="1440" alt="Screen Shot 2022-03-25 at 2 59 34 PM" src="https://user-images.githubusercontent.com/80495013/160209157-1d7dbeec-dfcc-41bb-a804-6b338ee96cb6.png">

## Features
- Users can sign up, log in and log out.
- Users can use a demo log in to try out the site.
- Clickr members can upload, edit and delete their photos.
- Clickr members can make their photos public for every Clickr member to see, or keep it private.
- Clickr members can view all the Clickr public photos in the "Explore" tab.
- Clickr members can post and delete their own comments on any public photo.
- Clickr members can view comments on all public photos.
- Clickr members can like and unlike public photos.
- AWS is used for all storage of user uploaded files.

## Link to Wiki docs
https://github.com/sornamvairavan/clickr-app/wiki
