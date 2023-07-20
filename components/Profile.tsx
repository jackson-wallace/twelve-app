import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profileEnd } from "console";
import { Card, CardContent } from "./ui/card";

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
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex justify-end my-3 px-6">
        July 7
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
      <div className="flex flex-wrap space-evenly px-4">
        {/*  
          - REPLACE BELOW WITH FEED COMPONENT
        */}
        <div className="flex w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/morty.png"
              alt="Image"
              className="object-cover p-2"
              fill
            />
          </AspectRatio>
        </div>
        <div className="flex w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/morty.png"
              alt="Post Thumbnail"
              className="object-cover p-2"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default Profile;
