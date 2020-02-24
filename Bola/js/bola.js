function Bola(){
    this.x = 350;
    this.y = 300;
    this.img = $("bola")[0];
    this.velocidadX = 10;
    this.velocidadY = 10

    this.dibujar = function (ctx){
        var img = this.img;
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.restore();
    }
    
    this.rebotar = function(eje){
        if(eje=='x'){
            velocidadY=velocidadY*(-1);
        }
        if(eje=='y'){
            velocidadX=velocidadX*(-1);
        }
    }

    this.mover = function(){
        this.x+=velocidadX;
        this.y+=velocidadY;
    }

    this.getX = function(){
        return this.x;
    }

    this.getY = function(){
        return this.y;
    }
}