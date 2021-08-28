import {ThemeContext} from '../components/Theme';
import {React,useContext} from 'react';

export default function Home() {

  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={`w-full min-h-screen bg-${theme}-primaryShade text-${theme}-textColor`}>
      a
    </div>
  )
}
 