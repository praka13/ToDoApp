//import the model

const Todo=require("../models/toDo");

//defining route handler

exports.deleteTodo=async(req,res)=>{
    try{

        const {id}=req.params;
       // const{title,description}=req.body;

        const todo=await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"deleted Successfully"
        })




    }
    catch(err){

        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })

 

    }
}