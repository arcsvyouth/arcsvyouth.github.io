if (!window.XMLHttpRequest && 'ActiveXObject' in window) {
    window.XMLHttpRequest= function() {
        return new ActiveXObject('MSXML2.XMLHttp');
    };
}
function fillBody() {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/body-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.getElementById('body').innerHTML= this.responseText;
  };
  xhr.send();
}
function fillHead(titleName) {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://arcsvyouth.github.io/boilerplates/head-boilerplate.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.getElementById('head').innerHTML= this.responseText;
      document.getElementsByTagName("title")[0].textContent = titleName;
  };
  xhr.send();
}
fillBody();
// fillHead();
