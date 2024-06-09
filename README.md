# Movie Data Fetcher

This repository contains a simple Node.js application that fetches movie data using the OMDB API. It utilizes the Axios library to retrieve information about a specific movie title and logs it to the console.

## Features

- Fetches movie data from OMDB API
- Uses Axios for making HTTP requests
- Logs movie details to the console

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Sabandogan/movie-data-fetcher
    cd movie-data-fetcher
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Obtain an OMDB API key from [OMDB API](http://www.omdbapi.com/apikey.aspx) and replace `YOUR_OMDB_API_KEY` in the code with your actual API key.

## Usage

1. Edit the `movieTitle` variable in the code to specify the movie title you want to fetch data for.
2. Run the application:
    ```sh
    node index.js
    ```

3. The movie data will be fetched from the OMDB API and logged to the console.

