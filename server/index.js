const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const UserModel = require("./models/Users")

const cors = require('cors') 

app.use(express.json());
app.use(cors());
mongoose.connect
("mongodb+srv://lauturejonathan9:$Cdesrosiers224@cluster0.ob4lh7o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
);

app.get("/getUsers", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


    app.post("/createUser",  async (req, res) => {
         const user = req.body
         const newUser = new UserModel(user)
        await newUser.save();

        res.json(user)
    })

app.listen(3001,() => {
    console.log("Sever is running smooth");
});