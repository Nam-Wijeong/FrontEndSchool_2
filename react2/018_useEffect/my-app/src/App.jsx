import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }
  return(
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span> Count : {count} </span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span> Name : {name} </span>
    </div>
  )
}

export default App;

























// import React, { useState, useEffect } from 'react';



// function Time(props) {
//   const [today, setToday] = useState(new Date());
//   const [hour, setHour] = useState(today.getHours());
//   const [min, setMin] = useState(today.getMinutes());
//   const [sec, setSec] = useState(today.getSeconds());
//   console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

//   useEffect(() => {

//     let time = setInterval(() => {
//       const t = new Date();
//       setToday(t);
//       setHour(t.getHours());
//       setMin(t.getMinutes());
//       setSec(t.getSeconds());
//     }, 1000)

//     return () => {
// 			//컴포넌트가 사라지기 전에 setinterval을 clearinterval해줍니다
//       clearInterval(time);
//     }
//   }, [today])

//   return (
//     <div>
//       <h1>
//         시간 : {hour}시 {min}분 {sec}초
//       </h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Time/>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';

// function App () {
//   const [count, setCount] = useState(1)
//   const [name, setName] = useState('')

//   const handleCountUpdate = () => {
//     setCount(count + 1)
//   }

//   const handleInputChange = (e) => {
//     setName(e.target.value)
//   }

  // 랜더링 될 때마다 매번 실행됨

  // 맨처음과 count 값이 변경될 때만 랜더링!
  // useEffect(() => {
  //   console.log('랜더링!!');
  // }, [count]) 

  // 맨처음과 name 값이 변경될 때만 랜더링
  // useEffect(() => {
  //   console.log('랜더링!!');
  // }, [name]) 

  // 맨처음 첫 화면만 랜더링!
//   useEffect(() => {
//     console.log('랜더링!!');
//   }, []) 


//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span> count : {count}</span>
//       <br />
//       <input type="text" value={name} onChange={handleInputChange} />
//       <span>name : {name}</span>
//     </div>
//   )
// }

// export default App

// import { useState, useEffect } from 'react';
// import Timer from './components/Timer'

// function App () {
//   const [showTimer, setShowTimer] = useState(false)
//   return(
//     <div>
//      {showTimer && <Timer/>}
//       <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer</button>
//     </div>
//  )
// }

// export default App;