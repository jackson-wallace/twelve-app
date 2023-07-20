import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileProps = {
  username: string;
  name: string;
  bio: string;
  posts: string[];
  profilePicture: string;
};

const Profile = ({
  username,
  name,
  bio,
  posts,
  profilePicture,
}: ProfileProps) => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <Avatar>
          <AvatarImage src={profilePicture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-column">
          <small className="text-sm font-medium leading-none">100</small>
          <p className="text-sm text-muted-foreground">Followers</p>
        </div>
        <div className="flex-column">
          <small className="text-sm font-medium leading-none">100</small>
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      </div>
      <div className="text-lg font-semibold">{name}</div>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>
  );
};

export default Profile;
