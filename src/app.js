// Keeping header consistant in all the pages using JS
const headerComponent = document.querySelectorAll('.header-body')
headerComponent.forEach(header => {
  header.innerHTML = `
  <div>
      <h1><a href=".">RK</a></h1>
      <section>
          <button>
              <img src="./assets/lightmode.svg"/>
          </button>
          <button>
              <img src="./assets/menu.svg"/>
          </button>
      </section>
  </div>`;
});

const allPosts = []
const postComponets = document.querySelector('.introduction-text-body-posts')
// postComponets.innerHTML=



// for technologies
const allTechnologies = [
  { name: "Vue JS", image: "./assets/vue.svg", category: 'frontend', backgroundColor: "rgba(65, 184, 131, 0.1)" }, // Teal
  { name: "React Native", image: "./assets/react.svg", category: 'frontend', backgroundColor: "rgba(97, 218, 251, 0.1)"}, 
  { name: "Vite", image: "./assets/vite.svg", category: 'tools', backgroundColor: "rgba(236, 72, 153, 0.1)" }, // Pink
  { name: "Expo", image: "./assets/expo.svg", category: 'frontend', backgroundColor:  "rgba(255, 255, 255)" }, // Blue
  { name: "Javascript", image: "./assets/javascript.svg", category: 'frontend', backgroundColor: "rgba(255, 204, 0, 0.1)" }, // Yellow
  { name: "React JS", image: "./assets/react.svg", category: 'frontend', backgroundColor: "rgba(97, 218, 251, 0.1)" }, // Light Blue
  { name: "Typescript", image: "./assets/typescript.svg", category: 'frontend', backgroundColor: "rgba(0, 122, 204, 0.1)" }, // Blue
  { name: "Node js", image: "./assets/node.svg", category: 'backend', backgroundColor: "rgba(64, 184, 74, 0.1)" }, // Green
  { name: "Express", image: "./assets/express.svg", category: 'backend', backgroundColor: "rgba(255, 255, 255)" }, // White
  { name: "Git", image: "./assets/git.svg", category: 'tools', backgroundColor: "rgba(255, 51, 51, 0.1)" }, // Red
  { name: "Github", image: "./assets/github.svg", category: 'tools', backgroundColor: "rgba(255, 255, 255,0.5)" }, // White
  { name: "Firebase", image: "./assets/firebase.svg", category: 'tools', backgroundColor: "rgba(255, 87, 34, 0.1)" }, // Orange
  { name: "VS Code", image: "./assets/vs-code.svg", category: 'tools', backgroundColor: "rgba(0, 122, 204, 0.1)" }, // Blue
  { name: "Android Studio", image: "./assets/android-studio.svg", category: 'tools', backgroundColor: "rgba(76, 175, 80, 0.1)" }, // Green
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
      <div class="each-tech-stack-container ">
      <div class="tech-stack-image-container" style="background-color:${element.backgroundColor} ;">
      <img src="${element.image}" class="tech-stack-variable"/>
      </div>
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

// Setting the inner HTML for each component
FrontendComponent.innerHTML = frontendHtmlContent;
BackendComponent.innerHTML = backendHtmlContent;
ToolsComponent.innerHTML = toolsHtmlContent;


//this is for Pages
const allPages = [
  { 
    name: "Blog", 
    description: "Read my latest thoughts and articles.", 
    link: "blog.html" 
  },
  { 
    name: "Portfolio", 
    description: "View my work and projects.", 
    link: "portfolio.html" 
  },
  { 
    name: "Spotify Playlist", 
    description: "Listen to my favorite tracks.", 
    link: "https://open.spotify.com/your-playlist-link" 
  },
  { 
    name: "Let's Talk", 
    description: "Reach out to me via email.", 
    link: "mailto:your-email@example.com" 
  }
];

const pageComponent = document.querySelector('.pages-list-one')
let pageElement =''
allPages.forEach((element)=>{
  const htmlContent = `
    <li>
      <a class="each-page-stack-container" href="${element.link}">
        <h1>${element.name}</h1>
        <span>${element.description}</span>
      </a>
    </li>`;
    pageElement+=htmlContent

})
pageComponent.innerHTML=pageElement






// Scroll to a specific element
function scrollToElement(targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

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
