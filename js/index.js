const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio__item");
    const modal = document.querySelector(".portfolio-item-individual");
    const overlay = document.querySelector(".overlay");
    const backButton = document.querySelector(".back-button");
  
    // Function to open the portfolio item modal
    function openPortfolioItem(item) {
      modal.style.display = "block";
      overlay.style.display = "block";
    }
  
    // Function to close the portfolio item modal
    function closePortfolioItem() {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  
    // Event listener for portfolio item clicks
    portfolioItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        openPortfolioItem(index);
      });
    });
  
    // Event listener for the "Back" button
    backButton.addEventListener("click", () => {
      closePortfolioItem();
    });
  
    // Event listener for clicking on the grayed-out background
    overlay.addEventListener("click", () => {
      closePortfolioItem();
    });
  });
  */