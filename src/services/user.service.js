import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

//create new user

export const Userregistration = async (body) => {
  console.log("req.body before hashing--------------",body);
  console.log("password before hashing--------------",body.password);
  const saltRounds = 10;
  const hash = bcrypt.hashSync(body.password, saltRounds);
  console.log("hash password--------------",hash);
  body.password = hash;
  console.log("body.password after hashing--------------",body.password);
  console.log("req.body after hashing--------------",body);
  const data = await User.create(body);
  return data;
};
//login user
export const Userlogin = async (body) => {
  const user = await User.findOne({ email: body.email });
  if(user === null){
    throw new Error("User does not exists")
  }else{
    const validPassword = bcrypt.compareSync(body.password, user.password)
    console.log(validPassword)
    if(validPassword){
      const token = jwt.sign({"email": user.email,"id": user._id},process.env.PRIVATE_KEY)
      return token
    }
    else{
      throw new Error ("Invalid password")
    }
  } 
}