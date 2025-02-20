console.log("footer.js is loaded!");

function loadFooter() {
    console.log("loadFooter function is called!");
    document.getElementById("footer").innerHTML = `
        <footer>
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </footer>
    `;
}