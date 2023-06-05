//Crear clases:

class Persona {
  constructor(flia, email, cpersonas, meses) {
    this.flia = flia;
    this.email = email;
    this.cpersonas = cpersonas;
    this.meses = meses;
  }

  calcularPrecio() {
    let resultado = (this.cpersonas * (this.meses * 5500));
    return resultado.toFixed(2);
  }
}

//Creamos un array de objetos.

const personas = [];

// Crear las variables necesarias:

const idFormulario = document.getElementById('formulario');

idFormulario.addEventListener('submit', (e) => {
  e.preventDefault();
  //Evitamos que se recargue la página.

  const flia = document.getElementById('flia').value;
  const email = document.getElementById('email').value;
  const cpersonas = document.getElementById('cpersonas').value;
  const meses = document.getElementById('meses').value;
  //Creamos el objeto persona
  const persona = new Persona(flia, email, cpersonas, meses);
  //Agregamos los datos en el Array:
  personas.push(persona);

  //Guardamos los datos en el Storage:
  localStorage.setItem('Persona', JSON.stringify(personas));
  console.log('Persona', JSON.stringify(personas));//---------------------------------------
  //Limpiamos el formulario
  idFormulario.reset();

  mostrarInfo(persona);
});

//Crearmos la función Mostrar Info:

const resultado = document.getElementById('infoUsuarios');

const mostrarInfo = (persona) => {
  let aux = '';
  aux += `<p class="resultado">El precio para la familia ${persona.flia} es el siguiente: </p>
          <p class="resultado"> $: ${persona.calcularPrecio()} </p>`;
  resultado.innerHTML = aux;
};

const botonAdmin = document.getElementById('admin');
const datosAdmin = document.getElementById('datosAdmin');

botonAdmin.addEventListener('click', () => {
  const personas = JSON.parse(localStorage.getItem('Persona'));
  let aux = '';
  personas.forEach((persona) => {
    aux += `<p class="resultado"> Flia ${persona.flia} </p> 
              <p class="resultado"> Correo Electrónico: ${persona.email} </p> <hr>`;
  });
  datosAdmin.innerHTML = aux;

  console.log('flia', 'calcularPrecio');
});
