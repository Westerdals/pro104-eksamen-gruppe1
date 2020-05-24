const gridContainer = document.getElementsByClassName("gridContainer");
var counter = 0;
var letters = /^[A-Za-z]+$/;
function renderWorkTaskList() { 
    counter++;
    const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];   
    const workTaskListEl = document.getElementById("workTaskList");
    const taskContainer = document.getElementById("taskContainer");
    workTaskListEl.innerHTML = "";  
    taskContainer.innerHTML = "";
    for (const workTask of workTaskList) {
        const workTaskEl = document.createElement("div");
        const {task} = workTask;
        workTaskEl.innerHTML = "<div id='"+task+"'>" + task + "</div>";
        workTaskListEl.appendChild(workTaskEl);
        
        }

    //Lager en ny div for tasken som ble sendt inn
    for (const taskGrid of workTaskList){
        const newTaskDiv = document.createElement("div");
        const {task} = taskGrid;
        newTaskDiv.innerHTML = "<h3>Task: " + task + "</h3> <br> <b>Workers:</b>";
        newTaskDiv.id = task;
        newTaskDiv.className = "gridElement";
        newTaskDiv.setAttribute("ondrop", "drop(event)");
        newTaskDiv.setAttribute("ondragover", "allowDrop(event)");
        document.getElementsByClassName("taskGridContainer")[0].appendChild(newTaskDiv);

        //Sletter ekstra diver som blir laget
        if(taskContainer.childElementCount > workTaskList.length){
            for ( var i = 0; taskContainer.childElementCount - counter; i++){
                taskContainer.removeChild(taskContainer.lastChild);
            }
        }
    }
}
    
function createNewTask(event) {
        event.preventDefault();
        
        const task = document.querySelector("[name='task']").value;
        const workTask = {task};
        console.log(workTask);
        
        if(task.match(letters)){
            const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];
            workTaskList.push(workTask)
            window.localStorage.setItem("workTaskList", JSON.stringify(workTaskList));
            event.target.reset();
            renderWorkTaskList();
            
        }
        else{
            alert("Venligst skriv noe inn på feltet")
            event.target.reset();
        }
        
}
            
            function renderTeamMemberList(){
        const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList")) || [];
        const teamMemberListEl = document.getElementById("teamMemberList");
        teamMemberListEl.innerHTML = "";
        for (const workTeamMember of teamMemberList) {
            const workTeamMemberEl = document.createElement("div");
            const { teamMember } = workTeamMember;
        //legger til en div med eventer som gjør det mulig å dragge og droppe
        workTeamMemberEl.innerHTML = "<div id='"+teamMember+"' draggable='true' ondragstart='drag(event)'>"+ teamMember +"</div>";
        teamMemberListEl.appendChild(workTeamMemberEl);
        }
    }
    
    function createNewTeamMember(event)  {
        event.preventDefault();
        
        const teamMember = document.querySelector("[name='teamMember']").value;
        const workTeamMember = {teamMember};
       
        if(teamMember.match(letters)){
            const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList")) || [];
            teamMemberList.push(workTeamMember);
            window.localStorage.setItem("teamMemberList", JSON.stringify(teamMemberList));
            event.target.reset();
            renderTeamMemberList();
            getSelectOptions();
        }
        else{
            alert("Venligst skriv noe inn på feltet")
            event.target.reset();
        }
    }
    
    function getAssignmentTask(event) {
        var assignment = document.getElementById("valueTask").innerHTML=localStorage.getItem("workTaskList");
    }
        
            
    
            function submitAssignmentTask(event) {
              event.preventDefault();
    
                let taskValue = document.querySelector("#valueTask").value;
                let memberValue = document.querySelector("#valueTeamMember").value;
                var task = document.getElementById(taskValue);
    
                let newAssignment = {
                    "task": taskValue,
                    "teamMember": memberValue
                };
    
                let assignmentList = JSON.parse(window.localStorage.getItem("assignmentList")) || [];
                assignmentList.push(newAssignment);
                window.localStorage.setItem("assignmentList", JSON.stringify(assignmentList));
    
    
                let assignmentContainer = document.getElementById("assignmentList");
                taskValue.innerHTML += `<div> ${taskValue} ${memberValue} </div> `;
                
                
               
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