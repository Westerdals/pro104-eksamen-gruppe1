const gridContainer = document.getElementsByClassName("gridContainer");
var divCounter = 0;
var nameCounter = 0;
var letters = /^[A-Za-z]+$/;
function renderWorkTaskList() { 
    const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];   
    const workTaskListEl = document.getElementById("workTaskList");
    const taskContainer = document.getElementById("taskContainer");
    const taskSelect = document.getElementById("valueTask");
    workTaskListEl.innerHTML = "";  
    taskContainer.innerHTML = "";
    for (const workTask of workTaskList) {
        const workTaskEl = document.createElement("div");
        const taskDrop = document.createElement("option");
        workTaskEl.innerHTML = "<div>" + workTask.task + "</div>";
        workTaskListEl.appendChild(workTaskEl);
        taskDrop.innerHTML = `<option> ${workTask.task}</option>`
        taskSelect.appendChild(taskDrop);
        };
    
    //Lager en ny div for tasken som ble sendt inn
    for (const taskGrid of workTaskList){
        const newTaskDiv = document.createElement("div");
        const assignedMembers = document.createElement("div");
        newTaskDiv.innerHTML = `<h3>Task: ${taskGrid.task} </h3> <b>Workers</b> <div id="${taskGrid.task}" class="dragDiv" ondrop="drop(event)" ondragover="allowDrop(event)"> Drag members here </div>`;
        newTaskDiv.className = "gridElement";
        document.getElementsByClassName("taskGridContainer")[0].appendChild(newTaskDiv);
        
        
        
        //Sletter ekstra diver som blir laget
        if(taskContainer.childElementCount > workTaskList.length){
            divCounter++;
            for ( var i = 0; taskContainer.childElementCount - divCounter; i++){
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
        const nameSelect = document.getElementById("valueTeamMember");
        teamMemberListEl.innerHTML = "";
        for (const workTeamMember of teamMemberList) {
            const workTeamMemberEl = document.createElement("div");
            const nameDrop = document.createElement("option");
            const { teamMember } = workTeamMember;
            //legger til en div med eventer som gjør det mulig å dragge og droppe
            workTeamMemberEl.innerHTML = "<div class= '"+teamMember+"' draggable='true' ondragstart='drag(event)'>"+ teamMember +"</div>";
            teamMemberListEl.appendChild(workTeamMemberEl);

            nameDrop.innerHTML = `<select>${teamMember}</select>`
            nameSelect.appendChild(nameDrop);
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
          //  getSelectOptions();
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
                nameCounter++;
                const name = document.querySelector("#valueTask").value;
                const task = document.querySelector("#valueTeamMember").value;
                const assignedTask = {name, task};

                const assignedTaskList = JSON.parse(window.localStorage.getItem("assignedTaskList")) || [];
                assignedTaskList.push(assignedTask);
                window.localStorage.setItem("assignedTaskList", JSON.stringify(assignedTaskList));
                renderAssignedTaskList();
                event.target.reset();
            }
            
        function renderAssignedTaskList(){
            const task = document.querySelector("#valueTask").value;
            const assignedTaskList = JSON.parse(window.localStorage.getItem("assignedTaskList")) || [];
            const teamMemberList = JSON.parse(window.localStorage.getItem("teamMemberList"));


            for(const assignedTask of assignedTaskList){
                const assignedTaskListEl = document.getElementById(assignedTask.name);
                const assignedTaskEl = document.createElement("div");
                assignedTaskEl.innerHTML = `<div>${assignedTask.task}</div>`;
                assignedTaskListEl.appendChild(assignedTaskEl);

                //sletter ekstra diver som blir laget
                if (assignedTaskListEl.childElementCount > teamMemberList.length){
                    for (var i = 0; assignedTaskListEl.childElementCount - nameCounter; i++){
                        assignedTaskListEl.removeChild(assignedTaskListEl.firstChild);
                    }    
                }
            }
            
        }

            // Denne blir call'a når body'en på html fila blir load'a
            function onLoadRender() {
                renderWorkTaskList()
                renderTeamMemberList()
                renderAssignedTaskList()
            }