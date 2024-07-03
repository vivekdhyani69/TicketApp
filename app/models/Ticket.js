import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect("mongodb+srv://vdhyani04:bSsKLmJ6zne1QMzf@cluster0.ybayj8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
