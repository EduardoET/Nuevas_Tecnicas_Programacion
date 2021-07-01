    const { MongoClient, connect } = require('mongodb');
const { MongoConnection } = require('../lib/Mongo');

   
    
    //conexion
    const COLLECTION = "clients"

    const findUser = () =>
     new Promise(async(resolve, reject) => {
        try {
            
              //inicializamos ongo client oara que me retorne la configurcion de la db
        const DB = await MongoConnection()
        //obtenemos la coleccion 
        const clients = DB.collection(COLLECTION)
        const clientsList = await clients.find({}).toArray()
        resolve(clientsList)
        } catch (error) {
            reject(error)
        }
       
    })
    module.exports = {
        findUser,
    }