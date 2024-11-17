// mobile nave
const mobileNav = document.querySelector("#mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcon = document.querySelector(".mnav__close-btn-icon");

const openedClass = "left-0";
const closedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(closedClass)) {
    mobileNav.classList.remove(closedClass);
    mobileNav.classList.add(openedClass);

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
  } else {
    mobileNav.classList.add(closedClass);
    mobileNav.classList.remove(openedClass);
    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
  }
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// faq
const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach((item) => {
  const faqBtn = item.querySelector(".faq__btn");
  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");

    const iconClass = isOpen ? "ri-subtract-line" : "ri-add-line";
    const iconElement = faqBtn.querySelector("i");
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// scroll animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
});

sr.reveal(".hero__text", { origin: "top" });

// ScrollReveal().reveal(".hero__text");

// Stats count animation
const createOdometer = (el, value) => {
  console.log(el);
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

const happyPatientsCount = document.querySelector(".happy-patients-count");
const branchesCount = document.querySelector(".branches-count");
const seniorDoctorsCount = document.querySelector(".senior-doctors-count");
const yearExperienceCount = document.querySelector(".year-experience-count");

createOdometer(happyPatientsCount, 3216);
createOdometer(branchesCount, 56);
createOdometer(seniorDoctorsCount, 12);
createOdometer(yearExperienceCount, 30);
