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