const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

const {userRouter} = require('./routes/userRoutes.cjs')
// Define your routes, middleware, etc.
app.use('/' , userRouter )
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
