
var About , Contact , Project , Education ;

function onLoad(){
    About = document.getElementById("About");
    Contact = document.getElementById("Contact");
    Project = document.getElementById("Project");
    Education = document.getElementById("education");

    console.log("Calling");
}

function HideAll(){
    Project.style.cssText = "visibility:hidden;display:none;";
    About.style.cssText = "visibility:hidden;display:none;";
    Education.style.cssText = "visibility:hidden;display:none;";
    Contact.style.cssText = "visibility:hidden;display:none;";
}

function ShowProject(){
    Project.style.cssText = "visibility:visible;display:block;";

    About.style.cssText = "visibility:hidden;display:none;";
    Education.style.cssText = "visibility:hidden;display:none;";
    Contact.style.cssText = "visibility:hidden;display:none;";
}

function ShowAbout(){

    About.style.cssText = "visibility:visible;display:block;";

    Project.style.cssText = "visibility:hidden;display:none;";
    Education.style.cssText = "visibility:hidden;display:none;";
    Contact.style.cssText = "visibility:hidden;display:none;";
}

function ShowContact(){

    Contact.style.cssText = "visibility:visible;display:block;";

    Project.style.cssText = "visibility:hidden;display:none;";
    Education.style.cssText = "visibility:hidden;display:none;";
    About.style.cssText = "visibility:hidden;display:none;";
}

function ShowEducation(){

    Education.style.cssText = "visibility:visible;display:block;";

    Project.style.cssText = "visibility:hidden;display:none;";
    Contact.style.cssText = "visibility:hidden;display:none;";
    About.style.cssText = "visibility:hidden;display:none;";
}