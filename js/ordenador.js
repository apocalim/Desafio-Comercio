//Primero generamos un funcion para que solo nos permita ingresar numeros
 $('#numb').on('keypress',function(e){
	key = e.keycode || e.which;
	teclado= String.fromCharCode(key);
	numeros='0123456789';
	especiales="8-37-38-46-59";//indicamos teclas espeaciles que tambien ingresaran a parte de los numeros
	teclado_especial =false;
	for(var i in especiales){
	  if(key==especiales[i]){
	    teclado_especial=true; 
	  }
	}
	if(numeros.indexOf(teclado)==-1 && !teclado_especial){
	  return  false;
	}
});
//definimos los conjuntos donde almacenaremos los valores.
var conjunto1 = [];
var conjunto2 = [];
var conjuntoOrde =  [];
var a= 0;
//generamos la función para insertar valores
$('#put').on('click', function(){
	var numero= $('#numb').val();
	//realizamos validaciones con respcto al boton
	if(conjunto1.indexOf(numero) != -1){
		alert('el número que usted ha ingresado ya existe.');
		$('#numb').val('');
	}
	else if(numero==''){
		alert('es vacio');
	}
	else{
		var respond = document.createElement("SPAN");
		respond.innerHTML = numero;
		respond.id= a;
		respond.setAttribute("class", 'numero');
		respond.style.cssText='left:'+40*a+'px;';
		container.appendChild(respond);
		$('#numb').val('');
		conjunto1.push(numero);
		conjunto2.push(numero);
		a++;
	}
});
//generamos la función que nos permita ordenar
$('#ord').on('click', function(){
	function ordenaAsc(a,b){
		return a-b;
	}
	conjuntoOrde = conjunto1.sort(ordenaAsc);
	for(i=0; i<conjuntoOrde.length; i++){
		var posicion = conjunto2.indexOf(conjuntoOrde[i]);
		spaceTomove = i-posicion;
		if(spaceTomove < 0 ){
			var result = Math.abs(spaceTomove);
			$('#'+posicion).animate({
				marginLeft: '-='+40*result+'px',
			}, 5000);
		}
		else{
			var result = spaceTomove;
			$('#'+posicion).animate({
				marginLeft: '+='+40*result+'px',
			}, 5000);
		}
	}
	conjunto2.sort(ordenaAsc);
	var reorder = document.getElementsByClassName('numero');
	//alert (reorder.length);
	for(c=0; c<reorder.length; c++){
		var newid = conjunto2.indexOf(reorder[c].innerHTML);
		reorder[c].id = newid;
	}
});

//generamos la función que nos permita limpiar los números ya ingresados
$('#clear').on('click', function(){
	$('#container').find('span').remove();
	conjunto1 = [];
	conjunto2 = [];
	conjuntoOrde = [];
	a= 0;
});
