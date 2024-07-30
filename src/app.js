const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes'); 

app.use(express.json()); 
app.use('/api', productRoutes); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

