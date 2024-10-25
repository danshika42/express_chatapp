import User from "../models/user.model.js";

export const getUserForSidebar= async (req,res)=>{
    try{
        const loggedInId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInId}}).select("-password");

        res.status(200).json(filteredUsers);
    }catch(error){
        console.log("Error in user controller : ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}