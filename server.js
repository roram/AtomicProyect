let db = require('./db.json');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

//Testing rewriting endpoints:
//For this to work, you still need to write the endpoints as always, but the direction '/api/users'
//you use can use that in the front end of your app. 
server.use(jsonServer.rewriter({
    '/api/users' : '/users',

}))

//This is to parse the json data from the body to js .
server.use(jsonServer.bodyParser);

//Query's Logic
server.get('/users',(req,res)=>{
    console.log('CREATING A CUSTOM QUERY')
    return res.jsonp(db.users.slice());
})

server.use('/users',(req, res)=>{
    if (req.method === 'POST'){
        console.log('THIS IS A POST REQUEST');
        let usernameBody = req.body.email
        let passwordBody = req.body.password

        let usernameFind = db.users.map(username =>  username.email === usernameBody ?  username : false)

        console.log(usernameFind)

        if(usernameFind){
            
            if(usernameFind[0].password === passwordBody){
                res.status(200).jsonp({
                    msj:'VALID USER',
                    user:usernameFind[0]
                })
            }else{
                res.status(400).jsonp({
                    msj:'INVALID DATA'
                })
            }
            
        }else{
            res.status(400).jsonp({
                msj:'INVALID DATA'
            })
        }
        
        console.log(req.body);
    }
})

//THIS USE NEEDS TO BE IN THE END.
server.use(router);

server.listen(4000, ()=>{
    console.log('SERVER RUNNING');
})