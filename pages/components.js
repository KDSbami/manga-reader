import {ThemeContext} from '../components/Theme';
import {React,useContext} from 'react';
import Button from '../components/Button';
import Container from '../components/Container';

export default function Components() {

  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col justify-center m-4 w-max h-32"><Button animate={true} type="big" title="Animate on" onClick={() => {alert("animate on, big")}}/></div>
        <div className="flex flex-col justify-center m-4 w-max h-32"><Button animate={false} type="small" title="Animate off" onClick={() => {alert("animate off, small")}}/></div>
      </div>
    </Container>
  )
}