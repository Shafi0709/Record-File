import express from 'express';
const app = express();
const port = 4000;
import route from './routes/routes.js'
import path from 'path'
import connectDB from './connectDB/connectDB.js';
import bodyParser from 'body-parser';

// connection for Database
connectDB()

//body-parser
app.use(bodyParser.urlencoded({extended: false}))


// setup for static files
app.use(express.static(path.join(process.cwd(), 'public')))

//setup for ejs template
app.set('view engine', 'ejs')

app.set('views', './views')

// routes
app.use('/', route);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
