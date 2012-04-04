/* Exercise 2
 * Reproduce a 3D model of the Barcellona Pavilion
 * using only the plasm.js primitives SIMPLEX_GRID 
 * and STRUCT. Affine transformations T, S or R are 
 * also allowed.
 */


!(function(exports){

	//Inizializzo il modello 3D
	var model = [];

	//Funzione per definire rettangoli
	var rectangle = function (bMin,bMaggiore,h){
		return SIMPLEX_GRID([[bMin],[bMaggiore],[h]]);
	}

	var altezzaBase = 2;
	var altezzaMuri = 6;

	//Base
	var base1 = SIMPLEX_GRID([[1],[2],[altezzaBase]]);
	var base2 = SIMPLEX_GRID([[-1,38],[1],[altezzaBase]]);
	//Per piscina
	var base3 = SIMPLEX_GRID([[-1,20],[-1,9],[1.7]]);
	var bordoPiscina = SIMPLEX_GRID([[-0.8,0.2],[-1,21.2],[altezzaBase+altezzaMuri]]);
	var bordoPiscina1 = SIMPLEX_GRID([[-0.8,8.4],[-22,0.2],[altezzaBase+altezzaMuri]]);
	var bordoPiscina2 = SIMPLEX_GRID([[-0.8,8.2],[-0.8,0.2],[altezzaBase+altezzaMuri]]);
	var bordoPiscina6 = SIMPLEX_GRID([[-9,0.2],[-16.8,5.4],[altezzaBase+altezzaMuri]]);

	var base4 = SIMPLEX_GRID([[-1,35],[-10,7],[altezzaBase]]);
	var base5 = SIMPLEX_GRID([[-21,15],[-1,9],[altezzaBase]]);
	var base6 = SIMPLEX_GRID([[-1,8],[-17,5],[altezzaBase]]);
	var base7 = SIMPLEX_GRID([[-36,11],[-4,12],[altezzaBase]]);
	var base8 = SIMPLEX_GRID([[-47,4],[-4,1],[altezzaBase]]);
	var base9 = SIMPLEX_GRID([[-51,1],[-4,2],[altezzaBase]]);

	var base10 = SIMPLEX_GRID([[-47,4],[-5,11],[1.7]]);
	var bordoPiscina3 = SIMPLEX_GRID([[-51,0.2],[-4.8,11.4],[altezzaBase+altezzaMuri]]);
	var bordoPiscina4 = SIMPLEX_GRID([[-39,12],[-16,0.2],[altezzaBase+altezzaMuri]]);
	var bordoPiscina5 = SIMPLEX_GRID([[-41,10],[-4.8,0.2],[altezzaBase+altezzaMuri]]);
	

	model.push(STRUCT([base1,base2,base3,bordoPiscina,bordoPiscina1,bordoPiscina2,base4,
		base5,base6,base7,base8,base9,base10,bordoPiscina3,bordoPiscina4,bordoPiscina5,bordoPiscina6]))

	//Scale
	var altezzaScale = 0.25;
	var larghezzaScala = 0.375;
	var scale = [];
	for (var i = 0; i < 8; i++) {
		scale.push(SIMPLEX_GRID([[-36,3-i*larghezzaScala],[-1,3],[-i*altezzaScale,altezzaScale]]));
	};

	model.push(STRUCT(scale));

	//Muri restanti
	//Muro e panchine vicino alla piscina
	var swimwall = SIMPLEX_GRID([[-7.8,18.4],[-15,0.2],[-altezzaBase,altezzaMuri]]);
	model.push(swimwall);

	var benchLegs = function(){
		return SIMPLEX_GRID([
			[0.3],[0.3],[-altezzaBase,0.4]
		]);
	};
	var bench = function(){
		return SIMPLEX_GRID([
			[15.25/7],[0.5],[-altezzaBase-0.4,0.3]
		]);
	};

	var swimbench = function(){
		var legs1 = T([0,1])([0.3,0.1666666])(benchLegs());
		var legs2 = T([0,1])([(15.25/7-0.6),0.1666666])(benchLegs());
	
		return STRUCT([legs1,legs2,bench()]);
	};

	var panche = [];
		for (var i = 0; i < 7; i++) {
		panche.push(T([0])([i*15.25/7])(swimbench()));
	};

	model.push(T([0,1])([8,14])(STRUCT(panche)));

 //Muri a sx
 var wall = SIMPLEX_GRID([[-1,6],[-17,0.1],[-altezzaBase,altezzaMuri]]);
 var wall1 = SIMPLEX_GRID([[-8,1],[-17,0.1],[-altezzaBase,altezzaMuri]]);
 var wall2 = SIMPLEX_GRID([[-7,2],[-20,0.1],[-altezzaBase,altezzaMuri]]);
 var wall3 = SIMPLEX_GRID([[-5,1],[-20,0.1],[-altezzaBase,altezzaMuri]]);
 var wall4 = SIMPLEX_GRID([[-5,0.1],[-19,3],[-altezzaBase,altezzaMuri]]);

 model.push(STRUCT([wall,wall1,wall2,wall3,wall4]));
 
 //Muri o vetri a dx
 var wall5 = SIMPLEX_GRID([[-25,9],[-7.4,0.1],[-altezzaBase,altezzaMuri]]);
 var wall6 = SIMPLEX_GRID([[-37,5.5],[-11.4,0.1],[-altezzaBase,altezzaMuri]]);

 var glassWindow1 = SIMPLEX_GRID([[-31,1],[-7.5,5.9],[-altezzaBase,altezzaMuri]]);
 var glassWindow2 = SIMPLEX_GRID([[-30,10],[-13.4,0.1],[-altezzaBase,altezzaMuri]]);
 var glassWindow3 = SIMPLEX_GRID([[-30,11],[-4.9,0.1],[-altezzaBase,altezzaMuri]]);
 var glassWindow4 = SIMPLEX_GRID([[-44.9,0.1],[-6.5,8],[-altezzaBase,altezzaMuri]]);
 var glassWindow5 = SIMPLEX_GRID([[-42.4,0.1],[-5,6.4],[-altezzaBase,altezzaMuri]]);
 var glassWindow6 = SIMPLEX_GRID([[-38.7,0.1],[-5,6.4],[-altezzaBase,altezzaMuri]]);

	model.push(STRUCT([wall5,wall6,glassWindow1,glassWindow2,
		glassWindow3,glassWindow4,glassWindow5,glassWindow6]));
 
 //Colonne

 var column = function(){
  return SIMPLEX_GRID([[0.2],[0.2],[-altezzaBase,altezzaMuri]]);
 };

 model.push(STRUCT([
 	(T([0,1])([25.9,6.9])(column())),(T([0,1])([25.9+6.4,6.9])(column())),
 	(T([0,1])([25.9+12,6.9])(column())),(T([0,1])([25.9+19.4,6.9])(column())),
 	(T([0,1])([25.9,13.9])(column())),(T([0,1])([25.9+6.4,13.9])(column())),
 	(T([0,1])([25.9+12,13.9])(column())),(T([0,1])([25.9+19.4,13.9])(column()))
 	])
 );


 //Tetti
 var roof = SIMPLEX_GRID([[0,10],[-13,10],[-(altezzaBase+altezzaMuri),0.5]]);
 var roof1 = SIMPLEX_GRID([[-24,23],[-4,13],[-(altezzaBase+altezzaMuri),0.5]]);

 model.push(STRUCT([roof,roof1]));

 exports.model = STRUCT(model);

}(this));

DRAW(model);