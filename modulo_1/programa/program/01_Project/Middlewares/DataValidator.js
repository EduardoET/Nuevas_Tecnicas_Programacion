
function DataValidator(check = "query"){
return (req, res, next) => {
    var data = req[check]
    const {error, value} = schema.validate()

    if (error) {
        res.status(406).json({
        msg: error.details[0].message
    })
    }else{ 
    req[check] = value
    next()
        }   

    }   
}

// function DataValidator(req, res, next){
//     req.pruebaDeMiddleware = "Hola MUNDO CON MIDDLEWARE";
//     next();
// }

module.exports.DataValidator = DataValidator