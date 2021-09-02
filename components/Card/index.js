import Thumbnail from '../Thumbnail';
import Button from '../Button';
export default function Home({image, title}) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  return (
    <div className="w-min flex flex-col justify-center">
    <div className="w-min border-4 transition ease-in-out duration-500 border-foreground hover:border-accent1 rounded-2xl m-2 m-b-1 overflow-hidden">
        <div className="flex flex-row justify-center align-center w-min h-full rounded-l overflow-hidden">
            <Thumbnail imageUrl={image}/>
    </div>
    </div>
    <div className="flex flex-row justify-center w-240px text-foreground font-mulish font-thin text-base">
        {title}
    </div>
    </div>
  );
}

// 480 x 720
// 240 x 360