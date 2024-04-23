const mongoose=require('mongoose');
const foodSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        code:{type:String,required:true},
        image:{type:String,required:true},
        category:{type:String,required:true},
        quantity:{type:Number,required:true},
        price:{type:Number,required:true}
    },
    {timestamps:true,versionKey:false}
)
const foodModels=mongoose.model('food',foodSchema);
module.exports=foodModels;