const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
//? I tried using the url above but was unable to get route to work
router.put('/', (req, res) => {
const queryText= ` UPDATE "gallery" SET likes=likes+1 WHERE id=$1;`;
const values = [ req.query.id ];
pool.query( queryText, values )
.then(( results )=>{
  res.sendStatus( 200 )
})
.catch(( err )=>{
  console.log('error put router', err );
  res.sendStatus( 400 );
})
});

// GET /gallery
router.get('/', (_req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY id ASC;`;
  pool.query( queryText )
  .then(( results ) => { 
    res.send( results.rows );
    //!can only send one req. and one res. so line below will break code the
    //!the console logs were used to try and isolate problem
    //console.log('before');
    // res.sendStatus ( 200 );
    //console.log('after')
  })
  .catch(( err )=>{
    console.log( 'err in GallRouter GET', err );
    res.sendStatus ( 400 );
  });
});

module.exports = router;
