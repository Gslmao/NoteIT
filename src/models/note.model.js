import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	}, 
	title	: String,
	content	: String,
	date	: { type: Date, default: Date.now}, 
	pinned	: { type: Boolean, default: false },
  	archived: { type: Boolean, default: false },
  	trash	: { type: Boolean, default: false }
})

const Note = mongoose.model("Note", noteSchema);

export default Note