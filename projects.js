// Creates new project and stores it in localstorage
function createNewProject(event){
    event.preventDefault();
    const projectName = document.querySelector("[name='projectName']").value;
    const project = {projectName};
    const projectList = JSON.parse(window.localStorage.getItem("projectList")) || [];
    projectList.push(project);
    window.localStorage.setItem("projectList", JSON.stringify(projectList));

    renderProjectList();
    event.target.reset();
}

// Makes the list of projects visible
function renderProjectList() {
    const projectList = JSON.parse(window.localStorage.getItem("projectList")) || [];
    const projectListEl = document.getElementById("projectList");
    projectListEl.innerHTML = "";
    for(const project of projectList){
        const projectEl = document.createElement("div");
        projectEl.innerHTML = project.projectName;
        projectListEl.appendChild(projectEl);
    }
}