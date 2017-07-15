(function(){
	console.clear();
	let canvas = document.createElement("canvas");
	canvas.width = 100;
	canvas.height = 100;
	let ctx = canvas.getContext("2d");
	let img = new Image();
	img.crossOrigin = "Anonymous";
	img.addEventListener("load",function(){
		ctx.drawImage(img,0,0,100,100);
		document.body.appendChild(img);
		ctx.putImageData(gray(ctx.getImageData(0,0,100,100)),0,0);
		document.body.appendChild(canvas);
	});
	img.src = "./images/1.jpeg";
	function gray(imageData){
		let data = imageData.data;
		let count = 0;
		for(let pos = 1, x=-1, y=-1; pos <= 100*100*4; pos = pos+4){
			count++;
			if(pos%400==1){
				x = -1;
				y++;
			}	
			if(pos%4==1){
				x++;
			}
			data[pos-1] = data[pos-1]/3;
			data[pos] = data[pos]/3;
			data[pos+1] = data[pos+1]/3;
			console.log("count:%d,r:%d,g:%d,b:%d,a:%d",count,data[pos-1],data[pos],data[pos+1],data[pos+2]);
		}	
		return imageData;
	}
	



})();
