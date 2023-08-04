import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profileEnd } from "console";
import { Card, CardContent } from "./ui/card";

import Feed from "./Feed";

type ProfileProps = {
  username: string;
  name: string;
  posts: string[];
  profilePicture: string;
  postDay: string;
};

const Profile = ({
  username,
  name,
  posts,
  profilePicture,
  postDay,
}: ProfileProps) => {
  return (
    <div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-end my-3 px-6">
        {postDay}
      </h4>
      <div className="flex justify-around items-center my-5">
        <div className="flex justify-center">
          <Avatar className="h-1/4 w-1/4">
            <AvatarImage src={profilePicture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex justify-between px-6 my-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-xl text-muted-foreground">2023</p>
      </div>
      <Feed posts={posts} />
    </div>
  );
};

export default Profile;
