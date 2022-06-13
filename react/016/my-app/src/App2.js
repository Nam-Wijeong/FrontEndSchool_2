function App() {
  // const Test = <h1>Hello 1</h1>
  // console.log(Test);
  function Test(props) {
    console.log(props);
    return <h1>Hello 1</h1>
  }
  return (
    <div className="App">
      {[
        <h1 key="1">Hello 1</h1>,
        <h1 key="2">Hello 2</h1>,
        <h1 key="3">Hello 3</h1>,
        <h1 key="4">Hello 4</h1>,
        <h1 key="5">Hello 5</h1>,
        <Test key="6" a='10' b='20' c='30'>
        <h1 key="5">Hello 5</h1>
        </Test>
      ]} 
    </div>
  );
}

export default App;
