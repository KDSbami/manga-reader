import Thumbnail from '../Thumbnail';
import { useContext } from 'react';
import { ThemeContext } from "../Theme";
export default function Home({image, title}) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  let {theme, setTheme} = useContext(ThemeContext);
  let darkModeStyle = theme === 'dark'?"transition ease-in-out duration-150 bg-foreground hover:bg-foreground-shading" :"bg-foreground";
  return (
    <div className={`w-min flex flex-col justify-center transition ease-in-out duration-75 text-foreground-accent hover:text-accent1`}>
    <div className={`w-256px h-363px rounded-card m-2 m-b-1 overflow-hidden transition ease-in-out duration-150 shadow-lg hover:shadow-md ${darkModeStyle}`}>
        <div className="flex flex-row justify-center align-center w-full h-min rounded-l overflow-hidden pt-8">
            <Thumbnail imageUrl={image}/>
        </div>
        <div className="flex flex-row justify-center mt-3 w-full font-mulish font-thin text-base tracking-wide">
          {title}
        </div>
    </div>
    </div>
  );
}
// transition ease-in-out duration-300 hover:border-opacity-100 border-4 border-accent1 border-opacity-0
// 480 x 720
// 240 x 360