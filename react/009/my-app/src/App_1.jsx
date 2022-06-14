import './App.css'
import Hello from './components/Hello';
import Time from './components/Time';
import Resume from './components/Resume'
import Greeting from './components/Greeting';
import Login from './components/Login';

function App() {
  return (
    <>
      <Hello name="위정"/>
      <Time/>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <Greeting/>
      <Login/>
    </>
  );
}

export default App;

 {/* 주석입니다 */}
      {/* {값?'one':'two'}
      {100 + 1}
      {[1,2,3].map((a) =>  a * 2 )} */}