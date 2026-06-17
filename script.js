let sliders = document.querySelectorAll('.slider');

sliders.forEach(function (slider) {
  let sliderBefore = slider.querySelector('.slider__before');
  let sliderSeparator = slider.querySelector('.slider__separator');
  let isDragging = false;
  let currentValue = 50;

  function updateSliderPosition(value) {
    currentValue = Math.min(100, Math.max(0, value));
    sliderBefore.style.width = `${currentValue}%`;
    sliderSeparator.style.left = `${currentValue}%`;
  }

  sliderSeparator.addEventListener('mousedown', function () {
    isDragging = true;
  });

  sliderSeparator.addEventListener('touchstart', function () {
    isDragging = true;
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });

  document.addEventListener('touchend', function () {
    isDragging = false;
  });

  document.addEventListener('mousemove', function (e) {
    processMove(e.clientX);
  });

  document.addEventListener('touchmove', function (e) {
    processMove(e.touches[0].clientX);
  });

  function processMove(x) {
    if (isDragging) {
      let sliderRect = slider.getBoundingClientRect();
      let newValue = (x - sliderRect.left) / sliderRect.width * 100;
      updateSliderPosition(newValue);
    }
  }
});



