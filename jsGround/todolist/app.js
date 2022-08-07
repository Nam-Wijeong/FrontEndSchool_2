const userTask = document.querySelector('.artcl_main input');
const addBtn = document.querySelector('.artcl_main button');
const listTodo = document.querySelector('.list_todo');
const main = document.querySelector('.artcl_main');

// 다운로드 버튼 생성
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn');
downloadBtn.textContent = '리스트 다운로드';
document.body.append(downloadBtn);
downloadBtn.addEventListener('click', downloadFile);


// 다운로드 버튼 노출 판단 함수
function showDownLoad () {
  const curList = listTodo.querySelectorAll('li');
  if(curList.length > 0) {
    downloadBtn.style.display = 'block';
  } else {
    downloadBtn.style.display = 'none';
  }
}

// add 버튼 클릭했을 때
addBtn.addEventListener('click', () => {
  createListItem();
  userTask.focus();
} );

// tasks가 저장될 배열입니다.
const tasks = JSON.parse(localStorage.getItem('tasklist')) || [];

// tasks 데이터를 localStorage에 저장하는 함수
function saveTasks () {
  localStorage.setItem('tasklist', JSON.stringify(tasks));
}

// localStorage에 저장된 데이터를 기반으로 li 목록 생성하기
if(tasks) {
  tasks.forEach((task) => {
    genItem(task.val, task.checked);
  })
  showDownLoad();
}



function createListItem () {
  const val = userTask.value;
  if(val) {
    // 인풋 내용 처리 코드
    // myObj 객체를 생성합니다.
    const myObj = {
      val : genItem(val, false),
      checked : false,
    }
    // myObj 객체를 tasks 배열에 저장합니다.
    tasks.push(myObj);

    // tasks 데이터를 localStorage 저장하는 함수
    saveTasks();

    // 다운로드 버튼 노출 판단 함수
    showDownLoad();
  } else {
    errorMsg('내용을 작성해 주세요!')
  }
}

// 리스트 아이템을 생성하는 함수
function genItem(val, complete) {
  const li = document.createElement('li');
  li.textContent = val;
  listTodo.append(li);

  // 인풋 초기화
  userTask.value = '';

  // 만약 수행한 일이라면
  if(complete) {
    li.classList.add('done');
  } else {

  }

  li.addEventListener('click', () => {
    li.classList.toggle('done');
    // tasks 목록 데이터를 업데이트 하는 함수
    buildTasks();
  });
  // 삭제 버튼 만들기
  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  li.append(delBtn);
  delBtn.addEventListener('click', () => {
    li.remove();
    showDownLoad();
    buildTasks();
  })
  return val;
}

// tasks 목록 데이터를 업데이트 하는 함수
function buildTasks() {
  // tasks 목록 데이터를 업데이트 하기 위해서 기존 데이터 초기화
  tasks.length = 0;
  const curList = listTodo.querySelectorAll('li');
  curList.forEach((el)=>{
    const tempTask =  {
      val : el.textContent,
      checked : false,
    };
    // done 클래스가 있는지 확인하고, 있다면 checked 정보를 변경
    if(el.classList.contains('done')) {
      tempTask.checked = true;
    }
    tasks.push(tempTask);
  })
  saveTasks();
}

// 에러 메세지 생성
const message = document.createElement('strong');
message.style.display = 'none';
message.style.color = 'red';
main.append(message);
userTask.addEventListener('input', () => {
  message.style.display = 'none';
})

// 에러메세지 함수 실행시
function errorMsg (msg) {
  message.style.display = 'block';
  message.textContent = msg;
  userTask.focus();
}

// 할 일 목록을 다운로드하는 함수 
function downloadFile() {
  // 다운로드 받을 텍스트를 생성
  let temp = '<나의 할 일 목록>\n\n';

  const curList = listTodo.querySelectorAll('li');
  curList.forEach((el) => {
    // 완료한 일 앞에는 '완료'라는 텍스트 붙이기
    if(el.classList.contains('done')) {
      temp += '완료🔥 ';
    } else {
      temp += `${el.textContent}\n`;
    }
  })
  let element = document.createElement('a');
      // data URI scheme을 이용해서 데이터를 a안에 임베드 시킵니다.
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + temp)
      element.setAttribute('download', 'todoList');
      element.click();
      element = null;
}