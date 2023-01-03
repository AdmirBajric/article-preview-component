const socialShare = document.querySelector(".social-share");
const img = document.querySelector(".social-share img");
const shareButtons = document.querySelector(".share-buttons");

document.addEventListener("click", (e) => {
  if (!socialShare.contains(e.target)) {
    socialShare.classList.remove("active-social");
    img.classList.remove("active-img");
    shareButtons.classList.replace("share-buttons-active", "share-buttons");
  }
});

socialShare.addEventListener("click", (e) => {
  socialShare.classList.toggle("active-social");
  img.classList.toggle("active-img");
  if (shareButtons.classList.contains("share-buttons")) {
    shareButtons.classList.replace("share-buttons", "share-buttons-active");
  } else {
    shareButtons.classList.replace("share-buttons-active", "share-buttons");
  }
});
