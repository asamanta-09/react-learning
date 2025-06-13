import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import styles from './App.module.css'
import { useState } from 'react';

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("")
    }
    else if (buttonText === '=') {
      const result=eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplayVal=calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
