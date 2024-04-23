const foodModels=require('../Models/foodModels')

exports.create=async (req,res)=>{
    try{
        const reqBody=req.body
        await foodModels.create(reqBody)
        return res.status(200).json({msg:'success',data:'data created'})
    }catch (e){
        return res.status(200).json({msg:'failed',err:e.toString()})
    }
}


exports.read=async (req,res)=>{
    try{
        const data=await foodModels.find()
        return res.status(200).json({msg:'success',data:data})
    }catch (e){
        return res.status(200).json({msg:'failed',err:e.toString()})
    }
}


exports.readOne=async (req,res)=>{
    try{
        const {id}=req.params;
        const data=await foodModels.find({_id:id})
        return res.status(200).json({msg:'success',data:data})
    }catch (e){
        return res.status(200).json({msg:'failed',err:e.toString()})
    }
}


exports.update=async (req,res)=>{
    try{
        const {id}=req.params;
        const reqBody=req.body;
        const data=await foodModels.updateOne({_id:id},reqBody)
        return res.status(200).json({msg:'success',data:data})
    }catch (e){
        return res.status(200).json({msg:'failed',err:e.toString()})
    }
}


exports.delete=async (req,res)=>{
    try{
        const {id}=req.params;
        await foodModels.deleteOne({_id:id})
        return res.status(200).json({msg:'successfully deleted'})
    }catch (e){
        return res.status(200).json({msg:'failed',err:e.toString()})
    }
}