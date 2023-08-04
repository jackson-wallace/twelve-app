import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

type FeedProps = {
  posts: string[];
};

const Feed = ({ posts }: FeedProps) => {
  return (
    <div className="flex flex-wrap space-evenly px-4">
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
  );
};

export default Feed;
