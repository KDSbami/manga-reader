import {ThemeContext} from '../components/Theme';
import {React,useContext} from 'react';
import Button from '../components/Button'

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`w-full min-h-screen bg-${theme}-background text-${theme}-foreground`}>
      <Button title="Hello this is a test" onClick={() => {console.log("button")}}/>
    </div>
    
  )
}
 