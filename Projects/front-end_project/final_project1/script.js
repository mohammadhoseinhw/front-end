var image1 = document.querySelector("#img1");
var image2 = document.querySelector("#img2");
var image3 = document.querySelector("#img3");
var image4 = document.querySelector("#img4");
var image5 = document.querySelector("#img5");
var image6 = document.querySelector("#img6");
//first image event
image1.addEventListener("mouseover", function () {
  image1.style.width = "410px";
  image1.style.height = "310px";
});

image1.addEventListener("mouseout", function () {
  image1.style.width = "400px";
  image1.style.height = "300px";
});
//second image event

image2.addEventListener("mouseover", function () {
  image2.style.width = "410px";
  image2.style.height = "310px";
});
image2.addEventListener("mouseout", function () {
  image2.style.width = "400px";
  image2.style.height = "300px";
});
//third image event
image3.addEventListener("mouseover", function () {
  image3.style.width = "410px";
  image3.style.height = "310px";
});
image3.addEventListener("mouseout", function () {
  image3.style.width = "400px";
  image3.style.height = "300px";
});
//fourth image event
image4.addEventListener("mouseover", function () {
  image4.style.width = "410px";
  image4.style.height = "310px";
});
image4.addEventListener("mouseout", function () {
  image4.style.width = "400px";
  image4.style.height = "300px";
});
//fifth image event
image5.addEventListener("mouseover", function () {
  image5.style.width = "410px";
  image5.style.height = "310px";
});
image5.addEventListener("mouseout", function () {
  image5.style.width = "400px";
  image5.style.height = "300px";
});
//sixth image event
image6.addEventListener("mouseover", function () {
  image6.style.width = "410px";
  image6.style.height = "310px";
});
image6.addEventListener("mouseout", function () {
  image6.style.width = "400px";
  image6.style.height = "300px";
});

var btn = document.querySelector("#btn1");
btn.addEventListener("click", function () {
  alert("Your information has succesfully sent!!");
});

var leg = document.querySelector(".legend1");

leg.addEventListener("mouseover", function () {
  leg.style.color = "#546680";
});

leg.addEventListener("mouseout", function () {
  leg.style.color = "black";
});
