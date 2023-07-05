const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
require('../db/mongoose')

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use(express.static('public'));
const hbs = require('hbs');

app.set('view engine', 'hbs');


//route
app.use((req, res, next) => {
    // Check if the requested format is HTML, JSON, or text
    const acceptedFormats = ['html', 'json', 'text'];
    const format = req.accepts(acceptedFormats);
  
    if (format === 'html') {
      // Handle HTML 404 error
      // res.status(404).send('<h1>Page Not Found</h1>');
      res.status(404).render('404')
   
    
    } else if (format === 'json') {
      // Handle JSON 404 error
      res.status(404).json({ error: 'Page Not Found' });
    } else if (format === 'text') {
      // Handle plain text 404 error
      res.status(404).send('Page Not Found');
    } else {
      // No accepted format, move to the next middleware
      next();
    }
  });


  const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
  


