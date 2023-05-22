//Clase Autos

class Autos {
    constructor(marca, modelo, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    }
  }
  
  const autoFiat = new Autos('FIAT', 'MOBI', 4500000);
  const autoCitroen = new Autos('CITROEN', 'C4 LOUNGE', 6500000);
  const autoToyota = new Autos('TOYOTA', 'YARIS', 5000000); 


//Array de Autos
  
  const arrayAutos = [];
  
  arrayAutos.push(autoFiat);
  arrayAutos.push(autoCitroen);
  arrayAutos.push(autoToyota);
  
  console.log(arrayAutos); 


  //Array del Catalogo 

  const arrayCatalogo = [
    {Marca:'CITROEN' , Modelo: 'C4 LOUNGE' , Precio:6500000},
    {Marca:'TOYOTA' , Modelo: 'YARIS' , Precio:5000000},
    {Marca:'FIAT' , Modelo: 'MOBI' , Precio:4500000},
  ];
 

  //Función con el menú de opciones:
  
  function menu() {
    alert('CONCESIONARIA GRAGERA');
    let opcion = parseInt(
      prompt(
        'Que desea: \n 1) Comprar un automovil \n 2) Vender un automovil \n 3) Averiguar cual esta a su alcance \n 4) Salir'
      )
    );
    return opcion;
  }


  //Función para comprar un auto:
  
   function comprarAuto() { 
    alert('Estos son los modelos que disponemos en el momento: ')
    let compra = '';
    for (let i = 0; i < arrayCatalogo.length; i++) {
    const auto = arrayCatalogo[i];
    compra += `Marca: ${auto.Marca}, Modelo: ${auto.Modelo}, Precio: ${auto.Precio},\n`;
    }
    alert(compra);
    let marca = prompt('Ingrese la marca del vehiculo a comprar: ');
    console.log(marca.toUpperCase);
    let modelo = arrayAutos.find((modelo) => modelo.marca === marca); 
    let indice = arrayAutos.indexOf(modelo); 
    alert('Gracias por su compra! Disfrute de su fantastico automovil. Lo esperamos pronto!')
    arrayAutos.splice(indice, 1); 
    console.log(arrayAutos);
    }


  //Función para vender un auto
  
  function venderAuto() {
    let marca = prompt('Ingrese la marca de su automovil: ');
    let marcaMayuscula = marca.toUpperCase();
    let modelo = prompt('Ingrese el modelo de su automovil: ');
    let modeloMayuscula = modelo.toUpperCase();
    let precio = parseInt(prompt('Ingrese el precio de su automovil: '));
    let auto = new Autos(marcaMayuscula, modeloMayuscula, precio);
    arrayAutos.push(auto);
    console.log(arrayAutos);
    alert('Gracias por su confianza! su automovil fue agregado a la lista para ventas. \nLo esperamos de nuevo pronto!');
  }
  

  //Función para averiguar cual esta a su alcance:
  
  function averiguarAuto() {
    let dinero = parseInt(prompt('¿De cuanto dinero dispone?'));
    const alcanza = arrayAutos.filter((item) => item.precio <= dinero);
    let alcanzaTexto = JSON.stringify(alcanza)
    alert('Le alcanzan los siguientes automoviles:');
    alert(alcanzaTexto);
    alert('Gracias por su visita! Lo esperamos de nuevo pronto!');
  }


  //Funcion para salir

  function salir() {
    alert('Gracias por entrar a CONCESIONARIA GRAGERA! Lo esperamos de nuevo pronto!');
  }


  //Opciones del menu:
  
  let opcion = menu();
  switch (opcion) {
    case 1:
      comprarAuto();
      break;
    case 2:
      venderAuto();
      break;
    case 3:
      averiguarAuto();
      break;
    case 4:
      salir();
      break;
  }
  