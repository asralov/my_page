window.addEventListener('load', () => {
    document.getElementById("loader").style.display = "none";
    showName();
    showBio();
})

function showBio(){
    const filePath = '/components/bio.txt';
    // Fetch the file content
    fetch(filePath)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        return response.text();
    })
    .then((content) => {
        // Display the file content
        const formattedContent = content.replace(/\n/g, '<br>');
        document.getElementById("bio").innerHTML = formattedContent;
    })
    .catch((error) => {
        console.error(error);
        document.getElementById("bio").innerHTML = "Error fetching file.";
    });
}

function showName() {
    let msg = "Hello I am Abror, and welcome to my page...";
    let current = "";
    let index = 0;

    function printNextLetter() {
        if (index < msg.length) {
            current += msg[index];
            document.getElementById("typing").textContent = current;
            index++;
            setTimeout(printNextLetter, 100); // Adjust the delay as needed (100 milliseconds in this case)
        }
    }

    printNextLetter();
    
}


const homeBtn = document.getElementById("homeBtn");
const progressBtn = document.getElementById("progressBtn");
const projectsBtn = document.getElementById("projectsBtn");
const skillsBtn = document.getElementById("skillsBtn");
const contactBtn = document.getElementById("contactsBtn");

homeBtn.addEventListener('click', ()=>{
    putHome();
    showName();
    showBio();
})

progressBtn.addEventListener('click', ()=>{
    putProgress();
})

projectsBtn.addEventListener('click', ()=>{
    putProjects();
})

skillsBtn.addEventListener('click', ()=>{
    putSkills();
})

contactBtn.addEventListener('click', ()=>{
    redirectToEmail();
})

function putHome()
{
    let html = `
        <div id="picBox">
            <img id="pic" src="./components/me.jpg" alt="ME">
            <p>CS Student/Web Developer</p>   
        </div>
        <div id="desc">
            <h2 id="typing"></h2>
            <p id="bio"></p>
        </div>
    `
    document.getElementsByTagName("main")[0].innerHTML = html;
}

function putProgress()
{
    document.getElementsByTagName("main")[0].innerHTML = '<h1>PROGRESS</h1>'
}
function putProjects()
{
    document.getElementsByTagName("main")[0].innerHTML = '<h1>PROJECTS</h1>'
}
function putSkills()
{
    document.getElementsByTagName("main")[0].innerHTML = '<h1>SKILLS</h1>'
}

function redirectToEmail() 
{
    const emailAddress = "asralov@arizona.edu";
    const subject = "";
    const body = "";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
  