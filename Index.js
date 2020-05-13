function renderWorkTaskList() { 
const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];   
    const workTaskListEl = document.getElementById("workTaskList");
      workTaskListEl.innerHTML = "";  
    for (const workTask of workTaskList) {
    const workTaskEl = document.createElement("div");
    const {task} = workTask;
    workTaskEl.innerHTML = 
    "<div>" + task + "</div>";
  //workTaskEl.innerText = workTask.task;
    workTaskListEl.appendChild(workTaskEl);
    }
}

function createNewTask(event) {
    event.preventDefault();

 const task = document.querySelector("[name='task']").value;
   
 const workTask = {task};
    console.log(workTask);
    
const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];
     workTaskList.push(workTask)
window.localStorage.setItem("workTaskList", JSON.stringify(workTaskList)); 
    renderWorkTaskList();

    event.target.reset();
}


function renderTeamMemberList() { 
const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList")) || [];   
    const teamMemberListEl = document.getElementById("teamMemberList");
      teamMemberListEl.innerHTML = "";  
    for (const teamMember of workTaskList) {
    const teamMemberEl = document.createElement("div");
    const {teamMember} = teamMember;
    workTaskEl.innerHTML = 
    "<div>" + teamMember + "</div>";
  //teamMemberEl.innerText = workTask.task;
    teamMemberListEl.appendChild(teamMemberEl);
    }
}

function createNewTeamMember(event) {
    event.preventDefault();

const teamMember = document.querySelector("name='teamMember'").value;

const teamMemberList = JSON.parse(window.localStorage.getItem(teamMemberList)) || [];
    teamMemberList.push(teamMember);
window.localStorage.setItem("teamMemberList", JSON.stringify(teamMemberList));
renderTeamMemberList();
event.target.reset();
}