import Profile from "@/components/Profile";

const MyProfile = () => {
  const user = {
    username: "johndoe",
    name: "John Doe",
    bio: "Hello! I am John.",
    posts: [],
    profilePicture: "https://github.com/shadcn.png",
  };

  return (
    <Profile
      username={user.username}
      name={user.name}
      bio={user.bio}
      posts={user.posts}
      profilePicture={user.profilePicture}
    />
  );
};

export default MyProfile;
