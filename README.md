## TO RUN LOCALLY ##
### LOCAL INSTALL ###
(make sure you have Node installed)
- unzip folder and save wherever you'd like
- open your IDE of choice
- open project root folder inside the IDE
- add a `.env` file to the `server` folder
- in it, add all variables that were included in the final assessment email
### RUNNING THE APP ###
- open terminal
- navigate terminal to `.../movie-time-master/client`
- run `npm i`
- run `npm start`
- open an additional terminal
- navigate new terminal to `.../movie-time-master/server`
- run `npm i`
- run `npm start`
- refresh the browser
- enjoy the app!

## NAVIGATING THE APP ##
It starts on the homepage, displaying all trending movies for the week.  Each movie is represented by a movie card with a poster and title.  They are all clickable and navigate to another page displaying the details of the movie.  Each details page has a star which, when clicked, allows you to save the movie to your local storage as a favorite movie.  You can also click it again to remove it from your favorite list.  When navigating to the favorites page, you should see all favorite movies listed with their own cards.  Back on the home page, you should also see a star icon on the top right corner of the movie card, indicating that it is already a favorite.

-------------------------------------------------------------------------------------------

## DEPENDENCIES INSTALLED
### CLIENT
- react-router-dom
- styled-components
### SERVER
- express
- cors
- dotenv

-------------------------------------------------------------------------------------------

### MISTAKES
- `server/.env` was committed with sensitive information (API info)
  - new key/token have been created since

-------------------------------------------------------------------------------------------

### FUTURE FEATURES
- all features are accounted for, except for unit testing
- would like to add pagination to the trending videos page instead of appending `page=2` in url
