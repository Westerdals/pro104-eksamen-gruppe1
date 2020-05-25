function allowDrop(e){
    e.preventDefault();
}
function drag(e){
    const data = e.target;
    e.dataTransfer.setData("text/plain", e.target.className);
    
}

function drop(e){
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    e.target.appendChild(document.getElementsByClassName(data)[0]);
    const assignedMember = {data};
    const draggedMember = JSON.parse(window.localStorage.getItem("draggedMember")) || [];
    draggedMember.push(assignedMember);
    window.localStorage.setItem("draggedMember", JSON.stringify(draggedMember));
    console.log("drop", data);
}
