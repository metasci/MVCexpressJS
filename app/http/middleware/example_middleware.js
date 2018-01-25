module.exports = {

        example : (req, res, next) => {
            req.newTitle = 'MVCexpressJS Framework';
            next();
        }
}
