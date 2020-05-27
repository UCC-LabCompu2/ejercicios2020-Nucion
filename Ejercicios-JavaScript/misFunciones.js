/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades entre metros, pulgadas, pies y yardas
 * @method Cambio
 * @param {string} id -El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} value -El valor de los inputs de metros, pulgadas, pies y yardas
 * @return
 */
function Cambio(id, value) {
    var metro, pie, yarda, pulgada;
    if(value.includes(",")){
        value=value.replace(",",".");
    }
    if(isNaN(value)){
        alert("Se ingreso un valor invalido");
        metro= "";
        pulgada= "";
        pie= "";
        yarda="";
    }else if(id=="metro"){
        pulgada= 39.3701*value;
        pie= 3.28084*value;
        yarda=1.09361*value;
        metro=value;
    }else if(id=="pulgada") {
        metro = 0.0254*value;
        pie = 0.0833333*value;
        yarda = 0.0277778*value;
        pulgada=value;
    }else if(id=="pie"){
        metro= 0.3084*value;
        pulgada= 12*value;
        yarda=0.3333333*value;
        pie=value;
    }else if(id=="yarda"){
        metro= 0.9144*value;
        pulgada= 36*value;
        pie=3*value;
        yarda=value;
    }
    document.Unidades.unid_metro.value= Math.round(metro*100)/100;
    document.Unidades.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.Unidades.unid_pie.value=Math.round(pie*100)/100;
    document.Unidades.unid_yarda.value=Math.round(yarda*100)/100;
}
function GaR(id) {
    var rad, grad;
    if(id=="grados"){
        grad = document.getElementById( elementid="grados" ).value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad=document.getElementById(elementid="radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById(elementid="grados").value=grad;
    document.getElementById(elementid="radianes").value=rad;
}
function mo(vmo){
    if(vmo=="val_mostrar"){
        document.getElementById(elementid="divmo").style.display= 'block';
    }else if(vmo=="val_ocultar"){
        document.getElementById(elementid="divmo").style.display= 'none';
    }

}
function sumar() {
    var n1,n2;
    n1=Number( document.getElementsByName(elementName= "sum_num1")[0].value);
    n2= document.getElementsByName(elementName= "sum_num2")[0].value;
    n2= document.getElementsByName(elementName= "sum_total")[0].innerHTML =n1+ Number(n2);
}
function restar() {
    var n1,n2;
    n1=Number( document.getElementsByName(elementName= "res_num1")[0].value);
    n2= document.getElementsByName(elementName= "res_num2")[0].value;
    n2= document.getElementsByName(elementName= "res_total")[0].innerHTML =n1- Number(n2);
}
function multiplicar() {
    var n1,n2;
    n1=Number( document.getElementsByName(elementName= "mul_num1")[0].value);
    n2= document.getElementsByName(elementName= "mul_num2")[0].value;
    n2= document.getElementsByName(elementName= "mul_total")[0].innerHTML=n1* Number(n2);
}
function dividir() {
    var n1,n2;
    n1=Number( document.getElementsByName(elementName= "div_num1")[0].value);
    n2= document.getElementsByName(elementName= "div_num2")[0].value;
    n2= document.getElementsByName(elementName= "div_total")[0].innerHTML =n1/ Number(n2);
}
function Cargarweb(){
    var cant,uni, urlcomp;
    cant =document.getElementById(elementid= "distancia").value;
    uni =document.getElementsByName(elementName="unidades")[0].value;

    urlcomp="segundaWeb.html"+"#"+cant +"#"+uni;
    window.open(urlcomp);

}
function CargarResultado(){
    var urlcomp, cant, uni;
    urlcomp=window.location.href.split(separator="/")[5];
    cant=urlcomp.split(separator="#")[1];
    uni=urlcomp.split(separator="#")[2];
    document.getElementById(elementid="dist").value= cant + " "+ uni;
}
function DibujarCirculoCuadrado () {
    var canvas= document.getElementById(elementid="myCanvas");
    var ctx= canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#cd0600";
    ctx.fillRect(x=0+margen, y=yMax-40-margen, w=40, h=40);

    ctx.arc(x=xMax/2, y=yMax/2, radius=20, starAngle=0, endAngle=2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#aa3391";
    ctx.fill();
}

var bandera;
function Dibujar(event) {
    var canvas = document.getElementById(elementid = "canvasaDibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(x = posX, y = posY, w = 10, h = 10);
        ctx.fill();
    }
}
function LimpiarCanvas() {
    var canvas = document.getElementById(elementid = "canvasaDibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

}

function DibujarCuadriculado() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");

    var alturaMax = canvas.height;
    var anchuraMax = canvas.width;

    //Dibujar lineas horizanotales
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(x=0, y=i);
        ctx.lineTo(x=anchuraMax, y=i);
        ctx.strokeStyle = "#ff7a00";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Dibujar linaes verticales
    ctx.beginPath();
    for(var i=0; i<anchuraMax;){
        ctx.moveTo(x=i, y=0);
        ctx.lineTo(x=i, y=alturaMax);
        ctx.strokeStyle = "#ece7f1";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(x=0, y=alturaMax/2);
    ctx.lineTo(x=anchuraMax, y=alturaMax/2);
    ctx.strokeStyle = "#f46d0b";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(x=anchuraMax/2, y=0);
    ctx.lineTo(x=anchuraMax/2, y=alturaMax);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
}

function DibujarImagen(posX, posY) {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src="images/auto.png";

    canvas.width = canvas.width;
    img.onload = function(){
        ctx.drawImage(img, dx=posX, dy=posY);
    }
}
x=0;
dx=2;
function AnimarAuto(){
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;

    var img = new Image();
    img.src="images/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, dy=100);
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}