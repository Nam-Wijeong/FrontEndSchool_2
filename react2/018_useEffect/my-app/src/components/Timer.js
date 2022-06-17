import React, {useEffect} from 'react';

const Timer = (props) => {
    useEffect(()=> {
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는중~!');
        }, 1000)
        // 타이머 정리작업 코드
        return () => {
            clearInterval(timer);
            console.log('타이머 종료~~!');
        }
    }, [])

    return (
        <div>
            <span>타이머를 시작합니다! 콘솔을 보세용</span>
        </div>
    )
}

export default Timer;