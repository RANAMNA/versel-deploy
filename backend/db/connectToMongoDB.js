import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://ziar7750:bMMHYsSyQShdT5Dc@cluster0.lu9phlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
		console.log('db connection established', mongoose.connection.host)
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
