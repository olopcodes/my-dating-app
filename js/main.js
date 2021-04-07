const header = document.querySelector(".main-header");
const mainHero = document.querySelector(".main-hero");
const animateSections = document.querySelectorAll(".section--hidden");
console.log(animateSections);

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
// observer.unobserve(mainHero);

const revealSections = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const animateSectionsObserver = new IntersectionObserver(revealSections, {
  root: null,
  // threshold: 0.15,
  threshold: 0,
  rootMargin: `100px`,
});

animateSections.forEach((section) => {
  animateSectionsObserver.observe(section);

  section.classList.add("section--hidden");
});
