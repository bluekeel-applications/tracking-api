'use strict';

const server = require("apollo-server-lambda");
const schema = require('./schema');

exports.graphql = server.graphqlLambda((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;

   return {
       schema: schema,
       context: {
           headers,
           functionName,
           event,
           context
       }
   };
});

exports.graphiql = server.graphiqlLambda({
    endpointURL: '/Prod/graphql'
});

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Who farted?',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
