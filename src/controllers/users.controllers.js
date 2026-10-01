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

    const userFound = await userModel.findOne({email: data.email});
    
    if( !userFound){
        const user = await userModel.create(data);
        return res.status(201).json({
            ok: true,
            msg: 'User created',
            data: user
        });
    }

    return res.status(409).json({
            ok: false,
            msg: 'User is already registered'
    });
      
    
    } catch (error){
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'server error'
    })
}

}