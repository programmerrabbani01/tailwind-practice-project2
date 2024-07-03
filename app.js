// mobile menu
const navDialog = document.getElementById("navDialog");

const handleMenu = () => {
  navDialog.classList.toggle("hidden");
};

// scroll

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

const setupInteractionObserve = (element, isLTR, speed) => {
  const interactionCallBack = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const interactionObserve = new IntersectionObserver(interactionCallBack);
  interactionObserve.observe(element);

  const scrollHandler = () => {
    const rect = element.getBoundingClientRect();
    const translateX = (window.innerHeight - rect.top) * speed;

    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = initialTranslateLTR + translateX;
    } else {
      totalTranslate = -(initialTranslateRTL + translateX);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  };
};

const line1 = document.getElementById("lineOne");
const line2 = document.getElementById("lineTwo");
const line3 = document.getElementById("lineThree");
const line4 = document.getElementById("lines");

setupInteractionObserve(line1, true, 0.15);
setupInteractionObserve(line2, false, 0.15);
setupInteractionObserve(line3, true, 0.15);
setupInteractionObserve(line4, true, 0.8);

// faqs

const dtElements = document.querySelectorAll("dt");

dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");

    const ddElement = document.getElementById(ddId);

    const ddArrowIcon = element.querySelector("i");

    ddElement.classList.toggle("hidden");
    ddArrowIcon.classList.toggle("-rotate-180");
  });
});
