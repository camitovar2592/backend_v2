import { userModel } from "../models/users.models.js";

export async function getUsers(req, res) {

try{

    const users = await userModel.find()

// si no hay usuarios

    if(users.length===0){
        return res.status(404).json({
            ok: false,
            msg: 'User not found'
        })
    }
    return res.status(200).json({
            ok: true,
            msg: 'Users found',
            data: users
    });

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

export async function getOneUser(req, res) {

try{

   const id = req.params.id

    const userFound = await userModel.findById(id);

    res.send(userFound); 

    } catch (error){
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'server error'
    })
}

}