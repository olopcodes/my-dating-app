const header = document.querySelector(".main-header");
const mainHero = document.querySelector(".main-hero");
console.log(header);
const options = {
  root: null,
  threshold: 0,
  rootMargin: `-200px`,
};

const mainHeroObserver = new IntersectionObserver(function (entries, observer) {
  //   entries.forEach((entry) => {

  //     if (!entry.isIntersecting)
  //   });
  // when mainhero is not intersecting the viewport via root
  // and the -200px rootmargin makes the change happen sooner
  const [entry] = entries;
  console.log(entry);

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
