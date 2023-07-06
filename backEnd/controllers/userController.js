const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { roles } = require('../shared/enum/enum');

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

router.get('/user',async (req, res)=> {
    try{
            console.log("ahmed");
    res.send('data');
}catch(e){
    return res.status(400).send({
        message:'unauthaurized',
    })
}
})

router.post('/signUp', async (req, res) => {
    const { user } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = new User({
      companyName: user.companyName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: hashedPassword,
      role: roles.company
    });
    console.log(roles.company);
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
      token:token,
      expiresIn:3600
    })
  });
  
router.post('/logout', (req,res)=>{
    res.cookie('jwt', '', {maxAge: 0});
    res.send({
        message:"logged out"
    })
})
module.exports = router;