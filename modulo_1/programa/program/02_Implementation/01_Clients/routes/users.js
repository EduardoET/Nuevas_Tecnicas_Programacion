var express = require('express');
var router = express.Router();

const  { findUser } = require('../services/Clients.service')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await findUser()
    res.status(200).json({
      msg: "path user",
      body: users 
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg : "Internal Server error",
      })
    }
 
  });


module.exports = router;
