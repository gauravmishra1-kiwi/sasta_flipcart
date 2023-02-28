const User = require('../model/user')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const constant = require('../constant/constants')
const statuscode = require('../constant/httpstatuscode')

module.exports = {
    signup: async (userdata) => {
        const spassword = await bcrypt.hash(userdata.password, 12);
        const user = new User({
            name: userdata.name,
            email: userdata.email,
            password: spassword,
            phoneNo: userdata.phoneNo,
        });
        await user.save();
        return {
            message: constant.REGISTRATION_CORRECTLY,
            data: user,
        }
    },
    login:async(userdata)=>{
        const user=User.findOne({email})
        if (!user) {
            res.status(statuscode.NOT_FOUND).send(constant.LOGIN_ERROR)
        }
        const ismatch=await bcrypt.compare(password,user.password)
        if (!ismatch) {
            res.status(statuscode.NOT_FOUND).send(constant.LOGIN_ERROR)
        }
        return{
            message: constant.LOGIN,
            data:user
        }
    }
};
