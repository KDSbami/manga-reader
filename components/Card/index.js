import Thumbnail from '../Thumbnail';
export default function Home({image, title}) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  return (
    <div className=" h- bg-foreground rounded-2xl m-2 p-1">
    {/* <div className="w-min h-min bg-foreground-50 rounded-2xl"> */}
        <div className="flex flex-row justify-center align-center w-min h-full rounded-2xl">
            <Thumbnail imageUrl={image}/>
        {/* </div> */}
        {/* <div className="p-px m-px">
        <div className="p-1 w-240px h-65px text-background font-mulish font-regular text-xl">
            {title}
        </div>
        </div> */}
    </div>
    </div>
  );
}

// 480 x 720
// 240 x 360