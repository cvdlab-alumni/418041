/* Exercise 1
 * Reproduce a 2D model of the floor plan of the 
 * Barcelona Pavilion using only the plasm.js primitives 
 * POLYLINE and STRUCT.
 * Let assume the grid of squares on the floor be 1.0m x 1.0m.
 */


!(function(exports){
	//spessore dei muri = 0.15 m = 15 cm
	//spessore delle vetrate = 0.08 m = 8 cm

	var model = [];

	//Dedinizione del contorno dell'edificio
	//Spessore dei muri 0.2 m
	//Spessore vetri 0.1 m
	var outline = POLYLINE([
		[0,0],[39,0],[39,4],[52,4],[52,6],
		[51.2,6],[51.2,5],[47,5],[47,16],[37.8,16],[37.8,16.2],
		[39,16.2],[39,17],[9,17],[9,22],[1,22],[1,2],
		[0,2],[0,0]
	]);
	model.push(outline);

	//La piscina
	var swimmingpool = POLYLINE([
		[1,1],[21,1],[21,10],[1,10],[1,1]
	]);
	model.push(swimmingpool);

	//Definizione dei muri esterni dell'edificio	
	var wallsx1 = POLYLINE([
		[8,1],[8,0.8],[0.8,0.8],[0.80,22.2],
		[9.2,22.2],[9.2,16.8],[9,16.8],[9,17]
	]);

	//Muri esterni a destra
	var walldx1 = POLYLINE([
		[41,4.8],[51.2,4.8],[51.2,16.2],
		[37.8,16.2],[37.8,16],[51,16],
		[51,5],[41,5],[41,4.8]
		]);

	var walldx2 = POLYLINE([[47,16],[47,5]]);

	model.push(STRUCT([wallsx1,walldx1,walldx2]));

	//Vetrate di 0.08 m
	var sxwall1 = POLYLINE([
		[1,17],[7,17],[7,17.08],
		[5.04,17.08],[5.04,18],[4.96,18],
		[4.96,17.08],[1,17.08]
	]);

	var sxwall2 = POLYLINE([
		[9,17],[8,17],[8,17.08],[9,17.08],
		[9,19.96],[7,19.96],[7,20.04],[9,20.04],
		[9,22],[7.04,22],[7.04,21],[6.96,21],[6.96,22],
		[5.04,22],[5.04,20.04],[6,20.04],[6,19.96],
		[5.04,19.96],[5.04,19],[4.96,19],[4.96,22]
	]);

	model.push(STRUCT([sxwall1,sxwall2]));

	//Muro vicino la piscina conb panchina
	var swimwall = POLYLINE([[7.8,15],[7.8,15.2],[26.2,15.2],
		[26.2,15],[7.8,15]]);
	var swimbench = POLYLINE([[8,14.25],[8,14.75],[23.25,14.75],
		[23.25,14.25],[8,14.25]]);
	
	model.push(STRUCT([swimwall,swimbench]));

	//Muri dell'edificio
	var wall1 = POLYLINE([
		[25.2,7.25],[25.2,7.45],[33.8,7.45],
		[33.8,7.25],[25.2,7.25]
	]);

	var glassWindow = POLYLINE([
		[31,7.45],[31,13.6],[32,13.6],
		[32,7.45],[31,7.45]
	]);

	var wall2 = POLYLINE([
		[30,13.6],[40,13.6],[40,13.8],
		[30,13.8],[30,13.6]
	]);

	var door = POLYLINE([[40,13.8],[40,16]]);
	var door1 = POLYLINE([[30,7.25],[30,5]]);

	var wall3 = POLYLINE([[30,5],[41,5]]);

	var wall4 = POLYLINE([[37.2,11.4],[37.2,11.6],
		[42.5,11.6],[42.5,11.4],[37.2,11.4]
	]);

	var glass1 = POLYLINE([[38.8,11.4],[38.8,5]]);
	var glass2 = POLYLINE([[42.5,11.4],[42.5,5]]);

	var wall5 = POLYLINE([[44.8,6.8],[45,6.8],
		[45,14.2],[44.8,14.2],[44.8,6.8]
	]);
	
	model.push(STRUCT([wall1,glassWindow,wall2,
		door,door1,wall3,wall4,glass1,glass2,wall5]));


	//Colonne superiori
	var pillar1 = POLYLINE([[25.9,6.9],[26.1,6.9],
		[26.1,7.1],[25.9,7.1],[25.9,6.9]]);
	var pillar2 = POLYLINE([[25.9+6.4,6.9],[26.1+6.4,6.9],
		[26.1+6.4,7.1],[25.9+6.4,7.1],[25.9+6.4,6.9]]);
	var pillar3 = POLYLINE([[25.9+12.4,6.9],[26.1+12.4,6.9],
		[26.1+12.4,7.1],[25.9+12.4,7.1],[25.9+12.4,6.9]]);
	var pillar4 = POLYLINE([[25.9+19.5,6.9],[26.1+19.5,6.9],
		[26.1+19.5,7.1],[25.9+19.5,7.1],[25.9+19.5,6.9]]);
	
	//Colonne inferiori
	var pillar5 = POLYLINE([[25.9,13.9],[26.1,13.9],
		[26.1,14.1],[25.9,14.1],[25.9,13.9]]);
	var pillar6 = POLYLINE([[25.9+6.4,13.9],[26.1+6.4,13.9],
		[26.1+6.4,14.1],[25.9+6.4,14.1],[25.9+6.4,13.9]]);
	var pillar7 = POLYLINE([[25.9+12.4,13.9],[26.1+12.4,13.9],
		[26.1+12.4,14.1],[25.9+12.4,14.1],[25.9+12.4,13.9]]);
	var pillar8 = POLYLINE([[25.9+19.5,13.9],[26.1+19.5,13.9],
		[26.1+19.5,14.1],[25.9+19.5,14.1],[25.9+19.5,13.9]]);

	model.push(STRUCT([pillar1,pillar2,pillar3,
		pillar4,pillar5,pillar6,pillar7,pillar8]));

	//Scale
	var scales1 = POLYLINE([[36,1],[36+0.375,1],
		[36+0.375,4],[36,4],[36,1]]);
	var scales2 = POLYLINE([[36,1],[36+0.375*2,1],
		[36+0.375*2,4],[36,4],[36,1]]);
	var scales3 = POLYLINE([[36,1],[36+0.375*3,1],
		[36+0.375*3,4],[36,4],[36,1]]);
	var scales4 = POLYLINE([[36,1],[36+0.375*4,1],
		[36+0.375*4,4],[36,4],[36,1]]);
	
	var scales5 = POLYLINE([
		[36,1],[36+0.375*5,1],
		[36+0.375*5,4],[36,4],[36,1]]);
	var scales6 = POLYLINE([[36,1],[36+0.375*6,1],
		[36+0.375*6,4],[36,4],[36,1]]);
	var scales7 = POLYLINE([[36,1],[36+0.375*7,1],
		[36+0.375*7,4],[36,4],[36,1]]);
	var scales8 = POLYLINE([[36,1],[36+0.375*8,1],
		[36+0.375*8,4],[36,4],[36,1]]);


	model.push(STRUCT([scales1,scales2,scales3,scales4,
		scales5,scales6,scales7,scales8]));


	//Assemblo tutti i modelli in uno
	var modello = STRUCT(model);

	exports.modello = COLOR([0,0,0])(modello);

}(this));


DRAW(modello);