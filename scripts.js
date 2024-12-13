document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.body.insertAdjacentHTML("afterbegin", html);
      addHeaderScrollEffect(); // Attach the scroll effect function
    })
    .catch((err) => console.error("Failed to load header:", err));
});

function addHeaderScrollEffect() {
  const header = document.querySelector("header");
  if (header) {
    let lastScrollY = window.scrollY;

    // Set up the initial header styles
    header.style.transform = "translateY(0)"; // Initially visible
    header.style.transition = "transform 0.3s ease";

    // Scroll event listener
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
      }
      lastScrollY = window.scrollY; // Update the last scroll position
    });
  }
}


      // Fetch the footer and insert it into the page
      fetch("footer.html")
        .then((response) => response.text())
        .then((data) => {
          // Insert the fetched footer into the page
          document.getElementById("footer").innerHTML = data;

          // Get the current page file name
          const currentPage = window.location.pathname.split("/").pop();

          // Select all quick links in the footer
          const quickLinks = document.querySelectorAll(".footer-links ul li a");

          // Add a 'current-page' class to the link matching the current page
          quickLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
              link.classList.add("current-page");
            }
          });
        })
        .catch((error) => console.error("Error loading footer:", error));