import User from '../../app/models/User';
import Token from './token.auth';

class AuthenticateAuth {

    async setupLogin(id, email, password, jwtData) {
        const passwordOk = await User.findOne({where: {email: email, password: password}});

        if (!passwordOk) { throw new Error('ERR_INVALID_PASSWORD'); }

        const token = await Token.generate(jwtData);

        return { id, token };
    }

    async login(data) {
        const user = await User.findOne({where: {email: data.email, password: data.password}});
        
        if (!user) { throw new Error('ERR_USER_NOT_FOUND'); }
 
        const JWTData = {
            exp: Math.floor(Date.now() / 1000) + 54200,
            info: 'api-auth',
            id: user.user_id,
            email: user.email
        };
     
        return await this.setupLogin(user.user_id, data.email, data.password, JWTData);
    }
}

export default new AuthenticateAuth();