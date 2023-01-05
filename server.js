// import modules

import express from 'express'

import { movies } from './data/movies.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes


// url localhost:3000
app.get('/', function(req, res){
  res.redirect('/movies')
})

// url localhost:3000/home
app.get('/home', function(req, res){
  res.redirect('/movies')
})

app.get('/movies', function(req,res){
  res.render('index', {
    movies: movies
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

app.use(express.static('public'));