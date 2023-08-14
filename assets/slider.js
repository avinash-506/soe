function positiveBtn(a) {
  var sliderElement = document.getElementById("my-slider");
  var slider = UIkit.slider(sliderElement);
  var activeIndex = slider.index;

  if (activeIndex == 0) {
    document.getElementById("icon2").hidden = false;
    console.log(activeIndex);
  } else if (activeIndex == 1) {
    document.getElementById("icon3").hidden = false;
    console.log(activeIndex);
  } else if (activeIndex == 2) {
    document.getElementById("icon4").hidden = false;
    console.log(activeIndex);
  } else if (activeIndex == 3) {
    document.getElementById("icon5").hidden = false;
    console.log(activeIndex);
  }
}

function negativeBtn(b) {
  var sliderElement = document.getElementById("my-slider");
  var slider = UIkit.slider(sliderElement);
  var activeIndex = slider.index;

  if (activeIndex == 4) {
    document.getElementById("icon5").hidden = true;
    console.log(activeIndex);
  } else if (activeIndex == 3) {
    document.getElementById("icon4").hidden = true;
    console.log(activeIndex);
  } else if (activeIndex == 2) {
    document.getElementById("icon3").hidden = true;
    console.log(activeIndex);
  } else if (activeIndex == 1) {
    document.getElementById("icon2").hidden = true;
    console.log(activeIndex);
  }
}

document.getElementById("icon2").hidden = true;
document.getElementById("icon3").hidden = true;
document.getElementById("icon4").hidden = true;
document.getElementById("icon5").hidden = true;
