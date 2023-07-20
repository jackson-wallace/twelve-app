import mongoose, { Document, Schema } from "mongoose";

import { IUser } from "./user";
import { IPost } from "./post";

export interface IComment extends Document {
  userId: IUser;
  postId: IPost;
  text: string;
  commentDate: Date;
}

const CommentSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  text: { type: String, required: true },
  commentDate: { type: Date, required: true },
});

export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
