const fadeOut = (element, duration) => {
  return new Promise((resolve) => {
    element.style.opacity = 1;

    const fadeEffect = setInterval(() => {
      if (element.style.opacity > 0) {
        element.style.opacity -= 0.1;
      } else {
        element.style.display = "none";

        clearInterval(fadeEffect);
        resolve();
      }
    }, duration / 10);
  });
};

const fadeIn = (element, duration) => {
  let opacity = 0;
  return new Promise((resolve) => {
    element.style.opacity = 0;
    element.style.display = "block";

    const fadeEffect = setInterval(() => {
      if (element.style.opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect);
        resolve();
      }
    }, duration / 10);
  });
};

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");

const fadeOutAndFadeIn = async (fadeOutElement, fadeInElement) => {
  await fadeOut(fadeOutElement, 500);
  await fadeIn(fadeInElement, 500);
};

btn1.addEventListener("click", async () => {
  await fadeOutAndFadeIn(btn1, btn2);
});

btn2.addEventListener("click", async () => {
  await fadeOutAndFadeIn(btn2, btn3);
});

btn3.addEventListener("click", async () => {
  await fadeOutAndFadeIn(btn3, btn4);
});

btn4.addEventListener("click", async () => {
  await fadeOutAndFadeIn(btn4, btn5);
});

btn5.addEventListener("click", async () => {
  await fadeOutAndFadeIn(btn5, btn6);
});

btn6.addEventListener("click", async () => {
  await fadeOutAndFadeIn(btn6, document.body);
  alert("all callbacks completed");
});
