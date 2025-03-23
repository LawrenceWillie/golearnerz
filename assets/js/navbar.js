function loadNavbar() {
    document.getElementById("navbar").innerHTML = `
        <div class="logo">
            <a href="../index.html">
                <i class="fas fa-book"></i><span> Golearners</span>
            </a>

        </div>

        <div id="mySidenav" class="sidenav">
            <a  class="closebtn" onclick="closeNav()"><span>&times;<span></a>
              
              <ul>
                  <li id="navHomeButton" class="active"><a href="../index.html">Home</a></li>
                  <li id="navMenuButton" ><a href="">Blog</a></li>
                  <li><a href="#">study Quides</a></li>
                  <li><a href="#">Exam papers</a></li>
                  <li><a href="#">Tutoring</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li class="reg"><button><a href="signUp.html">Register</a></button></li>
                  <li class="reg"><button><a href="login.html">Log in</a></button></li>
              </ul>
        </div>
        <label id="menu-bar"  onclick="openNav()"><i class="fas fa-bars"></i></label>
        
    `;
}
