import { userModel } from "../models/users.models.js";

export async function getUsers(req, res) {

try{

    res.send('Users Found')

}catch (error){
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'server error'
    })
}

}

export async function createUsers(req, res) {

try{

   const data = req.body;
   const user = await userModel.create(data)
   console.log(user)
    res.send(user)

}catch (error){
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'server error'
    })
}

}