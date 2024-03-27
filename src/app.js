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
