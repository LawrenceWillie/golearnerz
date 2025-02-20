function loadNavbar() {
    document.getElementById("navbar").innerHTML = `

    <div class="logo">
            <i class="fas fa-book"></i><p class="logo_t">Extra Classes</p>
        </div>
        <nav id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> 
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contacts</a>
        </nav>
        <span class="openbtn" onclick="openNav()"><i class="fas fa-bars"></i></span>
        
    `;
}
