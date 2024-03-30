const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// ... your other code ...

let books = [
  // Add some initial sample data
  { title: "The Hitchhiker's Guide to the Galaxy", rating: 4 },
  { title: "Pride and Prejudice", rating: 5 }
];

// ... rest of your code ...


app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/books', (req, res) => {
    const { title, rating } = req.body;
    const newBook = { title, rating };
    books.push(newBook);
    res.status(201).json(newBook);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
