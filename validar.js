function operaciones(){
    let cap = document.getElementaryById("cap").value;
    let resultado = cap * 0.2
    
    let resultadoStr = resultado.toString();
    alert(resultadoStr)
}

function eje2(){
    let salBaseStr = document.getElementById("salarioB").value
    let salBaseNumb = Number(salBaseStr);

    let comisiones = salBaseNumb * 0.30
    let salTotal = comisiones+salBaseNumb
    let salTotalStr = salTotal.toString();
    let comisionesStr = comisiones.toString()
    alert("El salario total es de " + salTotalStr + "$" + " El extra por concepto de comisiones es de " + comisionesStr + "$")
}

function eje3(){
    let compraSinD = document.getElementById("compraSinD").value
    let compraT = compraSinD - (compraSinD*0.15)

    let compraTStr = compraT.toString()

    alert("Va a pagar " + compraTStr + "$")
}

function eje4(){
    let primero = document.getElementById("primero").value
    let segundo = document.getElementById("segundo").value
    let tercero = document.getElementById("tercero").value

    let examenF = document.getElementById("examenF").value
    let trabajoF = document.getElementById("trabajoF").value

    let primerCal = ((primero+segundo+tercero)/3)*0.55
    let segundaCal = examenF*0.3
    let terceraCal = trabajoF*0.15

    let calT = primerCal+segundaCal+terceraCal

    let calTStr = calT.toString();

    alert (calTStr)
}

function eje5(){

 let hombresGrupo = document.getElementById("hombresGrupo").value
 let mujeresGrupo = document.getElementById("mujeresGrupo").value

 let total = hombresGrupo+mujeresGrupo

 let promediomujeres = ((total)/mujeresGrupo)*100
 let promediomujeresStr = promediomujeres.toString();

 let promedioh = ((total)/hombresGrupo)*100
 let promediohStr = promedioh.toString();

 alert("El promedio de mujeres es:"+promediomujeresStr+"%"+ "El promedio de hombre es: " +promediohStr)

}