import jwt from 'jsonwebtoken';

const secretKey = 'Helishoter';
const expiration = '1h'

export function createToken(user){
  return jwt.sign(user,secretKey,{expiresIn: expiration});
}

export function checkToken(req, res,next) {
    const splitTk = req.headers.authorization.split(" ");
    const tk = splitTk[1];
    if (tk) {
      jwt.verify(tk, secretKey, (err, decode) => {
        if (err) {
          return res.status(401).json({ message: 'Token false' }); 
        } else {
            next();
        }
      });
    } else {    
        return res.status(403).json({ message: 'Token are not provided' }); 
    }
}

export function tokenMiddleware(req, res, next) {
    const token = req.headers.authorization ? req.headers.authorization : "";
    res.set('Authorization', `Bearer ${token}`); 
}
