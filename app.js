const projects = [
    {
        name: "Multiplayer Game Modo Turbo",
        image: "public/images/multiplayer-game.gif",
        href: "https://codepen.io/Luis-Costantin/full/ExGEmYJ",
        skills: ["JavaScript", "HTML Canvas", "Express", "Socket.io"],
    },
    {
        name: "Anonymous Message Board",
        image: "public/images/anonymous-message-board.png",
        href: "https://github.com/luisclaudioc/freecodecamp-anonymous-message-board",
        skills: ["JavaScript", "MongoDB", "Node.js", "Express"]
    },
    {
        name: "Budget App",
        image: "public/images/budget-app.png",
        href: "https://replit.com/@luisclaudioc/boilerplate-budget-app?v=1#main.py",
        skills: ["Python"]
    },
    {
        name: "Port Scanner",
        image: "public/images/port-scanner.png",
        href: "https://codepen.io/Luis-Costantin/full/WNLZJLm",
        skills: ["Python", "Socket"]
    },
    {
        name: "Demographic Data Analyzer",
        image: "public/images/demographic-data-analizer.png",
        href: "https://replit.com/@luisclaudioc/boilerplate-demographic-data-analyzer?v=1#main.py",
        skills: ["Python", "Data Analysis", "Pandas"],
    },
    {
        name: "Drum Machine",
        image: "public/images/drum-machine.png",
        href: "https://codepen.io/Luis-Costantin/full/WNLZJLm",
        skills: ["JavaScript", "React.js"]
    },
    {
        name: "Calculator",
        image: "public/images/calculator.png",
        href: "https://codepen.io/Luis-Costantin/full/ExGEmYJ",
        skills: ["HTML", "CSS", "JavaScript"],
    },
];

// ---------------- HOME BUTTON --------------- //

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});


// ---------------- DISPLAY PROJECTS --------------- //

let projectCount = 0;

const projectsContainer = document.getElementById("projects-list");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

const renderProjectsView = () => {
    projectsContainer.innerHTML = "";
  
    for (let i=0; i<projects.length; i++) {
        const name = projects[i].name.split(" ").join("-").toLowerCase();
        const image = projects[i].image;
        const link = projects[i].href;
        const skills = projects[i].skills.join(", ")

        projectsContainer.innerHTML += `
        <a href="${link}" target="_blank">
            <div id=${name} class="project-view">
            <img src="${image}" alt="preview of ${name} project" class="project-img" />
            <h4>${name}</h4>
            <p>[ ${skills} ]</p>
            </div>
        </a>
        `
    }
}
renderProjectsView();

rightBtn.addEventListener("click", () => {
    rightBtn.classList.remove("hidden");
    leftBtn.classList.remove("hidden");
    if (projectCount === projects.length - 3) {
        projectCount = 0;
        leftBtn.classList.add("hidden");
    } else {
        projectCount++;
    }
    if (projectCount === projects.length - 3) 
        rightBtn.classList.add("hidden")
    projectsContainer.style.left=`${-projectCount*370}px`;
});

leftBtn.addEventListener("click", () => {
    rightBtn.classList.remove("hidden");
    leftBtn.classList.remove("hidden");
    projectCount--;
    if (projectCount === 0) 
        leftBtn.classList.add("hidden");
    projectsContainer.style.left=`${-projectCount*370}px`;
});

setInterval(() => {
    rightBtn.click();
}, 3500);


// ---------------- EMAIL CONTACT --------------- //

const mailBtn = document.getElementById("mail-btn");
const contactBtn = document.getElementById("contact-btn");
const closeDialogBtn = document.getElementById("close-contact-btn")
const dialogContact = document.getElementById("contact-dialog");


mailBtn.addEventListener("click", () => {
    dialogContact.showModal();
});

contactBtn.addEventListener("click", () => {
    dialogContact.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    dialogContact.close();
})
