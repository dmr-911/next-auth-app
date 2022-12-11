// import mongoose from "mongoose";
// const { MongoClient } = require("mongodb");

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jycgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// export default client;
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connetion } = await mongoose.connect(process.env.MONGO_URL);

    if (connetion.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;

