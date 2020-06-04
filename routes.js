const express = require('express') // Import express to create Router
const fs = require('fs') // Import FileSystem
const path = require('path')

const filePath = path.join(__dirname, 'teacher-data.json')

const router = express.Router() // Create Router

module.exports = router

router.get('/', (req, res) => {
    // Redirect root route to 'start' page
    res.redirect('/start') 
})

router.get('/start', (req, res) => {
    // Must haves:
    //  1. Title: Which Teacher are you?
    //  2. Start button redirects to First Question
    res.render('questions/index')
    console.log('This is the start')

    // res.redirect('/question/1')
})

router.get('/question/:id', (req, res) => {
    // Dynamic route points to question pages

    // res.redirect('/result')
})

router.get('/result', (req, res) => {
    // Must haves:
    //  1. Result
    //  2. 'Start Again' button which redirects to 'start' page (Clean Slate)
    res.send('You got Don!')
})

