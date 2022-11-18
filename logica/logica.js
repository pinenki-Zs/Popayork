isShow = true;
function mostrarOcultar(){
  if(isShow){			
    document.getElementById("map").style.display = "none";
    isShow=false;
  }else{
    document.getElementById("map").style.display = "block";
    isShow=true;
  }
  
}





registro = [];
 var usuario = {
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: ""
      }
function guardar(){
    var nom = document.getElementById("nombre").value;
    var apelli = document.getElementById("apellido").value;
    var corre = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var contraseña2 = document.getElementById("contraseña2").value;

    
    if (contraseña.length <=6){
      document.getElementById("res").value ="error en las contraseñas";
      }if (contraseña!=contraseña2 ){
        document.getElementById("res").value ="error en las contraseñas";
        }else {
          var marca = true;
        for (var i = 0; i < registro.length; i++){
          if (registro[i].correo == corre) {
            document.getElementById("res").value = "el correo ya fue usado";
            marca = false;
            break;
          }
        }
    
        if (marca) {
        
          usuario.nombre = nom
          usuario.apellido = apelli
          usuario.correo=corre
          usuario.contraseña=contraseña
          
          registro.push(usuario);
          document.getElementById("res").value = "te registrastes";
        } 
      }

}

function inicio(){
  var correo = document.getElementById("correo2").value;
  var contra = document.getElementById("contraseña3").value;
 
  var marca=false;
  for(var i =0;i<registro.length;i++){
     if(correo==registro[i].correo && contra==registro[i].contraseña){
      localStorage.setItem("sesion",'in');
    marca=true;
    break
     }
} 
if(marca){
  document.getElementById("res2").value = "te registrastes";
}else{
  document.getElementById("res2").value = "aun no estas registrado";
}
}

 
function bloqueo(){
 
     if(localStorage.getItem("sesion") == 'in'){
      window.location='index.html'
     }else{
    alert("no estas registrado aun")
}
}

function caldas(){
 
  if(localStorage.getItem("sesion") == 'in'){
   window.location='caldas.html'
  }else{
 alert("no estas registrado aun")
}
}


function humilladero(){
 
  if(localStorage.getItem("sesion") == 'in'){
   window.location='cultura.html'
  }else{
 alert("no estas registrado aun")
}
}

function empanadas(){
 
  if(localStorage.getItem("sesion") == 'in'){
   window.location='empanadas.html'
  }else{
 alert("no estas registrado aun")
}
}

function morro(){
 
  if(localStorage.getItem("sesion") == 'in'){
   window.location='el morro.html'
  }else{
 alert("no estas registrado aun")
}
}
function hotel(){
 
  if(localStorage.getItem("sesion") == 'in'){
   window.location='hoteles.html'
  }else{
 alert("no estas registrado aun")
}
}


function semanasanta(){
 
  if(localStorage.getItem("sesion") == 'in'){
   window.location='semana.html'
  }else{
 alert("no estas registrado aun")
}
}



function tamales(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='tamales.html'
  }else{
 alert("no estas registrado aun")
}
}


function papa(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='papas.html'
  }else{
 alert("no estas registrado aun")
}
}

function ternero(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='ternero.html'
  }else{
 alert("no estas registrado aun")
}
}

function año(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='aniversario.html'
  }else{
 alert("no estas registrado aun")
}
}

function gastro(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='festival.html'
  }else{
 alert("no estas registrado aun")
}
}

function carnavales(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='carnavales.html'
  }else{
 alert("no estas registrado aun")
}
}

function semana(){
  if(localStorage.getItem("sesion") == 'in'){
   window.location='semanasanta.html'
  }else{
 alert("no estas registrado aun")
}
}