import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  profilePic: string;
  postDate: Date;
  following: this[];
  followers: this[];
  notifications: Array<{
    type: string;
    fromUserId: Schema.Types.ObjectId;
    postId: Schema.Types.ObjectId;
    date: Date;
  }>;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  profilePic: String,
  postDate: { type: Date, required: true },
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  notifications: [
    {
      type: { type: String, required: true },
      fromUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
      date: { type: Date, required: true },
    },
  ],
});

export const User = mongoose.model<IUser>("User", UserSchema);
