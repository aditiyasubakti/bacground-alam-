function changeToNight() {
    document.body.style.backgroundColor = "#2C3E50";
    document.querySelector(".sun").style.opacity = 0;
    document.querySelector(".sun").style.transform = "translateX(100%)";
    document.querySelector(".moon").style.opacity = 1;
    document.querySelector(".moon").style.transform = "translateX(100%)";
    document.querySelectorAll(".cloud").forEach(cloud => {
      cloud.style.opacity = 0.7;
    });
    document.querySelectorAll(".star").forEach(star => {
      star.style.opacity = 1;
    });
    document.querySelectorAll(".star").forEach(star => {
      star.style.backgroundColor = "#fff";
    });
    setTimeout(changeToDay, 10000);
  }

  function changeToDay() {
    document.body.style.backgroundColor = "#406E8E";
    document.querySelector(".sun").style.opacity = 1;
    document.querySelector(".sun").style.transform = "translateX(0)";
    document.querySelector(".moon").style.opacity = 0;
    document.querySelector(".moon").style.transform = "translateX(0)";
    document.querySelectorAll(".cloud").forEach(cloud => {
      cloud.style.opacity = 1;
    });
    document.querySelectorAll(".star").forEach(star => {
      star.style.opacity = 0;
    });
    document.querySelectorAll(".star").forEach(star => {
      star.style.backgroundColor = "transparent";
    });
    setTimeout(changeToNight, 10000);
  }

  // Memulai dengan mode siang hari
  setTimeout(changeToNight, 10000);