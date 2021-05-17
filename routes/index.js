const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const projects = require('../data/projects.json');

router.use(function(req, res, next) {
    if(req.method == 'POST') {
        if (req.cookies.displayStyle == 'light') {
            req.displayStyle = 'dark'
        } else {
            req.displayStyle = 'light'
        }
        res.cookie('displayStyle', req.displayStyle, {overwrite: true})
        return res.redirect(req.path);
    }
    res.locals.displayStyle = req.cookies.displayStyle
    next();
})

router.get('/', (req, res, next) => {
    console.log(res.locals.displayStyle)
    res.locals.styleDisplayLocation = '/';
    res.render('index', projects);
});

router.get('/about', (req, res, next) => {
    res.locals.styleDisplayLocation = '/about';
    res.render('about');
});

router.get('/forbidden', (req, res, next) => {
    next(createError(403, 'FORBIDDEN, Please return home'));
});

module.exports = router;