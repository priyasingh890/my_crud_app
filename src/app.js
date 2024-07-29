const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes'); // Adjust path if necessary

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', productRoutes); // Use productRoutes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

