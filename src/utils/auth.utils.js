import jwt from "jsonwebtoken"
export const generateToken = (res, user) => {
    const payload ={
        user
    }

    const token = jwt.sign(payload, '889565fbgbdfaffsf',
         { expiresIn:  "3d"});

    res.cookie( "token", token, {
        secure: true
    } )
}