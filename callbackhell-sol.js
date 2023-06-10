const fadeOut = (element, duration) => {
  return new Promise((resolve) => {
    $(element).fadeOut(duration, resolve);
  });
};

const fadeIn = (element, duration) => {
  return new Promise((resolve) => {
    $(element).fadeIn(duration, resolve);
  });
};

const btn1 = $(".btn-1");
const btn2 = $(".btn-2");
const btn3 = $(".btn-3");
const btn4 = $(".btn-4");
const btn5 = $(".btn-5");
const btn6 = $(".btn-6");

const fadeOutAndFadeIn = async (fadeOutElement, fadeInElement) => {
  await fadeOut(fadeOutElement, 500);
  await fadeIn(fadeInElement, 500);
};

btn1.on("click", async () => {
  await fadeOutAndFadeIn(btn1, btn2);
});

btn2.on("click", async () => {
  await fadeOutAndFadeIn(btn2, btn3);
});

btn3.on("click", async () => {
  await fadeOutAndFadeIn(btn3, btn4);
});

btn4.on("click", async () => {
  await fadeOutAndFadeIn(btn4, btn5);
});

btn5.on("click", async () => {
  await fadeOutAndFadeIn(btn5, btn6);
});

btn6.on("click", async () => {
  await fadeOutAndFadeIn(btn6, document.body);
  alert("all callbacks completed");
});
