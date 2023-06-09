const express = require('express');
const partnersRouter = express.Router();

partnersRouter
    .route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the partners to you');
    })
    .post((req, res) => {
        res.end(
            `Will add the partner: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .put((req, res) => {
        req.statusCode = 403;
        res.end('PUT operation not supported on /partners');
    })
    .delete((req, res) => {
        req.end('Deleting all partners');
    });

partnersRouter
    .route('/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(
            `Will send deatils of the partner: ${req.params.partnerId} to you`
        );
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('Not supported!');
    })
    .put((req, res) => {
        req.statusCode = 403;
        res.end(
            `Will update the partner: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .delete((req, res) => {
        req.end('Deleting all partners');
    });

module.exports = partnersRouter;
