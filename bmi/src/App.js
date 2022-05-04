import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0)
  const [weight_kg_value, setweight_kg_value] = useState(0)
  const [height, setHeight] = useState(0)
  const [cmheight, setCmHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [bmvalue, setBmvalue] = useState('')
  const [message, setMessage] = useState('')
  const [message1, setMessage1] = useState('')
  // const [feetHeight,setfeetHeight]= useState(0)
  const [inche,setincheHeight]= useState(0)
  console.log('bmi', bmi)
  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
     
    
      // height feet and inche  weight lbs---------------------------------------
      let  total_inches = (parseInt(height) * 12) + parseInt(inche);
      let data = Math.round(((weight * 703) / (total_inches * total_inches)) * 10) / 10;
      setBmi(data)
      // -------------------------------------------------------------

      // height cm weight kg---------------------------------------
      let  kg_value = parseInt(weight_kg_value);
      let  height_value = parseFloat(cmheight / 100);
      var bmivalue = kg_value / (height_value * height_value);
      bmivalue = Math.round(bmivalue * 10) / 10;
      setBmvalue(bmivalue)
      // -------------------------------------------------------------
      
      if (bmi < 18.5) {
        setMessage('under weight')
      } else if (bmi >=18.5&& bmi < 24.9) {
        setMessage('normal weigth')
      } else if (bmi >=25&& bmi < 29.9) {
        setMessage('over weight')
      }else if (bmi >=30 && bmi < 39.9) {
        setMessage('obesity')
      }else {
        setMessage('morbid obesity')
      }
      if (bmvalue < 18.5) {
        setMessage1('under weight')
      } else if (bmvalue >=18.5&& bmvalue < 24.9) {
        setMessage1('normal weigth')
      } else if (bmvalue >=25&& bmvalue < 29.9) {
        setMessage1('over weight')
      }else if (bmvalue >=30 && bmvalue < 39.9) {
        setMessage1('obesity')
      }else {
        setMessage1('morbid obesity')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (lbs)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Weight (kg)</label>
          <input value={weight_kg_value} onChange={(e) => setweight_kg_value(e.target.value)} />
        </div>
        <div>
          <label>Height (CM)</label>
          <input value={cmheight} onChange={(event) => setCmHeight(event.target.value)} />
        </div>
        <div>
        <div>
          <label>Height feet </label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
        <div>
        <label>Height inches </label>
          <input value={inche} onChange={(event) => setincheHeight(event.target.value)} />
        </div>
      
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>

      <div className='center'>
      <label>Height (feet && inches) & Weight (lbs)</label>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
      <div className='center'>
      <label>Height (CM) & Weight (kg)</label>
        <h3>Your BMI is: {bmvalue}</h3>
        <p>{message1  }</p>
      </div>

    </div>
  </div>
  );
}

export default App;
