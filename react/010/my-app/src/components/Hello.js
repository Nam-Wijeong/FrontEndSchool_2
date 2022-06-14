import React from 'react'

function Hello(props)
{
  const num = [1,2,3,4,5,6,7,8,9,10]
  const arr = num.map((i) => 
    // key 값에는 문자만 가능하기 때문에 숫자인 i값을 문자로 변환해줌.
    // key 값을 쓸 때에는 보통 id값을 주는 것이 좋다.
    <h1 key={i.toString()}>안녕, {props.name} {i}호</h1>)
  return (
    <div>
        {arr}
    </div>
  )
}

export default Hello