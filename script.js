// ============================
// LAUNCH BUTTON
// ============================

const launchButton = document.getElementById("launchBtn");

launchButton.addEventListener("click", function () {

  const originalText = this.textContent;

  this.textContent = "Launching...";

  this.style.pointerEvents = "none";

  setTimeout(() => {

    this.textContent = "You're in ✦";

    setTimeout(() => {

      this.textContent = originalText;

      this.style.pointerEvents = "auto";

    }, 1500);

  }, 900);

});


// ============================
// SIDEBAR INTERACTION
// ============================

const sidebarItems =
  document.querySelectorAll(".side-item");

sidebarItems.forEach(item => {

  item.addEventListener("click", () => {

    sidebarItems.forEach(otherItem => {
      otherItem.classList.remove("active");
    });

    item.classList.add("active");

  });

});


// ============================
// MOUSE GLOW EFFECT
// ============================

document.addEventListener("mousemove", event => {

  const x = event.clientX;
  const y = event.clientY;

  document.documentElement.style.setProperty(
    "--mouse-x",
    `${x}px`
  );

  document.documentElement.style.setProperty(
    "--mouse-y",
    `${y}px`
  );

});


// ============================
// CARD TILT EFFECT
// ============================

const cards =
  document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", event => {

    const rect = card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      (y - centerY) / 15;

    const rotateY =
      (centerX - x) / 15;

    card.style.transform =
      `translateY(-8px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "translateY(0) rotateX(0) rotateY(0)";

  });

});
