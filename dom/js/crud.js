// html 요소 가져오기
const taskForm = document.querySelector("#taskform")
const taskinput = document.querySelector("#taskinput")
const taskList = document.querySelector("#taskList")
const count = document.querySelector("#count");

// 할 일 데이터를 저장하는 배열
let tasks = [
    {
        id:1,
        text: "공부하기",
        done: false,
    },
    {
        id:2,
        text: "실기 공부하기",
        done: false,
    },
];

// 다음에 사용할 id 번호
let nextId = 3;

// R-목록 출력 (Read)
function renderTasks(){
    // 기준 화면 비우기(초기화)
    taskList.innerHTML = "";
    // 배열 데이터를 하나씩 화면에 출력
    tasks.forEach((task)=>{
        const liE = document.createElement("li")
        const spanE = document.createElement("span");
        spanE.className = "task-text"
        spanE.textContent = task.text;

        // 완료 여부에 따라 클래스 추가
        if(task.done){
            spanE.classList.add("done");
        }

        // 완료 체크 버튼
        const checkBtn = document.createElement("button");
        // 삼항연산자
        checkBtn.textContent = task.done ? "완료 취소" : "완료"
        
        // 완료체크 버튼 클릭시 함수
        checkBtn.addEventListener("click", ()=>{
            task.done =! task.done;
            renderTasks();
        })


        // 수정 버튼
        const editBtn = document.createElement("button")
        editBtn.textContent = "수정"
        editBtn.className = "edit-btn";

        // 수정 버튼 클릭시 함수
        editBtn.addEventListener("click", ()=>{
            const nextText = prompt("수정할 내용 입력!", task.text)
            task.text = nextText;
            if(nextText !== null && nextText.trim() !== ""){
                task.text = nextText;
            }
            renderTasks();
        })

        // 삭제 버튼
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "삭제"
        deleteBtn.className = "delete-btn";
        // 삭제 버튼 클릭시 함수
        deleteBtn.addEventListener("click", ()=>{
            const ok = confirm("정말 삭제?");
            if(ok){
                tasks = tasks.filter((item)=>{
                    return item.id !== task.id
                });
                renderTasks();
            }
        });

        // 버튼 담을 영역
        const actions = document.createElement("div")
        actions.className = "actions"
        actions.append(checkBtn, editBtn, deleteBtn);

        // 목록에 내용과 버튼 넣기
        liE.append(spanE, actions)
        taskList.append(liE);

    });   
}
// c-새 할일 추가 (Create)
taskForm.addEventListener("submit", (e)=>{
    // form 제출 시 페이지가 새로고침되는 기능을 방지하는 것
    e.preventDefault();
    const text = taskinput.value.trim();

    // 빈 내용은 등록하지 않음
    if(text === ""){
        alert("할 일을 입력해라!!!");
        return;
    }

    // 배열에 새 객체 추가
    tasks.push({
        id:nextId,
        text: text,
        done: false,
    });
    nextId++

    // 입력창 지우기
    taskinput.value = "";

    // 변경된 배열 화면에 출력하기
    renderTasks();
});


// 처음 화면 출력
renderTasks();