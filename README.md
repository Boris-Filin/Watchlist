# Watchlist

This is a simple watchlist webapp built with Django and React. It was intended as practice for both. The whole process took approximately 13 hours over the course of a single day. That time includes the styling of the website.

## Running the app

For this app, both Django and React have to be listening at the same time for the project to work. After cloning the repository, run
`python manage.py runserver`
in the Django directory and
`npm start`
in the React one.
After that, the website will be located on localhost:3000.

## Features

This implementation is powered by The Movie DB. It draws from a large pool of movies and shows, along with their data, to create a search field where you can pick what you want to watch.

The two main subpages are the watchlist and the search page. The former contains a list of all of the movies you currently have on your list with the ability to remove them. The latter has a search field that is connected to TMDB and retrieves movies according to your query, which you can then add to the watchlist as well.

## Implementation

This project uses Django for backend and React for frontend. It interacts with two databases - the local one, storing the person's watchlist, and TMDB API for movie queries. The local DB is implemented as Djungo's own SQLite and would not be suitable for production. This is a demo project only.

The two parts of the program interact through requests on the local network, sending and receiving information as URL queries.

## Future improvements

Given the short timeframe of development, a lot of the basic quality of life features were left out in favour of having a finished project for once. But they might be added in the future.

Some of the more obvious necessities include:

- Pseparating query results into pages
- Adding a way to tell if a movie is already on the watchlist from the search page
- Improving the rushed visual design
- Adding more intricate support for incomplete database entries
- Adding more parameters to search

And so many more.
