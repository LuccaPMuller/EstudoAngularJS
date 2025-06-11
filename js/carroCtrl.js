const formulario = document.getElementById('formularioCarro');
const lista = document.getElementById('listaCarros');

let carros = JSON.parse(localStorage.getItem('carros')) || [];

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const placa = document.getElementById('placa').value;
  const cor = document.getElementById('cor').value;

  const carro = { marca, modelo, placa, cor };

  carros.push(carro);
  localStorage.setItem('carros', JSON.stringify(carros));

  atualizarLista();
  form.reset();
});

function atualizarLista() {
  lista.innerHTML = '';
  carros.forEach((carro) => {
    const item = document.createElement('li');
    item.textContent = `Marca: ${carro.marca} | Modelo: ${carro.modelo} | Placa: ${carro.placa} | Cor:${carro.cor}`;
    lista.appendChild(item);
  });
}