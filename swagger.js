// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API documentation for managing products',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'API Server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the files with Swagger annotations
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
