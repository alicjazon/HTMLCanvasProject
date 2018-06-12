
var graph = 0;

//Tablica kolorów 
var colors = ["#672E3B", "#EFC050", "#223A5E", "#005960", "#95DEE3", "#9E4624", "#5B5EA6"];

/////////** Funkcje zwracające macierze sąsiedztwa danych grafów **////////////

function graph1()
{
	var array = [
	[0, 1, 1, 1, 0],
	[1, 0, 0, 0, 0],
	[1, 0, 0, 1, 1],
	[1, 0, 1, 0, 0],
	[0, 0, 1, 0, 0]
	];
	return array;
}

function graph2()
{
	var array = [
	[0, 1, 0, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 1],
	[1, 0, 0, 0, 0, 1, 0]
	];
	return array;

}

function graph3()
{
	var array = [
	[0, 1, 0, 0, 0, 0, 0],
	[1, 0, 1, 0, 1, 0, 0],
	[0, 1, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 1],
	[0, 1, 0, 1, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 1],
	[0, 0, 0, 1, 0, 1, 0]
	];
	return array;

}

function graph4()
{
	var array = [
	[0, 1, 0, 0, 0],
	[1, 0, 1, 0, 0],
	[0, 1, 0, 1, 0],
	[0, 0, 1, 0, 1],
	[0, 0, 0, 1, 0]
	];
	return array;

}


function toRad(deg)
{
  return deg*Math.PI/180;
}

//// Informacje o grafach //////

function preview1()
{
	alert("Liczba chromatyczna grafu: \n x(G) = 3");
}

function preview2()
{
	alert("Liczba chromatyczna grafu: \n x(G) = 3 \nJest to graf cykliczny, trudny do optymalnego pokolorowania standardowymi algorytmami");
}

function preview3()
{
	alert("Liczba chromatyczna grafu: \n x(G) = 2 \nJest to graf dwudzielny");
}

function preview4()
{
	alert("Liczba chromatyczna grafu: \n x(G) = 2 \nJest to najmniejszy dość trudny graf. Standardowe algorytmy nie radzą sobie z optymalnym pokolorowaniem go!");
}

//// Rysowanie danych grafów ////

function draw1(delay)
{
	graph = 1;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 8;

	ctx.beginPath();
	ctx.arc(240,100,30,0,toRad(360)); //1
	ctx.moveTo(270, 100);
	ctx.lineTo(430, 100);
	ctx.moveTo(270, 100);
	ctx.lineTo(470, 200);
	ctx.moveTo(490, 100);

	ctx.arc(460,100,30,0,toRad(360)); //2
	ctx.moveTo(270, 200);

	ctx.arc(240,200,30,0,toRad(360)); //3

	ctx.moveTo(270, 200);
	ctx.lineTo(470, 200);
	ctx.moveTo(240, 170);
	ctx.lineTo(240, 130);
	ctx.moveTo(530, 200);

	ctx.arc(500,200,30,0,toRad(360));  //4
	ctx.moveTo(400, 300);

	ctx.arc(370,300,30,0,toRad(360)); //5
	ctx.moveTo(340, 300);
	ctx.lineTo(270, 200);
	ctx.stroke();

}

function draw2()
{
	graph = 2;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 8;

	ctx.beginPath();
	ctx.arc(400,50,30,0,toRad(360)); //1
	ctx.lineTo(550,120);
	ctx.moveTo(370,50);
	ctx.lineTo(250,120);
	ctx.moveTo(280,150);
	ctx.arc(250,150,30,0,toRad(360)); //2
	ctx.moveTo(250,180);
	ctx.lineTo(250,220);
	ctx.moveTo(580,150);
	ctx.arc(550,150,30,0,toRad(360)); //3
	ctx.moveTo(550,180);
	ctx.lineTo(550,220);
	ctx.moveTo(280,250);
	ctx.arc(250,250,30,0,toRad(360)); //4
	ctx.moveTo(250,280);
	ctx.lineTo(280, 330);
	ctx.moveTo(580, 250);
	ctx.arc(550,250,30,0,toRad(360)); //5
	ctx.moveTo(550, 280);
	ctx.lineTo(520, 330);
	ctx.moveTo(330, 350);
	ctx.arc(300,350,30,0,toRad(360)); //6
	ctx.lineTo(470, 350);
	ctx.moveTo(530,350);
	ctx.arc(500,350,30,0,toRad(360)); //7
	ctx.stroke();

}

function draw3()
{
	graph = 3;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 8;

	ctx.beginPath();
	ctx.arc(100,300,30,0,toRad(360)); //1
	ctx.lineTo(200,130);
	ctx.moveTo(230,100);
	ctx.arc(200,100,30,0,toRad(360)); //2
	ctx.lineTo(280,270);
	ctx.moveTo(310,300);
	ctx.arc(280,300,30,0,toRad(360)); //3
	ctx.lineTo(380,130);
	ctx.moveTo(410,100);
	ctx.arc(380,100,30,0,toRad(360)); //4
	ctx.lineTo(460,270);
	ctx.moveTo(490, 300);
	ctx.arc(460,300,30,0,toRad(360)); //5
	ctx.lineTo(560,130);
	ctx.moveTo(590,100);
	ctx.arc(560,100,30,0,toRad(360)); //6
	ctx.lineTo(640,270);
	ctx.moveTo(670,300);
	ctx.arc(640,300,30,0,toRad(360));

	ctx.moveTo(230,100);
	ctx.lineTo(460,270);
	ctx.moveTo(410,100);
	ctx.lineTo(640,270);
	ctx.stroke();

}

