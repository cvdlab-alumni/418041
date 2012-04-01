// ESERCIZI DEL 26/03

//DEFINISCO UN CUBO
var cuboUnitario = CUBOID([1,1,1]);

//DISEGNO IL CUBO
DRAW(cuboUnitario);

//PWER RIMUOVERE IL CUBO
HIDE(cuboUnitario);

// SHOW PER VISUALIZZARE GLI OGGETTI CHE ABBIAMO NASCOSTO
//SHOW(model);

//MAP - MAPPA UNA FUNZIONE E NE ALTERA IL DOMINIO
//DOMAIN -ACCETTA UNA LISTA DI COPPIE CHE INDICANO L'INIZIO E LA FINE DEL NOSTRO INTERVALLO 
//RITORNA UNA FUNZIONE CHE VUOLE LA LISTA DELLA DIVISIONE DEGLI INTERVALLI
var domain = DOMAIN([[1,5]])([4]);
DRAW(domain);


HIDE(domain);
//COLOR([R,G,B])(model) - PER COLORARE...

var domain = DOMAIN([[1.5,5.5]])([4]);
DRAW(domain);

HIDE(domain);

var domain1 = DOMAIN([[1.5,5.5],[1,3]])([4,2]);
DRAW(domain1);

HIDE(domain1);

var domain2 = DOMAIN([[1.5,5.5],[1,3],[0,1]])([4,2,1]);
DRAW(domain2);

HIDE(domain2);

//FUNZIONE MAP - UNA FUNZIONE DI ORDINE SUPERIORE CHE ACCETTA UNA FUNZIONE DI MAPPING CHE ACCETTA UN DOMINIO 
//MAP(mapping)(domain)
//INIZIAMO CON UN DOMINIO MONODIMENSIONALE IN 10 INTERVALLI DELL'INTERVALLO 0..1
var domain3 = DOMAIN([[0,10]])([10]);
var mapping = function(p){
	var u = p[0];
	return [u,1];
};
var mapped = MAP(mapping)(domain3);
DRAW(mapped);

HIDE(mapped);

//BISETTRICE DEL PRIMO QUADRANTE
var bisettrice = function(p){
	var u = p[0];
	return [u,u];
};
var mapped = MAP(bisettrice)(domain3);
DRAW(mapped);

COLOR([0,0,0])(mapped)

HIDE(mapped);


//FUNZIONE SINUSOIDALE
var domain4 = DOMAIN([[0,2*PI]])([20]);
var sinusoide = function(p){
	var u = p[0];
	return [u,SIN(u)];
};
var mapped = MAP(sinusoide)(domain4);
DRAW(mapped);

COLOR([0,0,0])(mapped);

HIDE(mapped);

//CIRCONFERENZA

var drawCircle = function(r,n){

	var domain = DOMAIN([[0,2*PI]])([n]);

	var cerchio = function(p){
		var u = p[0];
		return [r*Math.cos(u),r*Math.sin(u)];
	};

	var mapped = MAP(cerchio)(domain);

	DRAW(mapped);
	COLOR([0,0,0])(mapped);

};

//CILINDRO

var drawCilinder = function(r,h,n,m,color){

	var domain = DOMAIN([[0,2*PI],[0,h]])([n,m]);

	var cilindro = function(p){
		var u = p[0]; // 0 - 2*pi
		var v = p[1]; // 0 - h

		return [r*Math.cos(u),r*Math.sin(u), v];
	};

	var mapped = MAP(cilindro)(domain);

	DRAW(mapped);
	COLOR(color)(mapped);
};

//SFERA
var drawSfera = function (r,n,m,color) {  
	r = r || 1;
  n = n || 36;
  m = m || 74;
  color = color || [1,0,0];

  var domain = DOMAIN([[0,PI], [0,2*PI]])([n,n*2]);
  var mapping = function (p) {
    var u = p[0];
    var v = p[1];

    return [
      r * SIN(u) * COS(v),
      r * SIN(u) * SIN(v),
      r * COS(u)
    ];
  };
  
  var mapped =  MAP(mapping)(domain);
  DRAW(mapped);
	COLOR(color)(mapped);
};
