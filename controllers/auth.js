const AuthServices = require('../services/auth')

const userLogin=async(req, res)=> {
    try {
        const data = req.body;
        const user = await AuthServices.userLogin(data);
        return res.status(200).json({msg : 'Login Successfull', result : user});
    } catch (error) {
        console.error('Error in user Login:', error);
        return res.status(500).json({ message: 'Failed to login user' });
    }
}
const getUsers = async (req, res) => {
    try {
        const users = await AuthServices.getAllUsers();
        return res.status(200).json({ msg: 'Users retrieved successfully', result: users });
    } catch (error) {
        console.error('Error in getting users:', error);
        return res.status(500).json({ message: 'Failed to retrieve users' });
    }
};
module.exports={
    userLogin,
    getUsers
}