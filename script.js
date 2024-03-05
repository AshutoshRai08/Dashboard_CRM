
const notifyIcon=document.querySelector('.fa-bell')
// const client=document.querySelector('.client')
const page=document.querySelector('.page-content')


const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    region:"India",
    birthday:"08-06-1999"
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    region:'California',
    birthday:"20-12-1999"
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    region:"Malaysia",
    birthday:"04-11-1999"
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    region:"Dubai",
    birthday:"01-10-1999"
  };
  
  // const accounts = [account1, account2, account3, account4];



  //Event listeners
  document.addEventListener('DOMContentLoaded', function () {
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const clientBtn = document.getElementById('clientBtn');
    const activityBtn = document.getElementById('activityBtn');
    const salesBtn = document.getElementById('salesBtn');
    const content = document.getElementById('content');
    
  
    // Initial page load
    loadPage('home');
  
    // Event listeners for navigation buttons
    homeBtn.addEventListener('click', function () {
      setActiveButton('home');
      loadPage('home');
    });
    clientBtn.addEventListener('click', function () {
      setActiveButton('client');
      loadPage('client');
    });
  
    aboutBtn.addEventListener('click', function () {
      setActiveButton('about');
      loadPage('about');
    });
    activityBtn.addEventListener('click', function () {
        setActiveButton('activityReport');
      loadPage('activity');
    });
    salesBtn.addEventListener('click', function () {
        setActiveButton('sales');
      loadPage('sales');
    });
  
    // Function to set the active button
    function setActiveButton(page) {
      homeBtn.classList.remove('active');
      aboutBtn.classList.remove('active');
  
      if (page === 'home') {
        homeBtn.classList.add('active');
      } else if (page === 'about') {
        aboutBtn.classList.add('active');
      }
    }
  
    // Function to load content based on the selected page
    function loadPage(page) {
      fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
          content.innerHTML = html;
          loadScript(`scripts/${page}Script.js`);
        })
        .catch(error => {
          console.error('Error loading page:', error);
        });
    }
  });

notifyIcon.addEventListener('click',e=>{
    alert('Try Message Icon or Action Tab In Client Submenu')
})
// client.addEventListener('click',e=>{
//     page.style.opacity=100;
// })
// document.addEventListener('DOMContentLoaded', function () {
//   // Assuming you are loading HTML dynamically and injecting it into a container
//   fetch('pages/home.html')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('content').innerHTML = html;
//       loadScript('scripts/homeScript.js');
//     });
// });

function loadScript(scriptSrc) {
  const script = document.createElement('script');
  script.src = scriptSrc;
  document.body.appendChild(script);
}

