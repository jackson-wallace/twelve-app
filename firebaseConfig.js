// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NJqkqgck7pML-1LNae1BLUOOy6JRvgY",
  authDomain: "twelve-app-f4c91.firebaseapp.com",
  projectId: "twelve-app-f4c91",
  storageBucket: "twelve-app-f4c91.appspot.com",
  messagingSenderId: "872893739341",
  appId: "1:872893739341:web:a35c3cd3cc0bf4c7cb8704",
  measurementId: "G-TTW5EFVKFQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

/**

FIRESTORE

Users Collection: This will contain a document for each user, which includes the fields:
  userId (unique identifier)
  name
  username (unique)
  email
  password (encrypted)
  profilePicture (URL from Firebase Storage)
  postDay (the assigned day of the year on which the user can post)
  privacy (public or private)


Posts Collection: This will contain a document for each post, which includes the fields:
  postId (unique identifier)
  userId (refers to the user who made the post)
  caption
  photos (array of URLs from Firebase Storage)
  timestamp (when the post was made)

Comments Collection: This will contain a document for each comment, which includes the fields:
  commentId (unique identifier)
  userId (refers to the user who made the comment)
  postId (refers to the post to which the comment belongs)
  text (the comment itself)
  timestamp (when the comment was made)


Followers Collection: This will contain a document for each follower relationship, which includes the fields:
  followerId (refers to the user who is following)
  followedId (refers to the user being followed)


Notifications Collection: This will contain a document for each notification, which includes the fields:
  notificationId (unique identifier)
  receiverId (refers to the user who will receive the notification)
  triggerId (refers to the user who triggered the notification)
  postId (refers to the post related to the notification, if applicable)
  type (type of notification: new follower, new comment, or new post from following)
  timestamp (when the notification was created)



STORAGE:
Profile Pictures Folder: This will store all profile pictures. The filename could be the userId to easily retrieve the image.

Post Pictures Folder: This will store all post photos. You could use a structure like postId/photoNumber to organize these (e.g., postId/1, postId/2, etc.).
 */
