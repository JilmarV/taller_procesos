let modeloActual = 'cascada';

function cambiarModelo() {
  const imagen = document.getElementById('imagen-modelo');
  const subtitulo = document.getElementById('subtitulo-modelo');
  const boton = document.querySelector('.switch-btn');
  const cascada = document.getElementById('conclusion-cascada');
  const iterativo = document.getElementById('conclusion-iterativo');

  imagen.style.opacity = 0;

  setTimeout(() => {
    if (modeloActual === 'cascada') {
      imagen.src = 'assets/Untitled Project 1.png';
      imagen.alt = 'Diagrama de Gantt - Modelo Iterativo';
      subtitulo.textContent = 'Modelo iterativo';
      boton.textContent = 'Cambiar a modelo en cascada';
      cascada.classList.remove('active');
      iterativo.classList.add('active');
      modeloActual = 'iterativo';
    } else {
      imagen.src = '  assets/diagrama_cascada.png';
      imagen.alt = 'Diagrama de Gantt - Modelo en cascada';
      subtitulo.textContent = 'Modelo en cascada';
      boton.textContent = 'Cambiar a modelo iterativo';
      cascada.classList.add('active');
      iterativo.classList.remove('active');
      modeloActual = 'cascada';
    }
    imagen.style.opacity = 1;
  }, 300);
}
