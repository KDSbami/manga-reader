import Thumbnail from '../Thumbnail';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
export default function Home({image, title}) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  return (
    <div className="w-min h-min bg-foreground rounded-2xl m-2">
        <div className="p-px bg-gradient-to-tr from-background to-foreground rounded-t-2xl  m-px">
            <Thumbnail imageUrl={image}/>
        </div>
        <div className="p-px m-px">
        <div className="p-1 w-240px h-65px text-background font-mulish font-regular text-xl">
            {title}
        </div>
        </div>
    </div>
  );
}

// 480 x 720
// 240 x 360