function draw4()
{
	graph = 4;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 8;

	ctx.beginPath();
	ctx.arc(150,200,30,0,toRad(360));
	ctx.lineTo(220,200);
	ctx.moveTo(280,200);
	ctx.arc(250,200,30,0,toRad(360));
	ctx.lineTo(320,200);
	ctx.moveTo(380,200);
	ctx.arc(350,200,30,0,toRad(360));
	ctx.lineTo(420,200);
	ctx.moveTo(480,200);
	ctx.arc(450,200,30,0,toRad(360));
	ctx.lineTo(520,200);
	ctx.moveTo(580,200);
	ctx.arc(550,200,30,0,toRad(360));
	ctx.stroke();

}

function load_array()
{
	switch(graph)
	{
		case 1:
			return graph1();
		case 2:
			return graph2();
		case 3:
			return graph3();
		case 4:
			return graph4();
	}
}

function color_graph(tab)
{
	switch(graph)
	{
		case 1:
			color1(tab);
			break;
		case 2:
			color2(tab);
			break;
		case 3:
			color3(tab);
			break;
		case 4:
			color4(tab);
			break;
	}
}

function greedy_algorithm()
{
	var graph_array = load_array(); //tablica reprezentująca graf
	var n = graph_array.length; // liczba wierzchołków w grafie

	var CT = []; //tablica określająca numery kolorów wierzchołków
	var C = []; //tablica logiczna dostępności kolorów
	var iter = 0;

	for(i = 0; i < n; i++)
	{
		CT[i] = -1;
	}

	CT[0] = 0;
	C[0] = true;

	for(i = 1; i < n; i++)
	{
		C[i] = false;
		for(j = 0; j < n; j++)
		{
			if(graph_array[i][j] == 1)
			{
				if(CT[j] > -1)
					C[CT[j]] = true;
			}
		}

		iter = 0;
		while(C[iter] == true)
			iter++;
		CT[i] = iter;
	}

	color_graph(CT);
}

function lf_algorithm()
{
	var graph_array = load_array(); //tablica reprezentująca graf
	var n = graph_array.length; // liczba wierzchołków w grafie

	var CT = []; //tablica określająca numery kolorów wierzchołków
	var C = []; //tablica logiczna dostępności kolorów
	var VT = []; //tablica numerów wierchołków
	var DT = []; //tablica stopni wyjściowych
	var iter = 0;
	var temp = 0; //stopień wierzchołka


	for(i = 0; i < n; i++)
	{
		VT[i] = i;
		DT[i] = 0;

		for(j = 0; j < n; j++)
		{
			if(graph_array[i][j] == 1)
				DT[i] = DT[i] + 1;
		}

		temp = DT[i];
		iter = i;

		while((iter > 0) && (DT[iter-1] < temp) )
		{	DT[iter] = DT[iter-1];
			VT[iter] = VT[iter-1];
			iter = iter -1;
		}

		DT[iter] = temp;
		VT[iter] = i;

		CT[i] = -1;
		C[i] = false;	
 	}
 	CT[VT[0]] = 0;
 	C[VT[0]] = true;
 	for(i = 1; i < n; i++)
 	{
 		for(j = 0; j < n; j++)
		{
			if(graph_array[VT[i]][j] == 1)
			{
				if(CT[j] > -1)
					C[CT[j]] = true;
			}

		}
			iter = 0;

			while(C[iter] == true)
				iter++;
			CT[VT[i]] = iter;

 	}

 	color_graph(CT);

}

function color1(tab)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	setTimeout(function() { 
		ctx.beginPath();
		ctx.arc(240,100,30,0,toRad(360)); //1
		ctx.fillStyle = colors[tab[0]];
		ctx.fill(); }
		, 100);

	ctx.moveTo(490, 100);

	setTimeout(function() { 
		ctx.beginPath();
		ctx.arc(460,100,30,0,toRad(360)); //2
		ctx.fillStyle = colors[tab[1]];
		ctx.fill(); }
		, 2000);
	ctx.moveTo(270, 200);

	setTimeout(function() { 
		ctx.beginPath();
		ctx.arc(240,200,30,0,toRad(360)); //3
		ctx.fillStyle = colors[tab[2]];
		ctx.fill(); }
		, 3000);

	ctx.moveTo(530, 200);

	setTimeout(function() { 
		ctx.beginPath();
		ctx.arc(500,200,30,0,toRad(360));  //4
		ctx.fillStyle = colors[tab[3]];
		ctx.fill(); }
		, 4000);

	ctx.moveTo(400, 300);

	setTimeout(function() { 
		ctx.beginPath();
		ctx.arc(370,300,30,0,toRad(360)); //5
		ctx.fillStyle = colors[tab[4]];
		ctx.fill(); }
		, 5000);

	ctx.stroke();

}
function color2(tab)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

