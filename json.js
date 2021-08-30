<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
</script>
<script type="text/javascript">
function animation(span) {
span.className = "turn";
setTimeout(function() {
span.className = ""
}, 700);
}

function Countdown() {

setInterval(function() {

var hari = document.getElementById("days");
var jam = document.getElementById("hours");
var menit = document.getElementById("minutes");
var detik = document.getElementById("seconds");

var deadline = new Date("December 24, 2021 23:59:59");
var waktu = new Date();
var distance = deadline - waktu;

var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (days < 10)
{
days = '0' + days;
}
if (hours < 10)
{
hours = '0' + hours;
}
if (minutes < 10)
{
minutes = '0' + minutes;
}
if (seconds < 10)
{
seconds = '0' + seconds;
}

hari.innerHTML = days;
jam.innerHTML = hours;
menit.innerHTML = minutes;
detik.innerHTML = seconds;
//animation
animation(detik);
if (seconds == 0) animation(menit);
if (minutes == 0) animation(jam);
if (hours == 0) animation(hari);

}, 1000);
}

Countdown();

  </script>
   <script>
    function toggleBtn() {
      const Btns = document.querySelector(".btns");
      const add = document.getElementById("add");
      const remove = document.getElementById("remove");
      const btn = document.querySelector(".btns").querySelectorAll("a");
      Btns.classList.toggle("open");
      if (Btns.classList.contains("open")) {
        remove.style.display = "block";
        add.style.display = "none";
        btn.forEach((e, i) => {
          setTimeout(() => {
            bottom = 40 * i;
            e.style.bottom = bottom + "px";
            console.log(e);
          }, 100 * i);
        });
      } else {
        add.style.display = "block";
        remove.style.display = "none";
        btn.forEach((e, i) => {
          e.style.bottom = "0px";
        });
      }
    }
  </script>
  <script>
/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
</script>
