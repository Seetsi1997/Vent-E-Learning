// Search Button

document.getElementById('search-bar').addEventListener('keyup', function() {
    let query = this.value.toLowerCase();
    let results = document.getElementById('search-results');
    results.innerHTML = ''; // Clear previous results
    let courses = document.querySelectorAll('.subject'); // Select all course elements
    let hasResults = false; // Flag to check if there are any results
  
    // Hide all courses initially
    courses.forEach(course => {
      course.style.display = 'none';
    });

    courses.forEach(course => {
      if (course.textContent.toLowerCase().includes(query)) {
         let h3Element = document.createElement('h3');
         h3Element.textContent = course.textContent;
         h3Element.classList.add('#search-results'); // Add the class to apply the color
         results.appendChild(h3Element);
         course.style.display = 'block'; // Show matching elements
         hasResults = true; // Set flag to true if there are results
    
    }
    else {
        course.style.display = 'none'; // Show non-matching elements
      }

    });
    
    // Display message if no results are found
    if (!hasResults && query !== '') {
      results.innerHTML = '<p>Sorry, no modules match your search. Try again with a different query.</p>';
    }
  
    // Hide courses when search bar is empty
    if (query === '') {
      courses.forEach(course => {
        course.style.display = 'none';
      });
      results.innerHTML = ''; // Clear results container
    }
  });
  

  //OPEN POPUP
document.getElementById('open-software-engineering').addEventListener('click', function(){
    document.getElementById('software-engineering-overlay').style.display ='block'; 
})
document.getElementById('open-software-development').addEventListener('click', function () {
    document.getElementById('software-development-overlay').style.display = 'block';})
document.getElementById('open-tech-programming').addEventListener('click', function(){
    document.getElementById('tech-programming-overlay').style.display = 'block';
})
document.getElementById('open-db').addEventListener('click', function(){
    document.getElementById('db-overlay').style.display = 'block';
})
 document.getElementById('open-web-development').addEventListener('click', function(){
    document.getElementById('web-development-overlay').style.display = 'block';
})
document.getElementById('open-tech-support').addEventListener('click', function(){
    document.getElementById('tech-support-overlay').style.display = 'block';
 })
 document.getElementById('open-instructor-popup').addEventListener('click', function(){
    document.getElementById('instructor-overlay').style.display = 'block';
 })
//CLOSE POPUP
document.getElementById('close-software-engineering').addEventListener('click', function () {
    document.getElementById('software-engineering-overlay').style.display = 'none';
})
document.getElementById('close-software-development').addEventListener('click', function () {
    document.getElementById('software-development-overlay').style.display = 'none'})
document.getElementById('close-tech-programming').addEventListener('click', function(){
    document.getElementById('tech-programming-overlay').style.display = 'none';
})
document.getElementById('close-db').addEventListener('click', function(){
    document.getElementById('db-overlay').style.display = 'none';
})
document.getElementById('close-web-development').addEventListener('click', function(){
    document.getElementById('web-development-overlay').style.display = 'none';
       })
document.getElementById('close-tech-support').addEventListener('click', function(){
    document.getElementById('tech-support-overlay').style.display = 'none';
 })
 document.getElementById('close-instructor-popup').addEventListener('click', function(){
    document.getElementById('instructor-overlay').style.display = 'none';
 })