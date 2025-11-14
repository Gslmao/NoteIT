import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	userName: {type: String, required: true, unique: true},
	passwd	: {type: String, required: true, unique: true},
	datedAt	: {type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema);
export default User