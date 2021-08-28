import {ThemeContext} from '../Theme';
import {React,useContext} from 'react';

export default function Home({children}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`flex flex-row justify-center w-full min-h-screen bg-${theme}-background text-${theme}-foreground font-mulish tracking-wide font-extrabold text-3xl`}>
      <div className={`w-screen max:w-1440px`}>
        {children}
      </div>
    </div>
  )
}
 