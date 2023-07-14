const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { mongoose } = require('./db.js');
const candidatController = require('./controllers/candidatController.js');
const userController = require('./controllers/userController.js');
const { sendEmail } = require('./shared/mailer.js');
var app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:4200' 
}));

app.get('/',(req,res)=>{
    res.send('Backend 1.0.0')
});
app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/api/user',userController);
app.use('/api/candidat', candidatController);
  
