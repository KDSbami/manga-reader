import {ThemeContext} from '../components/Theme';
import {React,useContext} from 'react';
import Button from '../components/Button';

export default function Components() {

  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={`w-full min-h-screen bg-${theme}-primaryShade text-${theme}-textColor`}>
    <Button onClick={() => {console.log("Click.")}} title="test" />
    </div>
  )
}
 