const { signup, login } = require('../services/user_services');
const statuscode=require('../constant/httpstatuscode')
const student = require('../model/user')
const becypt=require('bcrypt')
module.exports = {
    signup: async (req, res) => {
        try {
            const result = await signup(req.body);
            res.status(statuscode.CREATED).send(result);
        } catch (e) {
            res.send(e);
        }
    },
    login: async(req,res)=>{
        try {
            const user=findOne.student({email})
            
            const result=await login(req.body);
            res.status(statuscode.CREATED).send(result);
        } catch (error) {
            res.send(error);
        }
    }
}



