import React, { useState } from 'react';

function Resume(props) {
  let [like, setLike] = useState(0)
  
  function clickLike() {
    setLike(like + 1)  
  }
  let [likeBtn, setBtn] = useState('')
  function clickBtn() {
    likeBtn == '' ? setBtn('Like') : setBtn('')
  }

    return(
      <div style={{border : "1px solid black", width: '500px', padding: '8px'}}>
        <h1>{props.name} 자기소개서</h1>
        <h1>{props.hello}</h1>
        <h2>취미 : {props.hobby}</h2>
        <h2>좋아하는 음식 : {props.food}</h2>
        <h2>좋아하는 색 : <span style={{color:'blue'}}>{props.color}</span></h2>
        <button onClick={clickLike}>❤️ : <span>{like}</span></button>
        <button onClick={clickBtn}>Like</button><span>{likeBtn}</span>
      </div>
    )
}

export default Resume;