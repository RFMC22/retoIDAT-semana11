//cuentas
let cuentas = [
  {nombre: 'Mali', saldo: 200, password: '1234', dni: 44788834},
  {nombre: 'Gera', saldo: 150, password: '5678', dni: 10247439},
  {nombre: 'Sabi', saldo: 60, password: '9102', dni: 98005362}
]

//variables
const main                  = document.querySelector('main');

const vistaPrincipal        = document.querySelector('.principal');
const entrada               = document.querySelector('.principal-mensaje .principal-img');

const vistaDni              = document.querySelector('.dni');
const formDni               = document.querySelector('.dni-content .form form');
const mensajeError          = document.querySelector('.mensaje-error-dni');

const vistaTipoOperacion    = document.querySelector('.tipo-operacion');
const botonRetiro           = document.querySelector('.tipo-retiros a:nth-child(1)');
const botonVer              = document.querySelector('.tipo-retiros a:nth-child(2)');
const ingresarMonto         = document.querySelector('.tipo-retiros a:nth-child(3)');

const vistaSeleccionaCuenta = document.querySelector('.selecciona-cuenta');
const botonSeleccionaCuenta = document.querySelector('.selecciona-tipo-cuenta .boton-tipo-cuenta:nth-child(1)');
const volverCuenta          = document.querySelectorAll('.black a')[0];

const vistaSeleccionaRetiro = document.querySelector('.selecciona-retiro');
const botonSeleccionaRetiro = document.querySelector('.selecciona-retiro .boton-retiro-cuenta:nth-child(1)');

const vistaSeleccionMonto   = document.querySelector('.seleccion-monto');
const formSeleccionMonto    = document.querySelector('.ingresar-monto');
const inputMonto            = document.querySelector('#monto');
const mMonto                = document.querySelector('.ingresa .monto')
const botonesMonto          = document.querySelectorAll('.ingresar-monto .cantidad .boton');
const botonVerSaldo         = document.querySelector('.saldo-disponible button');
const mensajeErrorSaldo     = document.querySelector('.mensaje-error-saldo');
const saldoDisponible       = document.querySelector('#saldo');
const volverMonto           = document.querySelectorAll('.black a')[1];
const botonMontoVerSaldo    = document.querySelector('.button-s-saldo a');

const vistaAgregarMonto     = document.querySelector('.agregar-monto');
const formAgregarMonto      = document.querySelector('.agregar-ingresar-monto');
const inputAgregar          = document.querySelector('.agregar-ingresar-monto #montoA');
const aMonto                = document.querySelector('.ingresa .monto')
const botonesAgregar        = document.querySelectorAll('.agregar-ingresar-monto .cantidad .boton');
const botonVerAgregar       = document.querySelector('.agregar-monto .saldo-disponible button');
const mensajeErrorAgregar   = document.querySelector('.agregar-ingresar-monto .mensaje-error-saldo');
const saldoAgregar          = document.querySelector('#saldoA');
const volverTipo           = document.querySelectorAll('.black a')[2];

const vistaDetalleRetiro    = document.querySelector('.detalle-retiro');
const detalleMonto          = document.querySelector('.monto span');

const vistaVerSaldoActual   = document.querySelector('.ver-saldo-actual');
const saldoDisponibleActual = document.querySelector('#saldoM');
const botonVerSaldos        = document.querySelector('.saldo-disponibles button');

const clave                 = document.querySelector('.clave');
const formClave             = document.querySelector('.claveF')
const pasarPass             = document.querySelector('.final-pass');
const pass                  = document.querySelector('#clave')

const salirDNI              = document.querySelector('.one');
const salirTipo             = document.querySelector('.two');
const salirCuenta           = document.querySelector('.three');
const salirVerSaldo         = document.querySelector('.four');

let cuentaSeleccionada      = {}

//eventos
entrada.addEventListener('click', () => {
  vistaPrincipal.classList.add('ocultar');
  vistaDni.classList.remove('ocultar')
});

formDni.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputDNI  = document.querySelector('#dni');
  cuentaSeleccionada = cuentas.find(cuenta => cuenta.dni === Number(inputDNI.value));

  if (cuentaSeleccionada) {
    vistaTipoOperacion.classList.remove('ocultar');
    vistaDni.classList.add('ocultar');
    mensajeError.classList.add('ocultar');
  }else{
    mensajeError.classList.remove('ocultar');
  }
});

botonRetiro.addEventListener('click', (e) => {
  e.preventDefault()
  vistaTipoOperacion.classList.add('ocultar');
  vistaSeleccionaCuenta.classList.remove('ocultar')
});

botonSeleccionaCuenta.addEventListener('click', (e) => {
  e.preventDefault();
  vistaSeleccionaCuenta.classList.add('ocultar');
  vistaSeleccionaRetiro.classList.remove('ocultar');
});

botonSeleccionaRetiro.addEventListener('click', (e) => {
  e.preventDefault();
  vistaSeleccionaRetiro.classList.add('ocultar');
  vistaSeleccionMonto.classList.remove('ocultar');
  main.classList.add('blanco')
  saldoDisponible.value = cuentaSeleccionada.saldo;
});

volverCuenta.addEventListener('click', (e) => {
  e.preventDefault();
  vistaSeleccionaCuenta.classList.remove('ocultar');
  vistaSeleccionaRetiro.classList.add('ocultar');
});

