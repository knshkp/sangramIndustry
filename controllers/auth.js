const AuthServices = require('../services/auth')

export async function userLogin(req, res) {
    try {
        const { mobileNumber } = req.body;
        const user = await AuthServices.userLogin(mobileNumber);
        return res.status(200).json({msg : 'Login Successfull', result : user});
    } catch (error) {
        console.error('Error in user Login:', error);
        return res.status(500).json({ message: 'Failed to login user' });
    }
}

export async function userSignUp(req, res) {
    try {
        const { userData } = req.body;
        const user = await AuthServices.userLogin(userData);
        return res.status(200).json({msg : 'Sign Up Successfull', result : user});
    } catch (error) {
        console.error('Error in user Sign Up:', error);
        return res.status(500).json({ message: 'Failed to sign up user' });
    }
}