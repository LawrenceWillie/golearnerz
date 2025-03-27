console.log("footer.js is loaded!");

function loadFooter() {
    console.log("loadFooter function is called!");
    document.getElementById("footer").innerHTML = `

          <div class="row">
            <div id="footer_divs" class="col-lg-4 col-md-12 col-md-12">
                    <span>Hours:</span><br>
                  Mon: 15:00 - 18:00<br>
                  Wed: 15:00 - 18:00<br>
                  Fri: 15:00 - 18:00<br>
                  Sat: 10:30 - 14:00<br>
                  <hr class="visible-xs">
            </div> 
            <div id="footer_divs" class="col-lg-4 col-md-12 col-md-12">
                <span>Address:</span><br>
              Lebowakgomo Zone P<br>
              Polokwane<br>
              0737<br>
              Mphelesedi Cretche<br>
              
              <p>* The map above is a pin pointed location of our classes</p>
              <hr class="visible-xs">
            </div> 
            <div id="footer_divs" class="col-lg-4 col-md-12 col-md-12">
                <p style="font-weight: 600; font-size: large;"><i id="phone" class=""></i> CONTACTS</p>
              <p><i id="email" class="fas fa-envelope"></i> lawrencewillie448@gmail.com</p>
              <p><i id="phone" class="fas fa-phone"></i> 079 336 5832</p>
            </div> 
            <div id="footer_divs" class="col-lg-12 col-md-12 col-md-12">
                <a href="index.html"><span>&copy</span>chapterbychapter 2025</a>
            </div

        </div>
    `;
}