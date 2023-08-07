"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { db, auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

import Profile from "@/components/Profile";
import { Icons } from "@/components/Icons";

/**
 * MyProfile component: Displays the profile of the currently authenticated user.
 */
const MyProfile = () => {
  // Initialize state for various user profile properties
  const [isLoading, setIsLoading] = useState(true);
  const [currName, setCurrName] = useState("");
  const [currUsername, setCurrUsername] = useState("");
  const [currPosts, setCurrPosts] = useState([]);
  const [currProfilePicture, setCurrProfilePicture] = useState("");
  const [currPostDay, setCurrPostDay] = useState("");

  // Get router object for navigation purposes
  const router = useRouter();

  // Monitor authentication state changes
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // If user is authenticated, fetch their profile data
      const uid = user.uid;
      const getUserData = async () => {
        // Reference to the user's document in Firebase Firestore
        const docRef = doc(db, "users", uid);
        try {
          const userDoc = await getDoc(docRef);
          const docData = userDoc.data();
          // Update state with fetched data
          setCurrName(docData?.name);
          setCurrUsername(docData?.username);
          setCurrPosts(docData?.posts);
          setCurrProfilePicture(docData?.profilePicture);
          setCurrPostDay(docData?.postDay);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      };
      getUserData();
    } else {
      // If user is not authenticated, redirect to the homepage
      router.push("/");
    }
  });

  // Render loading spinner or profile data based on the state
  return isLoading ||
    !currName ||
    !currUsername ||
    !currPosts ||
    !currProfilePicture ||
    !currPostDay ? (
    <div className="flex justify-center items-center h-screen w-screen">
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

// Export the MyProfile component for use in other files
export default MyProfile;
