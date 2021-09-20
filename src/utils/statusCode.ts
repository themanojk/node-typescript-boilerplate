var statusCode = {
  "SOMETHING_WENT_WRONG":{
    code: 422,
    message: 'Something Went Wrong'
  },
  "SUCCESS": {
    code: 200,
    message: "Success"
  },
  "AUTHENTICATION_FAILED":{
    code: 401,
    message: 'Authentication Failed'
  },
  "TOKEN_AUTHENTICATION_FAILED":{
    code: 401,
    message: 'TOKEN_AUTHENTICATION_FAILED'
  },
  "LIMIT_EXCEEDED":{
    code: 403,
    message: "Limit Exceeded"
  },
  "INVALID_PARAMETERS":{
    code: 400,
    message: "Invalid Parameters"
  },
  "BAD_REQUEST": {
    code: 400,
    message: "Bad request"
  },
  "INCORRECT_TOKEN_AND_SECRET": {
    code: 401,
    message: "Incorrect token and token secret"
  },
  "INCORRECT_TOKEN": {
    code: 401,
    message: "Incorrect token"
  },
  "TOKEN_IS_REQUIRED": {
    code: 401,
    message: "Token is required"
  },
 
  "TOKEN_EXPIRED": {
    code: 401,
    message: "Token expired."
  },
  "TOKEN_REQUIRED": {
    code: 401,
    message: "Token is required."
  },
};



export default statusCode;

