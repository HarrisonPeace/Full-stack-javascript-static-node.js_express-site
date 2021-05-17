const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;

router.get('/', (req, res, next) => {
    res.redirect(`/`)
})

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    let project;

    for (const project_ of projects) {
        if(project_.id == id) {
            project = project_
            break
        }
    }

    if (project) {
        res.locals.styleDisplayLocation = `/project/${id}`;
        res.render('project', project);
    } else {
        next(createError(404, 'PROJECT NOT FOUND'));
    }
    
});

module.exports = router;