//Mobile menu animation
const icon = document.getElementById('menu-icon');
let toggled = false;

icon.addEventListener('click', () => {
  toggled = !toggled;

  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  if (toggled) {
    // Animate to X icon
    line1.setAttribute('x1', '4.12132');
    line1.setAttribute('y1', '2');
    line1.setAttribute('x2', '12.6066');
    line1.setAttribute('y2', '10.4853');

    line2.setAttribute('x1', '4.39337');
    line2.setAttribute('y1', '20.9852');
    line2.setAttribute('x2', '23.4853');
    line2.setAttribute('y2', '1.89336');

    line3.setAttribute('x1', '15.1213');
    line3.setAttribute('y1', '13');
    line3.setAttribute('x2', '23.6066');
    line3.setAttribute('y2', '21.4853');
  } else {
    // Animate back to hamburger
    line1.setAttribute('x1', '1.5');
    line1.setAttribute('y1', '2');
    line1.setAttribute('x2', '13.5');
    line1.setAttribute('y2', '2');

    line2.setAttribute('x1', '1.5');
    line2.setAttribute('y1', '12');
    line2.setAttribute('x2', '28.5');
    line2.setAttribute('y2', '12');

    line3.setAttribute('x1', '16.5');
    line3.setAttribute('y1', '22');
    line3.setAttribute('x2', '28.5');
    line3.setAttribute('y2', '22');
  }
});
