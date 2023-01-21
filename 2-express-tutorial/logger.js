const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   I have to either send my response or pass it over to the next reponse
  //   res.send('Testing')
  next();
};

module.exports = logger;
