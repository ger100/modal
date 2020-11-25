
function openModal() { 
    //document.getElementsByClassName("modal")[0].style.display = "block";
    //document.getElementsByClassName("modal")[0].style.visibility = "visible";
    document.getElementsByClassName("modal")[0].style.opacity = "1";
    document.getElementsByClassName("modal")[0].style.transition = "opacity 1s";

    //document.getElementsByClassName("overlay")[0].style.display = "block";
    document.getElementsByClassName("overlay")[0].style.opacity = "1";
    document.getElementsByClassName("overlay")[0].style.transition = "opacity 1s";
    document.getElementsByClassName("overlay")[0].style.visibility = "visible";
}

function closeModal() { 
    //document.getElementsByClassName("modal")[0].style.display = "none";
    document.getElementsByClassName("modal")[0].style.opacity = "0";   
    document.getElementsByClassName("modal")[0].style.transition = "opacity 1s";
    
    //document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByClassName("overlay")[0].style.opacity = "0";   
    document.getElementsByClassName("overlay")[0].style.transition = "opacity 1s";
    document.getElementsByClassName("overlay")[0].style.visibility = "hidden";
}