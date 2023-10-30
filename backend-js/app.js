require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const connectString = process.env.MONGO_DB_CLIENT;

app.use(async(req,res,next) => {
    
    try {
        await mongoose.connect(connectString,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log("running");
        next();
        
    } catch {
        console.log("connect error!")
    }
})

app.use(express.json());
app.use(cors());

const todoSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    text: String,
    category: String,
    id: String,
    done: Boolean
})

const Todo = mongoose.model('todos23', todoSchema);


app.get("/", (req,res) => {
    res.send("Hallo Welt");
})

app.get("/health-check",(req,res) => {
    res.status(200).send({"message": "Running Backend works"});
    console.log("Running health check");
})


app.get("/todos",async(req,res) => {
    try {
        
        res.status(200).send({"todos": todos,
                              "message": "fetched todos!"
    
    });
    } catch(error) {
        console.log(error);
        res.status(500).send({"message": "Could not fetch todos!"});
    }
})

app.post("/addTodo",async(req,res) => {
    try {
        const todoToAdd = req.body;
        await Todo.create(todoToAdd);
        res.status(201).send({"message": "Added new Todo"});
    } catch(error) {
        console.log(error);
        res.status(500).send({"message": "Could not add Todo"});
    }
})


app.delete("/deleteTodo/:idParam", async(req,res) => {
    try {
        const {idParam} = req.params;
        const deletedTodo = await Todo.deleteOne({id: idParam});
        res.status(201).send({"message": "Deleted Todo!"});
    } catch(error) {
        console.log(error);
        res.status(500).send({"message": "Delete did not work!"});
    }
})

app.put("/toggleTodo/:idParam", async(req,res) => {
    try {
        const {idParam} = req.params;
        console.log(idParam);
        const todo = await Todo.findOne({id: idParam});
        if (!todo) {
            return res.status(404).send({message: "Todo not found"});
        }
        await Todo.findOneAndUpdate({id: idParam}, {$set: {done: !todo.done} });
    
        res.status(201).send({message: "Updated Todo Done!"});
    } catch(error) {
        console.log(error);
        res.status(500).send({message: "Update did not work!"});
    }

})

app.listen(port, () => {
    console.log("Running backend");
})