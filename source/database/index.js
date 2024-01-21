import mongoose from "mongoose"

const connectDb =async()=>{
    try {
     const connectedData = await mongoose.connect(`${process.env.dburl}mydatabase`)
     console.log(`mongoDb Connected at Host`,connectedData.connection.host)
    } catch (error) {
        console.log('mongodb connection failed',error);
        process.exit(1)
    }
}
export default connectDb;