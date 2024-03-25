const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      console.log(entry);
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
  ".contact-button1",
  ".contact-button2",
  ".contact-button3",
  ".skill.one",
  ".skill.two",
  ".circle1",
  ".techstack",
];
classes.forEach((className) => {
  const elements = document.querySelectorAll(className);
  elements.forEach((element) => {
    observer.observe(element);
  });
});
