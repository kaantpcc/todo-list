import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

let toDoItems = [];
let workItems = [];

app.post("/",(req,res)=>{
    toDoItems.push(req.body["toDoName"]);
    res.redirect("/");
});

app.get("/",(req,res)=>{
    const days=["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    res.render("index.ejs",{
        currentDay : days,
        currentMonth : months,
        toDoItem : toDoItems,
    })
});

app.post("/work",(req,res)=>{
    workItems.push(req.body["workName"]);
    res.redirect("/work");
});

app.get("/work",(req,res)=>{
    res.render("work.ejs",{
        workItem : workItems,
    });
});

app.listen(port , () =>{
    console.log("Live on " + port);
});

