
import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s -1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        <span>
          {
            count === 0 ?
            "Today is" 
              : count > 0
                ? `${count} days from today is`
                : `${count} days ago was`
            
          }
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
