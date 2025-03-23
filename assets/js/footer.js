console.log("footer.js is loaded!");

function loadFooter() {
    console.log("loadFooter function is called!");
    document.getElementById("footer").innerHTML = `

            
        
          <div class="row">
            <div id="footer_divs" class="col-lg-4 col-md-12 col-md-12">
                <div class="more_sites">
                    <h1>more educational webs</h1>   
                </div>
            </div> 
            <div id="footer_divs" class="col-lg-4 col-md-12 col-md-12">
                <div class="more_sites">
                    <h1>location</h1>   
                </div>
            </div> 
            <div id="footer_divs" class="col-lg-4 col-md-12 col-md-12">
                <div class="more_sites">
                    <h1>Social Media</h1>   
                </div>
            </div> 
            <div id="footer_divs" class="col-lg-12 col-md-12 col-md-12">
                <a href="index.html"><span>&copy</span>chapterbychapter 2025</a>
            </div

        </div>
    `;
}