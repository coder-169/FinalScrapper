import mongoose from "mongoose";

const JobSchema = mongoose.Schema({
    bot: {
        id: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    token:{
        type:String,
        default:""
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    state: {
        type: String,
        default: 'initiated'
    }
})


export default mongoose.models.Job || mongoose.model("Job", JobSchema);
