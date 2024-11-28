canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
explorador_ancho=100;
explorador_alto=90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
 
background_imaTag=  new Image();	     //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;   // Define una función para cargar esta variable
background_imgTag.src=background_image;  // Carga la imagen

explorador_imgTag = new Image();        //Define la variable con una nueva imagen
explorador_imgTag.onload=uploadExplorador; // Define una función para cargar esta variable
explorador_imgTag.src=explorador_image;	// Carga la imagen

//Crea una función "uploadBackground()".                        
 function  uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);    //Dibuja la imagen de fondo
 }               

//Crea una función "uploadrover()".
function uploadExplorador(){
    ctx.drawImage(explorador_imgTag, explorador_x, explorador_y, explorador_ancho, explorador_alto );
}
                                        //Dibuja la imagen del explorador


window.addEventListener(                            );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		
    


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



