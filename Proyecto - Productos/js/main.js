let btnEliminar = document.getElementById('btnEliminar');
let productList = document.getElementById('product-list');
let btnAgregar = document.getElementById('btnAgregar');
let rbStock = document.getElementsByName('stock');
rbStock.forEach(element => {
    if(element.checked == true){
        console.log(element.value);
    }
});
function limpiar(){
    productList.innerHTML = null;
}
function agregar(){
    let txtCodigo = document.getElementById('txtcodigo');
    let txtProducto = document.getElementById('txtcodigo');
    console.log(productList.childElementCount);
    if(productList.childElementCount === 1){
        productList.innerHTML +=`<tr>
            <td>Codigo</td>
            <td>Primero</td>
            <td>20</td>
            <td>100</td>
            <td>100</td>
            <td>1'0</td>
            <td><a href="#">eliminiar</></td>
            </tr>`;
        }
        else{
            productList.innerHTML +=`<tr>
            <td>Otros nodos</td>
            <td>Producto</td>
            <td>20</td>
            <td>100</td>
            <td>100</td>
            <td>1'0</td>
            <td><a href="#">eliminiar</></td>
        </tr>`;
    }
}
btnCancelar;
btnEliminar.addEventListener('click', limpiar);
btnAgregar.addEventListener('click', agregar);