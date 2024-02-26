window.addEventListener('load', () => {
    document.getElementById("loader").style.display = "none";
    putHome();
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
    document.getElementsByTagName('main')[0].id = "mainProgress";
    document.getElementById("mainProgress").innerHTML = `
    <table>
    <thead>
        <tr>
            <th>Class Name</th>
            <th>Description</th>
        </tr>
    </thead>
        <tbody id="tableBody">
        
        </tbody>
    </table>
    
    `

    // Load JSON data
    let url = "/components/progress.json";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Generate table rows dynamically
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = ''; // Clear existing content
        data.classes.forEach(cls => {
            const row = `<tr>
                            <td>${cls.name}</td>
                            <td>${cls.description}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
function putProjects()
{
    document.getElementsByTagName('main')[0].innerHTML = `<div id="projectGrid"></div>`

    // Load JSON data
    let url = "/components/projects.json";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Generate table rows dynamically
        const projectGrid = document.getElementById('projectGrid');
        projectGrid.innerHTML = ''; // Clear existing content
        data.projects.forEach(project => {
            const box = `
            <div class="projectBox">
                <div class="imgBox">
                    <img src="${project.image}" alt="Project Image" width="100%" height="auto">
                </div>
                <div class="projectDesc">
                    <span>${project.desc}</span>
                </div>
                <div class="checkBtn">
                    <button><a href="${project.source}" target="_blank">View GitHub</a></button>
                </div>
            </div>
            `;
            projectGrid.innerHTML += box;
        });
        projectGrid.innerHTML += `<h4>More Projects are coming soon...</h4>`
    })
    .catch(error => console.error('Error fetching data:', error));
    
}
function putSkills()
{
    url = './components/Abrorjon Asralov - Resume.docx' 
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'Abrorjon Asralov - Resume.docx';
        a.click();
        window.URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
        console.error('Error downloading resume:', error);
    });  
}

function redirectToEmail() 
{
    const emailAddress = "asralov@arizona.edu";
    const subject = "";
    const body = "";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
  