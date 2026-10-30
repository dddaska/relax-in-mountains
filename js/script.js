var slider = document.getElementById('slider');
var btn = document.getElementById('sliderBtn');

btn.addEventListener('click', function () {
  var max = slider.scrollWidth - slider.clientWidth;
  if (slider.scrollLeft >= max - 5) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: 242, behavior: 'smooth' });
  }
});