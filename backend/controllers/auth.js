import bcryptjs from 'bcryptjs';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';

export const register = async (req, res) => {
if(!req.body.name || !req.body.email || !req.body.password) {
    return res.json('Please fill in all of the inputs');
}

try{
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User ({
        name: req.body.name, 
        email: req.body.email,
        password: hashedPassword
    });
    await newUser.save();
    return res.status(201).json('New User Created');
} catch (err) {
    console.log(err);
    return res.json('server error');
}
};

export const login = async (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.json('Please fill in all of the inputs.')
    }
    try {
        const user = await User.findOne({email: req.body.email}).select(
            'name email password'
        );
        if (!user) {
            return res.status(404).json("No User Found :(")
        }
        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password);
        if(!isPasswordCorrect) {
            return res.json('Password Incorrect')
        }
        const payload = {
            id: user._id,
            name: user.name
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
        return res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json({'message': 'login sucessful!'})
    }catch(err){
        console.log(err);
        return res.json('server error')
    }
};

export const register = async (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return next(
        createError({
          message: 'Name, Email & password are required',
          statusCode: 400,
        }),
      );
    }
  
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(req.body.password, salt);
  
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
  
      await newUser.save();
      return res.status(201).json('New User Created');
    } catch (err) {
      return next(err);
    }
  };