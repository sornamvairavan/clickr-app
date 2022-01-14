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

## Screenshots
Splash page:
![Screen Shot 2022-01-13 at 3 47 58 PM](https://user-images.githubusercontent.com/80495013/149426663-3f58f798-8135-47eb-8fef-37eeadbfe32d.png)

Sign up Page:
![Screen Shot 2022-01-13 at 10 56 27 PM](https://user-images.githubusercontent.com/80495013/149464682-b959920d-a1d7-4325-87c5-bcd3d30a9091.png)

Explore tab:
![Screen Shot 2022-01-13 at 3 25 43 PM](https://user-images.githubusercontent.com/80495013/149425856-7aafc77c-3eb7-472a-b9b6-cdf7ec0a57f1.png)

Upload a photo:
![Screen Shot 2022-01-13 at 3 47 01 PM](https://user-images.githubusercontent.com/80495013/149426573-dde49165-ff6b-43c2-b61c-5578448ccddc.png)

## Features
- Users can sign up, log in and log out.
- Users can use a demo log in to try out the site.
- Clickr members can upload, edit and delete their photos.
- Clickr members can make their photos public for every Clickr member to see, or keep it private.
- Clickr members can view all the Clickr public photos in the "Explore" tab.
- Clickr members can post and delete their own comments on any public photo.
- Clickr members can view comments on all public photos.

## Link to Wiki docs
https://github.com/sornamvairavan/clickr-app/wiki

## Future features
- Likes
- Albums
- Follows
- Favorites
- AWS upload
- Google Maps
