import mongoose, { Document, Schema } from "mongoose";

import { IUser } from "./user";
import { IComment } from "./comment";

export interface IPost extends Document {
  userId: IUser;
  content: Array<{
    imageUrl: string;
  }>;
  postDate: Date;
  comments: IComment[];
}

const PostSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: [
    {
      imageUrl: { type: String, required: true },
    },
  ],
  postDate: { type: Date, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

export const Post = mongoose.model<IPost>("Post", PostSchema);
