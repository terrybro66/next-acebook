import mongoose from "mongoose";

const connectToDb = async () => {
  const connectionString =
    "mongodb+srv://terry:oW5X6Vs8gaOuNie7@cluster0.3kvedqd.mongodb.net/acebook?retryWrites=true&w=majority";
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDb;
