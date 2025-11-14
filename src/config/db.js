import mongoose from "mongoose";

export default async function connectDB(){
	try {
		await mongoose.connect(process.env.MONGODB_URL)
		console.log("DB Connection Done")
	} catch (err) {
		console.log("Connnection Error: ")
		console.log(err)
		process.exit(1)
	}
}