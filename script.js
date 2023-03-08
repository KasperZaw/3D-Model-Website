
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

window.addEventListener('load', function() {
    var progressBars = document.querySelectorAll('progress');
    progressBars.forEach(function(progress) {
      var initialValue = progress.value;
      progress.value = 0;
      animateProgressBar(progress, initialValue, 2000); // 2000ms = 2s animation duration
    });
  });
  
  function animateProgressBar(progress, initialValue, duration) {
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var currentValue = progress.value;
  
    function animate() {
      var currentTime = new Date().getTime();
      var progressValue = ((currentTime - startTime) / duration) * (initialValue - currentValue) + currentValue;
      if (progressValue >= initialValue) {
        progress.value = initialValue;
      } else {
        progress.value = progressValue;
        requestAnimationFrame(animate);
      }
    }
  
    animate();
  }

  const carModels = [
    { name: "lamborghini terzo", src: "./model1/scene.gltf", hp: 770, speed: 350, accel: 3.6, torque: 850 },
    { name: "Dodge Charger Daytona", src: "./model2/scene.gltf", hp: 425 , speed: 216, accel: 5.4, torque: 664 },
    { name: "chevrolet corvette c8", src: "./model4/scene.gltf", hp: 502, speed: 341, accel: 3.1, torque: 637 }
  ];
  
  const carNameSpan = document.querySelector("span");
  const hpBar = document.querySelector("#hp-bar");
  const speedBar = document.querySelector("#speed-bar");
  const accelBar = document.querySelector("#acceleration-bar");
  const torqueBar = document.querySelector("#torque-bar");
  
  const slider2 = document.querySelector(".changer");
  
  slider2.addEventListener("input", () => {
    const car = carModels[slider2.value - 1];
    carNameSpan.textContent = car.name;
    hpBar.value = car.hp;
    speedBar.value = car.speed;
    accelBar.value = car.accel;
    torqueBar.value = car.torque;
  
    // Change the 3D model of the car
    const carModel = document.querySelector(".car");
    carModel.src = car.src;
  });