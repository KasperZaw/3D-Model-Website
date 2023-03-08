
const slider = document.getElementById('model-slider');
const carModel_1 = document.getElementById('car-model-1');
const carModel_2 = document.getElementById('car-model-2');
const carModel_4 = document.getElementById('car-model-4')
slider.addEventListener('input', () => {
  if (slider.value === '1') {
    carModel_1.style.display = 'block';
    carModel_2.style.display = 'none';
    carModel_4.style.display = 'none';
  } else if (slider.value === '2') {
    carModel_1.style.display = 'none';
    carModel_2.style.display = 'block';
    carModel_4.style.display = 'none';
  } else if(slider.value === '3') {
    carModel_2.style.display ='none';
    carModel_4.style.display = 'block';
  }
});