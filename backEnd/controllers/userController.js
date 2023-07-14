const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { roles } = require('../shared/enum/enum');
const user = require('../models/user');
const {send}= require('../shared/mailer');

function generateRandomPassword() {
  //const length = Math.floor(Math.random() * 10) + 8; // Random length between 8 and 17
  const length = 10;
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  const charactersLength = characters.length;

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    password += characters.charAt(randomIndex);
  }

  return password;
}

router.get('/',async (req, res)=> {
    try{
    const cookie = request.cookies['jwt'];
    const claims = jwt.verify(cookie,"secret")
    if(!claims){
        return res.status(400).send({
            message:'unauthaurized',
        })
    }
    const user = await User.findOne({_id: claims._id})
    const {password, ...data}= await user.toJSON();
    res.send(data);
}catch(e){
    return res.status(400).send({
        message:'unauthaurized',
    })
}
})
router.get('/users/:companyId',async (req,res)=>{
  const query={
    role:'user',
    companyId:req.params.companyId
  }
  console.log(req.params);
  const users = await User.find(query);
  console.log(users);
  res.send(users);
})
/*router.get('/user',async (req, res)=> {
    try{
  console.log('data')
  res.send('data');
}catch(e){
    return res.status(400).send({
        message:'unauthaurized',
    })
}
})*/

router.post('/signUp', async (req, res) => {
    const { user } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = new User({
      companyName: user.companyName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      city:user.city,
      typeBusiness:user.typeBusiness,
      password: hashedPassword,
      role: roles.company
    });
    console.log(newUser);
    await newUser.save();
    res.status(202).end();
  });
  
  router.post('/create', async(req, res)=>{
    const {user} = req.body;
    const salt = await bcrypt.genSalt(10);
    randompassword=generateRandomPassword();
    const hashedPassword = await bcrypt.hash(randompassword, salt);
    console.log(user.companyId);
    const newUser = new User({
      fullName: user.fullName,
      email: user.email,
      companyId:user.companyId,
      password:hashedPassword,
      occupation:user.occupation,
      role:roles.user
    });
    const options ={
      from:"recruitnova@outlook.com",
      to:user.email,
      subject:"Your Account is Created !",
      text: `Hello, Your Company has created your account successfully with the email ${user.email} and password " ${randompassword} "`
    };
   //send(options);
    console.log(newUser);
    await newUser.save();
    res.status(202).end();

  });

  router.post('/signIn', async (req, res) => {
    const { user } = req.body;
  
    const currentUser = await User.findOne({ email: user.email });
  
    if (!currentUser) {
      return res.status(404).send({
        message: 'User not found',
      });
    }
  
    const passwordMatch = await bcrypt.compare(user.password, currentUser.password);
  
    if (!passwordMatch) {
      return res.status(400).send({
        message: 'Invalid Password!',
      });
    }
  
    const token = jwt.sign({ email:currentUser.email,_id: currentUser._id }, 'secret',{expiresIn:"1h"});
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      id: currentUser._id,
      companyName: currentUser.companyName,
      email: currentUser.email,
      role: currentUser.role
      
    })
  });
  router.delete('/:id',async (req,res)=>{
  await user.findByIdAndDelete(req.params.id);
  res.status(204).end();
  })
  
router.post('/logout', (req,res)=>{
    res.cookie('jwt', '', {maxAge: 0});
    res.send({
        message:"logged out"
    })
})
module.exports = router;