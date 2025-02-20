window.onload = function() {
            if (typeof loadNavbar === "function") {
                loadNavbar();
            } else {
                console.error("Navbar function not found. Ensure navbar.js is loaded.");
            }
            if (typeof loadFooter === "function") {
                loadFooter();
            } else {
                console.error("Footer function not found. Ensure footer.js is loaded properly.");
            }
        };