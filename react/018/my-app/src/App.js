// import React, { useState, useEffect } from 'react';


// function Counter() {
//   const [count, setCount] = useState(0)
//   const [countTwo, setCountTwo] = useState(0)
//   const handleCountUp = (e) => {
//     setCount(count + 1)
//   }
//   const handleCountUpTwo = (e) => {
//     setCountTwo(countTwo + 1)
//   }
//   //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
//   useEffect(() => {
//     console.log('count가 감시되고 있습니다.')
//   }, [count]) // count가 변경되는 것을 감시
//   return(
//     <>
//       <div>{count}</div>
//       <button onClick={handleCountUp}>up!</button>
//       <div>{countTwo}</div>
//       <button onClick={handleCountUpTwo}>up!</button>
//     </>
//   )
// }
// function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   );
// }

// export default App;

// import React, {useState, useRef} from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);
  
//   const increaseCountState = () => {
//     setCount(count + 1);
//   };

//   const increaseCountRef = () => {
//     countRef.current = countRef.current + 1;
//     console.log('Ref : ', countRef.current);
//   }
//   return(
//     <div>
//       <p>State : {count}</p>
//       <p>Ref : {countRef.current}</p>
//       <button onClick={increaseCountState}>State 올려</button>
//       <button onClick={increaseCountRef}>Ref 올려</button>

//     </div>
//   )
// }

// export default App;

// 장점 : 자주 바뀌는 값은 바뀔 때마다 렌더링이 되는데 useRef를 사용하면 값이 바뀌어도 렌더링 되지 않기 때문에, 성능에 좋다



import React, {useState, useRef} from 'react';

const App = () => {
  const countRef = useRef(0);
  let countVar = 0;

  
  return(
    <div>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
    </div>
  )
}

export default App;