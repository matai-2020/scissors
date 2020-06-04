const express = require('express') // Import express for web servers
const server = express() // Create server
const port = process.env.PORT || 3000 // port used for deploying

// Make server listen to port 3000
server.listen(port, () => {
    console.log('Server is listening to port:', port)
})