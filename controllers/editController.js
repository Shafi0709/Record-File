import StudentModel from "../models/studentSchema.js"


const editController = async(req,res) => {
    try{
//console.log(req.params.id)
const record = await StudentModel.findById({'_id':req.params.id})
if(record){
res.render('edit', {record:record})
}else{
    res.render('edit')
}

    }catch(error){
        console.log(error.message)
    }
}
const updateController = async(req,res)=>{
    try {
        const updatedRecord = await StudentModel.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false})
        if(updatedRecord){
         res.redirect('/')   
        }else{
            res.redirect('read')
        }
    }catch (error){
        console.log(error.message)
    }
}

const deleteController = async(req, res)=>{
    try{
        const deletedRecord = await StudentModel.findByIdAndDelete(req.params.id)
        if(deletedRecord){
            res.redirect('read')
        }else{
            res.redirect('/')
        }
    }catch(error){
        console.log(error.message)
    }
}


export {editController,updateController, deleteController}


