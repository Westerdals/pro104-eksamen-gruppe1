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
const workTaskList = JSON.parse(window.localStorage.getItem("workTaskList")) || [];   
    const workTaskListEl = document.getElementById("workTaskList");
    const taskContainer = document.getElementById("taskContainer");