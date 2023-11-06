const express = require('express')
const app = express()
const PORT = 3500
const booksRouter = require('./routes/booksRouter')
const validateBooksRouter = require('./routes/validateBooksRouter')
const cors = require('cors')

app.use(cors())
app.use(express.json())

//Establish DB connection using the apt Connection string

app.use('/api/v1/books', booksRouter)
app.use('/api/v1/books/validate', validateBooksRouter)

app.listen(PORT, console.log(`Server listening at http://localhost:${PORT}/api/v1/books`))