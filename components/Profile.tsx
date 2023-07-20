import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-center my-3">
        {username}
      </h4>
      <div className="flex justify-around items-center my-3">
        <div className="flex justify-center basis-1/3">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profilePicture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-evenly basis-2/3">
          <div className="flex flex-col items-center">
            <small className="text-sm font-medium leading-none">0</small>
            <p className="text-sm text-muted-foreground">Year</p>
          </div>
          <div className="flex flex-col items-center">
            <small className="text-sm font-medium leading-none">1,000</small>
            <p className="text-sm text-muted-foreground">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <small className="text-sm font-medium leading-none">1,000</small>
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        </div>
      </div>
      <div className="flex-col m-3 pl-3">
        <div className="text-lg font-semibold">{name}</div>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </div>
      <div className="px-6">
        <Button className="flex w-full" size="sm">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default Profile;
