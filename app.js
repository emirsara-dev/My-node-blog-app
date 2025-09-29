const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();
// express app
const app = express();

// connect to mongodb
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
    .then((result) => app.listen(process.env.PORT))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 5',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('68d46f6aae84f9766946237b ')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });


// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
    // res.send('<p>home page</P>');
    //res.sendFile('./views/index.html', { root: __dirname});
    // const blogs = [
    //     {title: 'Dark side of the Internet', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    //     {title: 'Hotel California', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    //     {title: 'Top 10 2025 movies', snippet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
    // ]
    // res.render('index', { title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    // res.send('<p>home page</P>');
    //res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', { title: 'About'});
});


// redirects
app.get('/about-us', (req, res) => {
    //res.redirect('/about');
    res.status(301).render('about', { title: 'About'});
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', { title: '404'});
});