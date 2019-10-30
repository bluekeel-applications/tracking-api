const serverless = require('serverless-http');
const epsagon = require('epsagon');

const server = require('./app');

epsagon.init({
    token: '23caa6d6-a4c3-48f0-8051-7416f55d4cb8',
    appName: 'bluekeel-tracking-api',
    metadataOnly: false // Optional, send more trace data
});

const handler = serverless(server);

module.exports.server = epsagon.lambdaWrapper(
    async (event, context) => await handler(event, context)
);