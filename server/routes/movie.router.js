const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "movie_genre" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

// gets all movies from database
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM movies ORDER BY id;`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('error from server getting movies', err);
  })
})

// gets one specific movie from database for details page
router.get('/:id', (req, res) => {
  movieId = req.params.id;
  const queryText = `
                    SELECT movies.title, movies.poster, movies.description, genres.name FROM movies
                    JOIN movie_genre ON movies.id = movie_genre.movie_id
                    JOIN genres ON movie_genre.genre_id = genres.id
                    WHERE movies.id = $1;
                    `;
  pool.query(queryText, [movieId])
  .then(result => {
    console.log(result.rows);
    res.send(result.rows);
  })
  .catch(err => {
    console.log('error from server getting movie details', err);
  })
})

module.exports = router;