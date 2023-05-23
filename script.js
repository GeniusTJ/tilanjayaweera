// ----------------animationContainer----------------
const animationContainer = document.querySelector('.animation-container');
const animationImgs = document.querySelectorAll('.animation-container img');

let isPaused=false;

animationContainer.addEventListener('click',function(){
    if (isPaused){
        animationImgs.forEach(img=>{ img.style.animationPlayState='running';});
      
    }else{
        animationImgs.forEach(img=>{
            img.style.animationPlayState = 'paused';
        });
    }
    isPaused=!isPaused;
});
// ----------------About----------------
const aboutLink = document.getElementById('about-link');
const educationLink = document.getElementById('education-link');
const techstackLink = document.getElementById('techstack-link');
const contactLink = document.getElementById('contact-link');
const topguiderLink = document.getElementById('topguiders-link');
const aboutSection = document.getElementById('about-section');
const educationSection = document.getElementById('education-section');
const techstackSection = document.getElementById('techstack-section');
const contactkSection = document.getElementById('contact-section');
const topguidersSection = document.getElementById('topguiders-section');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection(aboutSection);
});

educationLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection(educationSection);
});

techstackLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection(techstackSection);
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection(contactkSection);
});

topguiderLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection(topguidersSection);
});
function scrollToSection(section) {
  const sectionPosition = section.offsetTop;
  const scrollOptions = {
    top: sectionPosition,
    behavior: 'smooth'
  };
  
  window.scrollTo(scrollOptions);
}
document.querySelector('.dropdown-btn').addEventListener('click', function() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});



