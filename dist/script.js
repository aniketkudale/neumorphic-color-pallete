var copyToast = document.getElementsByClassName("toast-copied")[0];

var americanHandler = document.getElementsByClassName("a_palette_color");
var aussieHandler = document.getElementsByClassName("au_palette_color");
var britishHandler = document.getElementsByClassName("br_palette_color");
var canadianHandler = document.getElementsByClassName("ca_palette_color");
var chineseHandler = document.getElementsByClassName("chi_palette_color");
var dutchHandler = document.getElementsByClassName("du_palette_color");
var frenchHandler = document.getElementsByClassName("fr_palette_color");
var germanHandler = document.getElementsByClassName("ger_palette_color");
var indianHandler = document.getElementsByClassName("in_palette_color");
var russianHandler = document.getElementsByClassName("ru_palette_color");
var spanishHandler = document.getElementsByClassName("es_palette_color");
var swedishHandler = document.getElementsByClassName("swe_palette_color");
var turkishHandler = document.getElementsByClassName("tur_palette_color");

for (let i = 0; i < americanHandler.length; i++) {
  americanHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  aussieHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  britishHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  canadianHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  chineseHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  dutchHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  frenchHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  germanHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  indianHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  russianHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  spanishHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  swedishHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
  turkishHandler[i].addEventListener("click", function(e) {
    var rgbValues = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");
    var hexValue = rgb2hex(rgbValues);
    copyToast.classList.toggle("show");
    copyToast.innerText = "Copied!";
    copyToast.innerText = hexValue + " " + copyToast.innerText;
    copyToClipboard(hexValue);
    setTimeout(function() {
      copyToast.classList.toggle("show");
    }, 1000);
    document.getElementById("copy").play();
  });
}

function rgb2hex(rgb) {
  if (rgb.search("rgb") == -1) {
    return rgb;
  } else {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}