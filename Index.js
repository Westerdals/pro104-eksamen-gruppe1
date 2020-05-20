var counter = 0;
function allowDrop(e){
    e.preventDefault();
}
function drag(e){
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e){
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
    const newAssignment = {data};
    const assignmentList = JSON.parse(window.localStorage.getItem("assignmentList")) || [];
    assignmentList.push(newAssignment);
    window.localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
    
}
function renderWorkTaskList() {

const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];   
    const workTaskListEl = document.getElementById("workTaskList");
      workTaskListEl.innerHTML = "";  
    for (const workTask of workTaskList) {
    const workTaskEl = document.createElement("div");
    const {task} = workTask;
    /* draggable, ondragstart og id for å gjøre det mulig å dragge elementet */
    workTaskEl.innerHTML = "<div id='dragTask"+counter+"' draggable='true' ondragstart='drag(event)'>" + task + "</div>";
    workTaskListEl.appendChild(workTaskEl);
    }
}

function createNewTask(event) {
    event.preventDefault();
    counter++;
    const task = document.querySelector("[name='task']").value;
   
    const workTask = {task};
    console.log(workTask);
    
    const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];
     workTaskList.push(workTask)
    window.localStorage.setItem("workTaskList", JSON.stringify(workTaskList)); 
    renderWorkTaskList();

    event.target.reset();
    renderWorkTaskList();

    getSelectOptions();
    console.log(counter);
    }
        
        function renderTeamMemberList(){
    const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList")) || [];
    const teamMemberListEl = document.getElementById("teamMemberList");
    teamMemberListEl.innerHTML = "";
    for (const workTeamMember of teamMemberList) {
        const workTeamMemberEl = document.createElement("div");
        const { teamMember } = workTeamMember;
    workTeamMemberEl.innerHTML = "<div id='dragMember"+counter+"' draggable='true' ondragstart='drag(event)'>"+ teamMember +"</div>";
    teamMemberListEl.appendChild(workTeamMemberEl);
    }
}

function createNewTeamMember(event)  {
    event.preventDefault();
    
    const teamMember = document.querySelector("[name='teamMember']").value;
    
     const workTeamMember = {teamMember};
   
   const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList")) || [];
   teamMemberList.push(workTeamMember);

   window.localStorage.setItem("teamMemberList", JSON.stringify(teamMemberList));
   renderTeamMemberList();

   event.target.reset();
    renderTeamMemberList();
    getSelectOptions();

}
//test

function getAssignmentTask(event) {
    var assignment = document.getElementById("valueTask").innerHTML=localStorage.getItem("workTaskList");
}
    
        

        function submitAssignmentTask(event) {
          event.preventDefault();

            let taskValue = document.querySelector("#valueTask").value;
            let memberValue = document.querySelector("#valueTeamMember").value;

            let newAssignment = {
                "task": taskValue,
                "teamMember": memberValue
            };

            let assignmentList = JSON.parse(window.localStorage.getItem("assignmentList")) || [];
            assignmentList.push(newAssignment);
            window.localStorage.setItem("assignmentList", JSON.stringify(assignmentList));


            let assignmentContainer = document.getElementById("assignmentList");
            assignmentContainer.innerHTML += `<div> ${taskValue} ${memberValue} </div> `;
            
            
           
        }
        
    

        function getSelectOptions() {
            let taskList = JSON.parse(window.localStorage.getItem("workTaskList"));
            let memberList = JSON.parse(window.localStorage.getItem("teamMemberList"));

            let taskElement = document.querySelector("#valueTask");
            let memberElement = document.querySelector("#valueTeamMember");

            console.log(taskList);
            console.log(memberList);

            for (let item of taskList) {

                console.log(item);

                let newOption = document.createElement("option");
                newOption.innerText = item.task;
                newOption.value = item.task
                taskElement.appendChild(newOption);
            }

            for (let item of memberList) {
                console.log(item);
                let newOption = document.createElement("option");
                newOption.innerText = item.teamMember;
                newOption.value = item.teamMember
                memberElement.appendChild(newOption);
            }
        }

        getSelectOptions();