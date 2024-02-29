const express = require("express");
const connectDB=require("./config/db")
const userRoutes = require('./routes/userRoute');
const app = express();

require('dotenv').config();
connectDB()

const port = process.env.PORT || 4000;
app.use(express.json())

//routes here
app.use('/api/users', userRoutes);


//starting server
app.listen(port, (err) => {
    if (err) {
        console.log(`Error to start server`);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
});