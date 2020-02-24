inicio();

function inicio(){
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = $("document").createElement("canvas");
	bola = new Bola();
	run();
}

function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");
    contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

    bola.dibujar(contextoBuffer);
    if (bola.getX == 0||bola.getX==900){
        bola.rebotar('x');
    }
    if (bola.getY ==0 || bola.getY == 600){
        bola.rebotar('y');
    }
    bola.mover();
    contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
    contexto.drawImage(buffer, 0, 0);
    setTimeout("run()",20);

	
}


