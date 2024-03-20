const listaElementos = [];

function agregarElemento(nombre) {
  listaElementos.push(nombre);
  $("#listaElementos").append(`<li>${nombre}</li>`);
}

function eliminarElemento() {
  listaElementos.pop();
  $("#listaElementos li:last-child").remove();
}

function mostrarElementos() {
  for (const elemento of listaElementos) {
    $("#listaElementos").append(`<li>${elemento}</li>`);
  }
}

$("#botonAgregar").click(function() {
  const nombre = $("#nombreElemento").val();
  agregarElemento(nombre);
});

$("#botonEliminar").click(function() {
  eliminarElemento();
});

mostrarElementos();
