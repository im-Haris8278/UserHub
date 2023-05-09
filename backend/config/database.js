import mongoose from "mongoose";

const connectDatabase = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-v0fsqer-shard-00-00.eqxtmou.mongodb.net:27017,ac-v0fsqer-shard-00-01.eqxtmou.mongodb.net:27017,ac-v0fsqer-shard-00-02.eqxtmou.mongodb.net:27017/USERHUB?ssl=true&replicaSet=atlas-vvx98x-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB Successsfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default connectDatabase;
