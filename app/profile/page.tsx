"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { db, auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

import Profile from "@/components/Profile";
import { Icons } from "@/components/Icons";

const MyProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currName, setCurrName] = useState("");
  const [currUsername, setCurrUsername] = useState("");
  const [currPosts, setCurrPosts] = useState([]);
  const [currProfilePicture, setCurrProfilePicture] = useState("");
  const [currPostDay, setCurrPostDay] = useState("");

  const router = useRouter(); // Get the router object

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      const getUserData = async () => {
        // Read data from db and update state
        const docRef = doc(db, "users", uid);
        try {
          const doc = await getDoc(docRef);
          const docData = doc.data();
          setCurrName(docData?.name);
          setCurrUsername(docData?.username);
          setCurrPosts(docData?.posts);
          setCurrProfilePicture(docData?.profilePicture);
          setCurrPostDay(docData?.postDay);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getUserData();
      // ...
    } else {
      // User is signed out
      // Take to login/register page
      router.push("/");
    }
  });

  return isLoading ||
    !currName ||
    !currUsername ||
    !currPosts ||
    !currProfilePicture ||
    !currPostDay ? (
    <div className="flex justify-center items-center h-screen w-screen flex justify-center items-center h-screen w-screen">
      <Icons.spinner className="h-12 w-12 animate-spin" />
    </div>
  ) : (
    <Profile
      username={currUsername}
      name={currName}
      posts={currPosts}
      profilePicture={currProfilePicture}
      postDay={currPostDay}
    />
  );
};

export default MyProfile;
