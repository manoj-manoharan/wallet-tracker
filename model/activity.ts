import {Schema, model} from "mongoose";

const ActivitySchema = new Schema(
    {
        userId: {type: String, required: true},
        amount: {
            value: {type: Number, required: true},
            currency: {type: String, required: true}
        },
        category: {type: String, required: true},
        activityType: {type: String, enum: ['income', 'expense'], required: true}
    },
    {
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
        collection: "userActivities"
    }
);

export default model("ActivityModel", ActivitySchema);