import StudentModel from "../models/studentSchema.js";

const readController = async(req,res) => {
    try{
        const records = await StudentModel.find({})
        if(records && records.length){
           res.render('read',{records})
        }
        else{
            res.render('read', {records: [] })
        }
    }catch(error){
        console.log("Error",error.message)
    }
    
}

export {readController}
