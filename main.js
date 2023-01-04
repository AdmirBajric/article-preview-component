const socialShare = document.querySelector(".social-share");
const img = document.querySelector(".social-share img");
const shareButtons = document.querySelector(".share-buttons");
const social = document.querySelector(".social");
const author = document.querySelector(".author-container");

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (!socialShare.contains(e.target)) {
    if (window.innerWidth >= 600) {
      socialShare.classList.remove("active-social");
      img.classList.remove("active-img");
      replaceBtn();
    } else {
      replace();
      toggle();
      author.style.zIndex = "1";
    }
  }
});

socialShare.addEventListener("click", (e) => {
  toggle();

  if (window.innerWidth <= 600) {
    author.style.zIndex = "-1";

    if (socialShare.classList.contains("social-share")) {
      socialShare.classList.replace("social-share", "active-social-mobile");
      shareButtons.classList.replace(
        "share-buttons",
        "share-buttons-active-mobile"
      );
      author.style.zIndex = "-1";
    } else {
      replace();
      author.style.zIndex = "1";
    }
  } else if (window.innerWidth >= 600) {
    if (shareButtons.classList.contains("share-buttons")) {
      shareButtons.classList.replace("share-buttons", "share-buttons-active");
    } else {
      replaceBtn();
    }
  }

  const reportWindowSize = () => {
    if (socialShare.classList.contains("active-social-mobile")) {
      replace();
      toggle();
      author.style.zIndex = "1";
    } else if (socialShare.classList.contains("active-social")) {
      replaceBtn();
      toggle();
    }
  };

  window.addEventListener("resize", reportWindowSize);
});

const toggle = () => {
  socialShare.classList.toggle("active-social");
  img.classList.toggle("active-img");
};

const replace = () => {
  socialShare.classList.replace("active-social-mobile", "social-share");
  shareButtons.classList.replace(
    "share-buttons-active-mobile",
    "share-buttons"
  );
};

const replaceBtn = () => {
  shareButtons.classList.replace("share-buttons-active", "share-buttons");
};
