const header = document.querySelector(".main-header");
const mainHero = document.querySelector(".main-hero");
const sections = document.querySelectorAll(".section--hidden");
// console.log(animateSections);

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-250px`,
};

const mainHeroObserver = new IntersectionObserver(function (entries, observer) {
  //   entries.forEach((entry) => {

  //     if (!entry.isIntersecting)
  //   });
  // when mainhero is not intersecting the viewport via root
  // and the -200px rootmargin makes the change happen sooner
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    // add the class
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  //   supposed to stop the observer to stop observing for performance
  //   observer.unobserve(entry.target);
}, options);

// observe whether the mainHero is intersecting the viewport
mainHeroObserver.observe(mainHero);

// observer for sections
const sectionOptions = {
  root: null,
  threshold: 0.4,
};

const sectionsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    console.log(entry);
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
    // console.log(entry);
  });
}, sectionOptions);

sections.forEach((section) => {
  sectionsObserver.observe(section);
});
