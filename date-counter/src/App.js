
import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

// function Counter() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);
  
//   const date = new Date();
//   date.setDate(date.getDate() + count);
//   return (
//     <>
//       <div>
//         <button onClick={() => setStep((s) => s -1)}>-</button>
//         <span> Step: {step} </span>
//         <button onClick={() => setStep((s) => s + 1)}>+</button>
//       </div>

//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span> Count: {count} </span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>

//       <div>
//         <span>
//           {
//             count === 0 ?
//             "Today is" 
//               : count > 0
//                 ? `${count} days from today is`
//                 : `${count} days ago was`
            
//           }
//         </span>
//         <span>{date.toDateString()}</span>
//       </div>
//     </>
//   );
// }
function Counter() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1)
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setRange(1);
  }
  return (
    <>
      <div>
        <input type='range' min='0' value={range} max='10'
          onChange={(e) => setRange(e.target.value)}></input>
        <span>{range}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - Number(range))}>-</button>
        <input onChange={(e) => setCount(Number(e.target.value))} type='text' value={count}/>
        <button onClick={() => setCount((c) => c + Number(range))}>+</button>
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

      {count !== 0 || range !== 1 ? (
           <div>
           <button onClick={handleReset}>Reset</button>
         </div>
      ) : null} 
    </>
  );
}
