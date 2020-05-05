import User from '../models/User';


class UserController {

    async auth(req, res) {

        try {

            const { email, password } = req.body;
            
            const existsUser = await User.findOne({where: {email: email}});

            if (!existsUser) { throw new Error('User not found') }
            
            const validationUser = await User.findOne({where: {email: email, password: password}});

            if (!validationUser) { throw new Error('Credentials invalid') }
            
            return res.status(200).json({status: true, user_id: validationUser.user_id});
        
        } catch (error) { 
            switch (error.message) {
                case 'User not found':
                    return res.status(200).json({error: 'User not found', status: false});
                case 'Credentials invalid':
                    return res.status(200).json({error: 'Credentials invalid', status: false});
                default:
                    return res.status(400).json({error: error.message });
            }
        }
    }
}

export default new UserController();