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
    const localList = JSON.parse(window.localStorage.getItem("projectList")) || [];
    
    var projectList = document.getElementById("projectList"); 
    for(const project of localList){
        
        const projectDiv = document.createElement("div");
        const projectLink = document.createElement("a");
    
        projectDiv.innerHTML = project.projectName;
        
        projectLink.title = "Click here";
        projectLink.href = "https://www.geeksforgeeks.org";
        projectDiv.appendChild(projectLink);
        projectList.appendChild(projectDiv);
    }
}  
 
function createLink() { 
// Create anchor element. 
var a = document.createElement('a');  
// Create the text node for anchor element. 
var link = document.createTextNode("Prosjekt 1"); 
                  
// Append the text node to anchor element. 
a.appendChild(link);  
                  
// Set the title. 
a.title = "Prosjekt";  
                  
// Set the href property. 
a.href = "https://www.geeksforgeeks.org"; // Append the anchor element to the body. 
    document.body.appendChild(a);  
}



