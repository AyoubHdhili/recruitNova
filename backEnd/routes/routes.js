const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User} =require('../models/user')
router.post(('/SignUp', async (req,res) =>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        email: req.body.name,
        password: req.body.password,
    })
    const result = await user.save();
    const {password, ...data} = await result.toJSON();
    res.send(data);
}));

router.post('/SignIn',async (req, res)=>{
    const user = await User.findOne({email:req.email})

    if(!user){
        return res.status(404).send({
            message: 'user not found'
        })
    }
    if (!await bcrypt.compare(req.body.password, user.password)){
        return res.status(400).send({
            message:'Invalid Password!',
        })
    }
    const token = jwt.sign({_id: user._id}, "secret");
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24*60*60*100//one day
    })
    res.send({
        message:'success'
    });
})
router.get('user',async (req, res)=> {
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
router.post('/logout', (req,res)=>{
    res.cookie('jwt', '', {maxAge: 0});
    res.send({
        message:"logged out"
    })
})
module.exports = {router};