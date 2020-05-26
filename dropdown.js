/* Toggle between hiding and showing the dropdown content */
function openDropdown() {
  document.getElementById("my-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function displayIkkeStartet() {
    document.getElementById("status-p").innerHTML = "Ikke startet";
    document.getElementById("status-p").style.color = "white";
    document.getElementById("status-p").style.backgroundColor = "#f44336";
}

function displayUnderArbeid() {
    document.getElementById("status-p").innerHTML = "Under arbeid";
    document.getElementById("status-p").style.color = "white";
    document.getElementById("status-p").style.backgroundColor = "#2196F3";
}

function displayFerdig() {
    document.getElementById("status-p").innerHTML = "Ferdig";
    document.getElementById("status-p").style.color = "white";
    document.getElementById("status-p").style.backgroundColor = "#4CAF50";
}