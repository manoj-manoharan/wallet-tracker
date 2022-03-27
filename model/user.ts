import {Schema, model} from "mongoose";

const UserSchema = new Schema(
    {
        name: {type: String, required: true},
    },
    {
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
        collection: "users"
    }
)

export default model("UserModel", UserSchema);