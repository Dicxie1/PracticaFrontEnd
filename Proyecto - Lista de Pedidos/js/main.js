let txtPrecio = document.getElementById('txtPrecio');
let txtCantidad = document.getElementById('txtCantidad');
let btnAgregar = document.getElementById('btnAgregar'); 
let listaProducto = document.getElementById('listaProducto');
let txtCodProduct = document.getElementById('txtCodProduct');
let txtNombreProduct = document.getElementById('txtNombreProduct');

let productos = [
    {
        codigo : 20,
        nombre : 'Lenovo',
        precio : 2400
    },
    {
        codigo : 21,
        nombre : 'Teclado',
        precio : 450
    },
    {
        codigo : 22,
        nombre : 'Mouse',
        precio : 1200
    }
];

localStorage.setItem('productos', JSON.stringify(productos));

function activar(){
    if(txtCantidad.value != "" && txtPrecio.value != ""){
        btnAgregar.removeAttribute('disabled');
    }
    else{
        btnAgregar.setAttribute('disabled', null);
    }
}
txtCantidad.addEventListener('change', function(e){
    activar();
    calcular();
});
txtPrecio.addEventListener('change', function(e){
    activar();
    calcular();
});

function calcular(){
    let txtPrecio = document.getElementById('txtPrecio');
    let txtCantidad = document.getElementById('txtCantidad');
    let txtSubTotal = document.getElementById('txtSubTotal');

    let precio = Number (txtPrecio.value);
    let cantidad = Number (txtCantidad.value);
    
    if(!isNaN(cantidad * precio) && txtPrecio.value != "" && txtCantidad != ""){
        txtSubTotal.value = cantidad * precio;
    }
}
function agregar(){
    listaProducto.innerHTML += `
    <tr>
    <td>${txtCodProduct.value}</td>
    <td>${txtNombreProduct.value}</td>
    <td>${txtCantidad.value}</td>
    <td>${txtPrecio.value}</td>
    <td>${txtSubTotal.value}</td>
    </tr>
    `;
    
    txtPrecio.value = null;
    txtCantidad.value = null;
    txtCodProduct.value = null;
    txtNombreProduct.value = null;
    txtSubTotal.value = null;
}
btnAgregar.addEventListener('click', agregar);
let url = '../data.json';
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();
request.onload = function(){
    console.log(request.response);
}
