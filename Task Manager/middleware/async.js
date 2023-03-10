const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    //   passing error to the next middleware (error middleware)
    }
  };
};

module.exports = asyncWrapper;
