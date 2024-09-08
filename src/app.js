// app.js
const express = require('express');
const { swaggerUi, swaggerSpec } = require('../swagger');
const app = express();

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Your other middleware and routes
app.use(express.json());
app.use('/api', require('./routes/productRoutes')); // Update the path to your routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
