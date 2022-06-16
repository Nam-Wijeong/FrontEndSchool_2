// function App() {
//   const productList = {
//     products: [
//       {
//         title: "개발자 무릎 담요",
//         price: 17500,
//         id: 101,
//       },
//       {
//         title: "Hack Your Life 개발자 노트북 파우치",
//         price: 29000,
//         id: 102,
//       },
//       {
//         title: "우당탕탕 라이켓의 실험실 스티커북",
//         price: 29000,
//         id: 103,
//       },
//       {
//         title: "버그를 Java라 버그잡는 개리씨 키링",
//         price: 29000,
//         id: 104,
//       },
//     ],
//   };
//   return (
//     <>
//       {productList.products.map((item, idx) => (
//         <li
//           key={item.id}
//           style={{
//             listStyle: "none",
//           }}
//         >
//             <h2>
//               {idx + 1} {item.title}
//             </h2>
//             <span>{`${item.price}원`}</span>
//         </li>
//       ))}
//     </>
//   );
// }
// export default App;

import { useState } from 'react'

function App() {
  // const [time, setTime] = useState(1)
  // // console.log(useState()) => 두 개의 요소가 들어있는 배열 반환
  // const handleClick = () => {
  //   if(time >= 12) {
  //     setTime(1)
  //   } else {
  //     setTime(time + 1)
  //   }
  // }
  // return(
  //   <div>
  //     <span>현재 시각 : {time}시</span>
  //     <button onClick={handleClick}>Update</button>
  //   </div>
  // )
  
  // 무거운 작업을 해야할 때에는 useState 초기값에 콜백함수를 주기!
  const [names, setNames] = useState(['홍길동', '김민수'])
  const [input, setInput] = useState('')
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleUpload = () => {
    setNames((prevState)=>{
      console.log('이전 state',prevState);
      return([input, ...prevState]) 
    })
  }

  console.log(input);
  return(
    <div>
      <input value={input} onChange={handleInputChange} type="text" />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx)=>{
        return <p key={idx}>{name}</p>
      })}
    </div>
  )
}

export default App;