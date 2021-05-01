import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express ();

app.use('/posts', postRoutes)

app.use(express.json({ limit : "30mb" , extended : true}));
app.use(express.urlencoded({ limit : "30mb" , extended : true}));
app.use(cors());

//https://www.mongodb.com/cloud/atlas2
const CONNECTION_URL ="mongodb+srv://shubhamsingh_12141:KkWrSEthEW57KHOz@cluster0.nkbjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser :true , useUnifiedTopology : true})
    .then(()=> app.listen(PORT, ()=> console.log(`Sever running on port ${PORT}`)))
    .catch((error) => console.log(error.message ));

mongoose.set('useFindAndModify', false);