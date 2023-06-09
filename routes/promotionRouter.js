const express = require('express');
const promotionsRouter = express.Router();

promotionsRouter
    .route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })
    .post((req, res) => {
        res.end(
            `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .put((req, res) => {
        req.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        req.end('Deleting all promotions');
    });

promotionsRouter
    .route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(
            `Will send deatils of the promotion: ${req.params.promotionId} to you`
        );
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('Not supported!');
    })
    .put((req, res) => {
        req.statusCode = 403;
        res.end(
            `Will update the promotion: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .delete((req, res) => {
        req.end('Deleting all promotions');
    });

module.exports = promotionsRouter;
