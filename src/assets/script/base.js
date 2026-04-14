"use strict";

const navButton = document.querySelector(".navigation-button");
const navWrapper = document.querySelector(".navigation-wrapper");

navButton.addEventListener("click", () => {
  navWrapper.classList.toggle("active");
});

const tabButtons = document.querySelectorAll(".tab");
const menuCards = document.querySelectorAll(".menu-card");

if (tabButtons.length && menuCards.length) {
  const activateTab = (target, activeButton) => {
    tabButtons.forEach((tab) => {
      tab.classList.toggle("active", tab === activeButton);
    });

    menuCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display = category === target ? "" : "none";
    });
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      if (!target) return;

      activateTab(target, button);
    });
  });

  window.addEventListener("DOMContentLoaded", () => {
    const initialButton =
      document.querySelector(".tab.active") || tabButtons[0];
    const initialTarget = initialButton?.getAttribute("data-target");
    if (initialTarget && initialButton) {
      activateTab(initialTarget, initialButton);
    }
  });
}
