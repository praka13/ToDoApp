
const express=require("express");
const router = express.Router();

const {createToDo}=require("../controllers/createToDo");
const {getTodo, getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo")
//console.log(createTodo);

router.post("/createTodo",createToDo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports=router;