import jwt from 'jsonwebtoken';

const secretKey = 'Helishoter';
const expiration = '1h'

export function createToken(user){
  return jwt.sign(user,secretKey,{expiresIn: expiration});
}

export function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const splitHeader = authHeader.split(" ");
      const token = splitHeader[1];
      if (token) {
          jwt.verify(token, secretKey, (err, decoded) => {
              if (err) {
                  return res.status(401).json({ message: 'Token is invalid' });
              } else {
                  next();
              }
          });
      } else {
          return res.status(403).json({ message: 'Token is not provided' });
      }
  } else {
      return res.status(403).json({ message: 'Authorization header is missing' });
  }
}

export function addTokenToRequest(req, res, next) {
  let tk = res.headers.authorization;
  req.token = tk;
  next();
}

export function decodeToken(token){
    token = token.split(" ")[1];
    return jwt.verify(token,secretKey);
}
