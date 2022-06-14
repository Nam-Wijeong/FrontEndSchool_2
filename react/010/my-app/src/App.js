import styled from "styled-components";
// import reset from "styled-reset"
// import Hello from './components/Hello'

// const GlobalStyle = createGlobalStyle`
//   ${reset}
//   a{
//     text-decoration : none;
//     color : inherit;
//   }

//   button{
//     border : none;
//     cursor : pointer;
//   }

//  * {
//   box-sizing: border-box;
//   }
// `;

// const GlobalStyle = createGlobalStyle`
// span {
//   color: red;
//   font-size : 12px;
// }
// `

const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
        // <GlobalStyle/>
        //   <h1>Hello!</h1>
        //   <h2>Hello</h2>
        //   <span>글귀3</span>
        //   <Example/>

          <ContentDiv>
            <ContentH2>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
        </ContentDiv>
	);
};
      // <Hello name="licat"/>     
 

// function Example() {
//   return(
//     <>
//       <span>글귀1</span>
//       <span>글귀2</span>
//     </>
//   )
// }

const name = '이호준'
const age = 10

function 인사(문구, 이름, 나이){
    // console.log(문구)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
}
const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`
console.log(인사문구)


export default App;