volverMonto.addEventListener('click', (e) => {
  e.preventDefault();
  vistaSeleccionMonto.classList.add('ocultar')
  vistaSeleccionaRetiro.classList.remove('ocultar')
  main.classList.remove('blanco')
})
volverTipo.addEventListener('click', (e) => {
  e.preventDefault();
  vistaAgregarMonto.classList.add('ocultar')
  vistaTipoOperacion.classList.remove('ocultar')
  main.classList.remove('blanco')
})

formSeleccionMonto.addEventListener('submit', (e) => {
  e.preventDefault();
  if (Number(inputMonto.value) <= cuentaSeleccionada.saldo) {
    cuentaSeleccionada.saldo = cuentaSeleccionada.saldo - Number(inputMonto.value);
    saldoDisponible.value = cuentaSeleccionada.saldo;
    detalleMonto.textContent = inputMonto.value;
    vistaDetalleRetiro.classList.remove('ocultar');
    vistaSeleccionMonto.classList.add('ocultar')
    mensajeErrorSaldo.classList.add('ocultar');
  }else{
    mensajeErrorSaldo.classList.remove('ocultar');
    mMonto.style.marginBottom = '0';
  }
})

formAgregarMonto.addEventListener('submit', (e) => {
  e.preventDefault();
  if (Number(inputAgregar.value)) {
    cuentaSeleccionada.saldo = cuentaSeleccionada.saldo + Number(inputAgregar.value);
    saldoAgregar.value = cuentaSeleccionada.saldo;
    detalleMonto.textContent = inputAgregar.value;
    vistaDetalleRetiro.classList.remove('ocultar');
    vistaAgregarMonto.classList.add('ocultar')
    mensajeErrorAgregar.classList.add('ocultar');
  }else{
    mensajeErrorAgregar.classList.remove('ocultar');
    aMonto.style.marginBottom = '0';
  }
})

botonesMonto.forEach(boton => {
  boton.addEventListener('click', () => {
    inputMonto.value = boton.dataset.valor;
  })
})
botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    inputAgregar.value = boton.dataset.valor;
  })
})

botonVerSaldo.addEventListener('click', () => {
  const textoSaldo = document.querySelector('.texto-ver-saldo');
  saldoDisponible.type = saldoDisponible.type === 'text' ? 'password' : 'text';
  saldoDisponibleActual.type = saldoDisponibleActual.type === 'text' ? 'password' : 'text';
  textoSaldo.textContent = (saldoDisponible.type === 'text') ? 'Ocultar saldo' : 'Ver saldo';
});

salirDNI.addEventListener('click', (e) => {
  e.preventDefault();
  vistaDni.classList.add('ocultar');
  vistaPrincipal.classList.remove('ocultar')
})
salirTipo.addEventListener('click', (e) =>{
  e.preventDefault();
  vistaTipoOperacion.classList.add('ocultar');
  vistaPrincipal.classList.remove('ocultar')
})
salirCuenta.addEventListener('click', (e) => {
  e.preventDefault()
  vistaTipoOperacion.classList.add('ocultar')
  vistaPrincipal.classList.remove('ocultar')
})
salirVerSaldo.addEventListener('click', (e) => {
  e.preventDefault();
  vistaVerSaldoActual.classList.add('ocultar')
  vistaPrincipal.classList.remove('ocultar')
  main.classList.remove('blanco')
})

botonMontoVerSaldo.addEventListener('click', (e) => {
  e.preventDefault();
  vistaVerSaldoActual.classList.remove('ocultar');
  vistaDetalleRetiro.classList.add('ocultar');
  saldoDisponibleActual.value = cuentaSeleccionada.saldo;
})
botonVerSaldos.addEventListener('click', () => {
  const textoSaldo = document.querySelector('.texto-ver-saldo');
  saldoDisponibleActual.type = saldoDisponibleActual.type === 'text' ? 'password' : 'text';
  textoSaldo.textContent = (saldoDisponible.type === 'text') ? 'Ocultar saldo' : 'Ver saldo';
});
botonVerAgregar.addEventListener('click', () => {
  const textoSaldo = document.querySelector('.agregar-monto .texto-ver-saldo');
  saldoAgregar.type = saldoAgregar.type === 'text' ? 'password' : 'text';
  textoSaldo.textContent = (saldoDisponible.type === 'text') ? 'Ocultar saldo' : 'Ver saldo';
});
botonVer.addEventListener('click', (e) => {
  e.preventDefault();
  vistaTipoOperacion.classList.add('ocultar');
  vistaVerSaldoActual.classList.remove('ocultar');
  vistaTipoOperacion.classList.add('ocultar');
  saldoDisponibleActual.value = cuentaSeleccionada.saldo;
  main.classList.add('blanco');
})
ingresarMonto.addEventListener('click', (e) => {
  e.preventDefault();
  vistaAgregarMonto.classList.remove('ocultar');
  saldoAgregar.value = cuentaSeleccionada.saldo;
  vistaTipoOperacion.classList.add('ocultar');
  main.classList.add('blanco')
})
pasarPass.addEventListener('click', () =>{
  clave.classList.remove('ocultar');
  vistaVerSaldoActual.classList.add('ocultar');
  main.classList.remove('blanco')
})
formClave.addEventListener('submit', (e) =>{
  e.preventDefault();
  if (pass.value === cuentaSeleccionada.password) {
    vistaPrincipal.classList.remove('ocultar');
    clave.classList.add('ocultar')
  }
})