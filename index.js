function renderWorkTaskList() { 

const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];   
    const workTaskListEl = document.getElementById("workTaskList");
      workTaskListEl.innerHTML = "";  
    for (const workTask of workTaskList) {
    const workTaskEl = document.createElement("div");
    const {task} = workTask;
    workTaskEl.innerHTML = "<div>" + task + "</div>";
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
    renderWorkTaskList();

    getSelectOptions();
    
    }
        
        function renderTeamMemberList(){
    const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList")) || [];
    const teamMemberListEl = document.getElementById("teamMemberList");
    teamMemberListEl.innerHTML = "";
    for (const workTeamMember of teamMemberList) {
        const workTeamMemberEl = document.createElement("div");
        const { teamMember } = workTeamMember;
    workTeamMemberEl.innerHTML = "<div>"+ teamMember +"</div>";
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
