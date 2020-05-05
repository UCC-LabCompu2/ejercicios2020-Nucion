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
    if(isNaN(value)){
        alert("Se ingreso un valor invalido");
        document.Unidades.unid_metro.value= "";
        document.Unidades.unid_pulgada.value= "";
        document.Unidades.unid_pie.value= "";
        document.Unidades.unid_yarda.value="";
    }else if(id=="metro"){
        document.Unidades.unid_pulgada.value= 39.3701*value;
        document.Unidades.unid_pie.value= 3.28084*value;
        document.Unidades.unid_yarda.value=1.09361*value;
    }else if(id=="pulgada") {
        document.Unidades.unid_metro.value = 0.0254*value;
        document.Unidades.unid_pie.value = 0.0833333*value;
        document.Unidades.unid_yarda.value = 0.0277778*value;
    }else if(id=="pie"){
        document.Unidades.unid_metro.value= 0.3084*value;
        document.Unidades.unid_pulgada.value= 12*value;
        document.Unidades.unid_yarda.value=0.3333333*value;
    }else if(id=="yarda"){
        document.Unidades.unid_metro.value= 0.9144*value;
        document.Unidades.unid_pulgada.value= 36*value;
        document.Unidades.unid_pie.value=3*value;
    }
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