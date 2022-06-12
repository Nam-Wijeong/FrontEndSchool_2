import React from 'react';
import '../App.css'

function Time() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    return(
      <>
        <h1>{year}년</h1>
        <h1>{month}월 {date}일</h1>
        <h1>{hours}시 {minutes}분 {seconds}초</h1>
      </>
    )
  }

  export default Time
