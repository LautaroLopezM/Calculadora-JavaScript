//Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor) {
    document.getElementById('pantalla').value += valor;

}
//borra toda la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}
//hace los calculos matematicos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}
//borrar ultima el valor de la pantalla
function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);

}