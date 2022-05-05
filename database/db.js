import mongoose from "mongoose";
import 'dotenv/config';

const connect = () => {
    if (mongoose.connections[0].readyState) {
        console.log("conected already");
    } else {
        try {
            mongoose.connect(process.env.DB_CONNECTION, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log('MongoDB connected...')
        } catch (error) {
            console.error(error);
        }
    }
}

export default connect;
