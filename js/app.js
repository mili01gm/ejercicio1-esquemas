var newElems = function(){
  var elem = document.createElement("div");
  elem.setAttribute("class","container")
  var rojo = document.createElement("div");
  rojo.setAttribute("class","cajita");
  rojo.setAttribute("id","rojo");
  var azul = document.createElement("div");
  azul.setAttribute("class","cajita");
  azul.setAttribute("id","azul");
  var morado = document.createElement("div");
  morado.setAttribute("class","mini-cajita");
  morado.setAttribute("id","morado");
  var verde = document.createElement("div");
  verde.setAttribute("class","mini-cajita");
  verde.setAttribute("id","verde");
  var amarillo = document.createElement("div");
  amarillo.setAttribute("class","micro-cajita");
  amarillo.setAttribute("id","amarillo");
  var negro = document.createElement("div");
  negro.setAttribute("class","micro-cajita");
  negro.setAttribute("id","negro");

  morado.appendChild(amarillo);
  azul.appendChild(negro);
  rojo.appendChild(morado);
  azul.appendChild(verde);
  elem.appendChild(rojo);
  elem.appendChild(azul);

  return elem;
}

window.addEventListener("load",function(e){
  return document.getElementById('contenedor').appendChild(newElems());
});
