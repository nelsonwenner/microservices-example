import authenticateAuth from '../../services/auth/authenticate.auth';


class UserController {

    async auth(req, res) {

        try {
            
            const { id, token } = await authenticateAuth.login(req.body);

            return res.status(200).json({ id: id, token: token }); 
        
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