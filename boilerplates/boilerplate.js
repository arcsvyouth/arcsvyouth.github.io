// window.location.replace("https://arcsvyouth.github.io/the-end.html");
function init() {
  //fillHead();
  //fillImport();
}

if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
    window.XMLHttpRequest= function() {
        return new ActiveXObject('MSXML2.XMLHttp');
    };
}
function fillNav(activeNumber) {
  var xhr= new XMLHttpRequest();
  document.querySelector("body").style.padding = "70px 0 0 0";
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/nav-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) {
        alert("This page requires Javascript and an Internet connection to load.");
        return; // or whatever error handling you want
      }
      
      document.getElementById('nav').innerHTML+= this.responseText;
      document.querySelector("body").style.padding = "0";

      if (activeNumber >= 0) {
        document.querySelectorAll(".nav>li")[activeNumber].classList.add("active");
      }

  };
  xhr.send();
  
}
function fillHead() {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/head-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.getElementById('head').innerHTML += this.responseText;
  };
  xhr.send();
}

function fillImport() {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/import-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.querySelector('body').innerHTML += this.responseText;
  };
  xhr.send();
}
