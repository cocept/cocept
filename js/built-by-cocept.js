(function(){
  // create container
  var container = document.createElement("div");
  container.setAttribute("id", "builtByCocept");

  // fill container
  var contents = "\
  <div class='wrapper'>\
    Built By \
    <a href='https://www.cocept.io' target='_blank'>\
        <img src='https://www.cocept.io/favicon.ico'> Cocept\
    </a>\
  </div>\
  ";
  container.innerHTML = contents;

  // attach css
  var css = '\
  #builtByCocept { \
    background-color: #e3e3e3;\
    border-bottom: 5px solid #c0c0c0;\
    \
    position: absolute;\
    bottom: 0px;\
    left: 0px;\
    right: 0px;\
    height: 37px;\
    \
    font-size: 16px;\
    padding: 5px 0px;\
    text-align: center;\
  }\
  \
  #builtByCocept .wrapper {\
    transition: transform 0.5s;\
  }\
  \
  #builtByCocept:hover .wrapper {\
    transform: scale(1.1) rotate(1deg);\
  }\
  \
  #builtByCocept img {\
    max-height: 20px;\
    vertical-align: text-top;\
  }\
  \
  #builtByCocept a {\
    text-decoration: none;\
  }';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  // attach all to body
  window.onload = function () { 
    var body = document.body || document.getElementsByTagName('body')[0];
    body.style.position = "relative";
    body.appendChild(container);
  }
})();