setTimeout(function() {	
	ctx.beginPath();
	ctx.arc(400,50,30,0,toRad(360)); //1
		ctx.fillStyle = colors[tab[0]];
		ctx.fill(); }
		, 100);

	ctx.moveTo(280,150);
setTimeout(function() {	
	ctx.beginPath();
	ctx.arc(250,150,30,0,toRad(360)); //2
		ctx.fillStyle = colors[tab[6]];
		ctx.fill(); }
		, 1000);

	ctx.moveTo(580,150);
setTimeout(function() {	
	ctx.beginPath();
	ctx.arc(550,150,30,0,toRad(360)); //3
		ctx.fillStyle = colors[tab[1]];
		ctx.fill(); }
		, 2000);

	ctx.moveTo(280,250);
setTimeout(function() {	
	ctx.beginPath();	
	ctx.arc(250,250,30,0,toRad(360)); //4
		ctx.fillStyle = colors[tab[5]];
		ctx.fill(); }
		, 3000);

	ctx.moveTo(580, 250);
setTimeout(function() {	
	ctx.beginPath();	
	ctx.arc(550,250,30,0,toRad(360)); //5
		ctx.fillStyle = colors[tab[2]];
		ctx.fill(); }
		, 4000);

	ctx.moveTo(330, 350);
setTimeout(function() {	
	ctx.beginPath();	
	ctx.arc(300,350,30,0,toRad(360)); //6
		ctx.fillStyle = colors[tab[4]];
		ctx.fill(); }
		, 5000);

	ctx.moveTo(530,350);
setTimeout(function() {	
	ctx.beginPath();	
	ctx.arc(500,350,30,0,toRad(360)); //7
		ctx.fillStyle = colors[tab[3]];
		ctx.fill(); }
		, 6000);
	ctx.stroke();
}

function color3(tab)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

setTimeout(function() {
	ctx.beginPath();
	ctx.arc(100,300,30,0,toRad(360)); //1
	ctx.fillStyle = colors[tab[0]];
		ctx.fill(); }
		, 100);
	ctx.moveTo(230,100);

setTimeout(function() {
	ctx.beginPath();
	ctx.arc(200,100,30,0,toRad(360)); //2
	ctx.fillStyle = colors[tab[1]];
		ctx.fill(); }
		, 1000);

	ctx.moveTo(310,300);
setTimeout(function() {
	ctx.beginPath();
	ctx.arc(280,300,30,0,toRad(360)); //3
		ctx.fillStyle = colors[tab[2]];
		ctx.fill(); }
		, 2000);

	ctx.moveTo(410,100);
setTimeout(function() {
	ctx.beginPath();
	ctx.arc(380,100,30,0,toRad(360)); //4
			ctx.fillStyle = colors[tab[3]];
		ctx.fill(); }
		, 3000);

	ctx.moveTo(490, 300);
setTimeout(function() {
	ctx.beginPath();
	ctx.arc(460,300,30,0,toRad(360)); //5
				ctx.fillStyle = colors[tab[4]];
		ctx.fill(); }
		, 4000);

	ctx.moveTo(590,100);
	setTimeout(function() {
		ctx.beginPath();
	ctx.arc(560,100,30,0,toRad(360)); //6
					ctx.fillStyle = colors[tab[5]];
		ctx.fill(); }
		, 5000);

	ctx.moveTo(670,300);
		setTimeout(function() {
		ctx.beginPath();
	ctx.arc(640,300,30,0,toRad(360)); //7
					ctx.fillStyle = colors[tab[6]];
		ctx.fill(); }
		, 6000);

ctx.stroke();

}

function color4(tab)
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = 8;

	setTimeout(function() {
	ctx.beginPath();
	ctx.arc(150,200,30,0,toRad(360));
	ctx.fillStyle = colors[tab[0]];
		ctx.fill(); }
		, 100);

	ctx.moveTo(280,200);
	setTimeout(function() {
	ctx.beginPath();
	ctx.arc(250,200,30,0,toRad(360));
		ctx.fillStyle = colors[tab[1]];
		ctx.fill(); }
		, 1000);

	ctx.moveTo(380,200);
	setTimeout(function() {
	ctx.beginPath();	
	ctx.arc(350,200,30,0,toRad(360));
		ctx.fillStyle = colors[tab[2]];
		ctx.fill(); }
		, 2000);

	ctx.moveTo(480,200);
	setTimeout(function() {
	ctx.beginPath();
	ctx.arc(450,200,30,0,toRad(360));
		ctx.fillStyle = colors[tab[3]];
		ctx.fill(); }
		, 3000);

	ctx.moveTo(580,200);
	setTimeout(function() {
	ctx.beginPath();
	ctx.arc(550,200,30,0,toRad(360));
		ctx.fillStyle = colors[tab[4]];
		ctx.fill(); }
		, 4000);
	ctx.stroke();
}

	

 



