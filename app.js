const projects = [
  {
      name: "Multiplayer Game Modo Turbo",
      image: "public/images/multiplayer-game.png",
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
      image: "public/images/demographic-data-analyzer.png",
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


// ---------------- BAR MENU --------------- //

const barMenuBtn = document.getElementById("bar-menu");
const navList = document.getElementById("nav-list");
barMenuBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const navBtn = document.querySelectorAll(".nav-option");
navBtn.forEach((button) =>
  button.addEventListener("click", () => {
    navList.classList.remove("show");
  })
);


// ---------------- DISPLAY PROJECTS --------------- //

let projectCount = 0;

const projectList = document.getElementById("projects-list");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

const renderProjectsView = () => {
  projectList.innerHTML = "";
  
  for (let i=0; i<projects.length; i++) {
    const name = projects[i].name.split(" ").join("-").toLowerCase();
    const image = projects[i].image;
    const link = projects[i].href;
    const skills = projects[i].skills.join(", ")

    projectList.innerHTML += `
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
  projectList.style.left=`${-projectCount*370}px`;
});

leftBtn.addEventListener("click", () => {
  rightBtn.classList.remove("hidden");
  leftBtn.classList.remove("hidden");
  projectCount--;
  if (projectCount === 0) 
    leftBtn.classList.add("hidden");
  projectList.style.left=`${-projectCount*370}px`;
});

setInterval(() => {
  if (window.innerWidth > 720) {
    rightBtn.click();
  }
}, 3500);


// ---------------- SEE ALL PROJECTS --------------- //

const seeAllBtn = document.getElementById("see-all");
const projectsContainer = document.getElementsByClassName("projects-container")[0];
const overFlow = document.getElementsByClassName("overflow")[0];

seeAllBtn.addEventListener("click", () => {
  if (seeAllBtn.innerText === "See all") {
    seeAllBtn.innerText = "See less";
    projectsContainer.style.height = "auto";
    overFlow.style.height = "auto";
  } else {
    seeAllBtn.innerText = "See all";
    projectsContainer.style.height = "475px";
    overFlow.style.height = "420px";
  }
});

window.onresize = () => {
  if (window.innerWidth > 720) {
    projectsContainer.style.height = "auto";
    overFlow.style.height = "auto";
    projectList.style.left = "auto";
    projectCount = 0;
    leftBtn.classList.add("hidden");
  } else {
    seeAllBtn.innerText = "See all";
    projectsContainer.style.height = "475px";
    overFlow.style.height = "420px";
    projectList.style.left = "auto";
  }
};


// ---------------- EMAIL CONTACT --------------- //

const mailBtn = document.getElementById("mail-btn");
const contactBtn = document.getElementById("contact-btn");
const closeDialogBtn = document.getElementById("close-contact-btn")
const dialogContact = document.getElementById("contact-dialog");
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

mailBtn.addEventListener("click", () => {
  dialogContact.showModal();
});

contactBtn.addEventListener("click", () => {
  dialogContact.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialogContact.close();
});

submitBtn.addEventListener("submit", () => {
  nameInput.innerText = "";
  emailInput.innerText = "";
  messageInput.innerText = "";
})


