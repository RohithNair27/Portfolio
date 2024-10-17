//Keeping header consistant in all the pages using JS
// const headerComponent = document.querySelector('header')
// headerComponent.innerHTML=`<div>
// <h1><a href=".">RK</a></h1>
// <button>mode</button></div>`


const allTechnologies = [
  { name: "Vue JS", image: "./assets/vue.svg", category: 'frontend' },
  { name: "React JS", image: "./assets/react.svg", category: 'frontend' },
  { name: "Vite", image: "./assets/vite.svg", category: 'frontend' },
  { name: "Expo", image: "./assets/expo.svg", category: 'frontend' },
  { name: "Javascript", image: "./assets/javascript.svg", category: 'frontend' },
  { name: "Typescript", image: "./assets/typescript.svg", category: 'frontend' },
  
  { name: "Node js", image: "./assets/node.svg", category: 'backend' },
  { name: "Express", image: "./assets/express.svg", category: 'backend' },
  
  { name: "Git", image: "./assets/git.svg", category: 'tools' },
  { name: "Github", image: "./assets/github.svg", category: 'tools' },
  { name: "Firebase", image: "./assets/firebase.svg", category: 'tools' },
  { name: "VS Code", image: "./assets/vs-code.svg", category: 'tools' },
  { name: "Android Studio", image: "./assets/android-studio.svg", category: 'tools' },
];

const FrontendComponent = document.querySelector('.tech-stack-list-one');
const BackendComponent = document.querySelector('.tech-stack-list-two');
const ToolsComponent = document.querySelector('.tech-stack-list-three');

let frontendHtmlContent = '';
let backendHtmlContent = '';
let toolsHtmlContent = '';

allTechnologies.forEach((element) => {
  // Create the HTML content for each technology
  const htmlContent = `
    <li>
      <div class="each-tech-stack-container ${element.category}">
        <img src="${element.image}"/>
        <span>${element.name}</span>
      </div>
    </li>`;

  // Append to the respective category
  if (element.category === 'frontend') {
    frontendHtmlContent += htmlContent;
  } else if (element.category === 'backend') {
    backendHtmlContent += htmlContent;
  } else if (element.category === 'tools') {
    toolsHtmlContent += htmlContent;
  }
});

// Set the inner HTML for each component
FrontendComponent.innerHTML = frontendHtmlContent;
BackendComponent.innerHTML = backendHtmlContent;
ToolsComponent.innerHTML = toolsHtmlContent;



// onScroll transform
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);
const classes = [
  "#contact-button1",
  "#contact-button2",
  "#contact-button3",
  ".skill.one",
  ".skill.two",
  ".circle1",
  ".techstack",
];
classes.forEach((className) => {
  if (className.startsWith("#")) {
    let elements = document.getElementById(className.slice(1));
    observer.observe(elements);
  } else {
    let elements = document.querySelectorAll(className);
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
});

// Scroll to a specific element
function scrollToElement(targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// const sections = [
//   "skillwrapper",
//   "projectswrapper",
//   "experiences-wraper",
//   "footer",
// ];

// document.getElementById("navigateBottom").addEventListener("click", () => {
//   if (currentIndex <= sections.length - 1) {
//     scrollToElement(sections[currentIndex]);
//     currentIndex++;
//   }
// });

document.getElementById("contact-button1").addEventListener("click", () => {
  scrollToElement("skillwrapper");
});
document
  .getElementById("contact-button2")
  .addEventListener("click", () => scrollToElement("projectswrapper"));
document
  .getElementById("contact-button3")
  .addEventListener("click", () => scrollToElement("experiences-wraper"));
document
  .getElementById("navigateTop")
  .addEventListener("click", () => scrollToElement("introduction"));
