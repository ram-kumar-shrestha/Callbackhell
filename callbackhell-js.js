const fadeOut = (element, duration, callback) => {
  let opacity = 1;
  const fadeEffect = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      element.style.display = "none";
      clearInterval(fadeEffect);
      callback();
    }
  }, duration / 10);
};

const fadeIn = (element, duration, callback) => {
  let opacity = 0;
  const fadeEffect = setInterval(() => {
    element.style.display = "block";
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeEffect);
      callback();
    }
  }, duration / 10);
};

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");

btn1.addEventListener("click", function () {
  fadeOut(this, 500, function () {
    fadeIn(btn2, 500, function () {
      btn2.addEventListener("click", function () {
        fadeOut(this, 500, function () {
          fadeIn(btn3, 500, function () {
            btn3.addEventListener("click", function () {
              fadeOut(this, 500, function () {
                fadeIn(btn4, 500, function () {
                  btn4.addEventListener("click", function () {
                    fadeOut(this, 500, function () {
                      fadeIn(btn5, 500, function () {
                        btn5.addEventListener("click", function () {
                          fadeOut(this, 500, function () {
                            fadeIn(btn6, 500, function () {
                              btn6.addEventListener("click", function () {
                                fadeOut(this, 500, function () {
                                  fadeIn(document.body, 500, function () {
                                    alert("all callbacks completed");
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
