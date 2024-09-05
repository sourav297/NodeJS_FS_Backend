const successTemplate = (res, result, message, status, bools, token) => {
  //console.log(result);
  
    return res.status(status).json({
      message: message,
      Result: result,
      logged: bools,
      token: token,
    });
  };
  
  module.exports = successTemplate;