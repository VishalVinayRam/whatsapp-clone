const express = require('express')
const  mangoose  = require('mongoose')
const {Messages,Message} =  require('./dbMongoose') 
const Pusher = require("pusher");
const { timeStamp } = require('console');




app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin',"*");
    res.setHeader('Acess-Control-Allow-Heder',"*");
    next()
})



app.use(express.json)

const connection_url = "mongodb+srv://admin:lihpVAfJhc7uq1dE@cluster0.bpdkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mangoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const pusher = new Pusher({
    appId: "1295942",
    key: "c4215eb12f4630e2607a",
    secret: "c73f4e5078621c860440",
    cluster: "eu",
    useTLS: true
  });


  const db =mangoose.connection;
  db.once("open",()=>
  {
      console.log('DB connected');
      const msgCollection =db.collection("messageContents");
      const changeSteam =msgCollection.watch();
      changeSteam.on("change",(change)=>
      {
          if(change.operationType === "insert")
          {
              const messageDetails = chaege.fullDocument
              pusher.trigger("message","inserted")
              {
                  name:messageDetails.user;
                  message:messageDetails.message;
                  timeStamp:messageDetails.timeStamp;
              }
          }
      }
      )
  });
  












const app = express()

app.get('/messages/sync',(req,res)=>
{
    Messages.find(err,data)
    { 
        if(err)
        {
            res.status(500).send(err)
        }
        else
        {
            res.status(201).send('the messag storeed is '+{data})
 
            
    }
}
}
)

app.post('message/new',(req,res)=>
{
    const dbMessage =req.body

    Messages.create(dbMessage,(err,data)=>
    {
        if(err){
        res.status(500).send(err)
        }
        else{
            res.status(201),send('new message created: \n '+{data})
        }
    })
})




app.listen(3000,()=>
{
    console.log('The server is l5isterning')
})