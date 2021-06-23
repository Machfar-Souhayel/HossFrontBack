// @desc    Logs request to console
const logger = (req, res, next) => {
    console.log(
        `Request: ${req.method} \nRoute  : ${req.protocol}://${req.get('host')}${req.originalUrl}`.bold.blue
    );
    next();
};

module.exports = logger;