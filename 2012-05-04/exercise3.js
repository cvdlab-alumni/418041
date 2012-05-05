/*
 * EXERCISE 3 - Produce the model of horizontal 
 * and vertical stabilizers (local coordinate system).
 */

(function (exports){


 	var domain = INTERVALS(1)(40);
 	var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
 	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([50,1,1]);

 	// Stabilizzatore Verticale
	var p0 = [[0.8,0,-0.2],[0.7,0,0.9],[-0.1,0,1.8],[-2,0,2],
		[-1.2,0,-0.5],[0.8,0,-0.2]];
	var k0 = [0,0,0,1,2,3,4,4,4];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//DRAW(MAP(c0)(domain));

	var p1 = [p0[0],p0[0]];
	var c1 = BEZIER(S0)(p1);

	var p2 = [p0[0],p0[0]];
	var vert1 = BEZIER(S1)([c0,c1]);
	//vert11 = MAP(vert1)(domain2);
	//DRAW(vert11);

	var dist = 0.1;
	var p0 = [[0.8,dist,-0.2],[0.7,dist,0.9],[-0.1,dist,1.8],
		[-2,dist,2],[-1.2,dist,-0.5],[0.8,dist,-0.2]];
	var k0 = [0,0,0,1,2,3,4,4,4];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//DRAW(MAP(c0)(domain));

	var p1 = [p0[0],p0[0]];
	var c1 = BEZIER(S0)(p1);

	var p2 = [p0[0],p0[0]];
	var vert2 = BEZIER(S1)([c0,c1]);
	//vert12 = MAP(vert2)(domain2);
	//DRAW(vert12);


	var vert = BEZIER(S2)([vert1,vert2]);
	vert = MAP(vert)(domain3);
	//DRAW(vert);


	// Stabilizzatori Orizzontali

	// Sx
 	var domain = INTERVALS(1)(40);
 	var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
 	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([50,1,1]);

	var p0 = [[0.7,0,0],[0.6,-1.8,0],[-1.2,-2,0],
		[-1.3,-1.8,0],[-1.2,-0.5,0],[-0.3,0,0],[0.7,0,0]];
	var k0 = [0,0,0,1,2,3,4,5,5,5];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//DRAW(MAP(c0)(domain));

	var p1 = [p0[0],p0[0]];
	var c1 = BEZIER(S0)(p1);

	var p2 = [p0[0],p0[0]];
	var oriz1 = BEZIER(S1)([c0,c1]);
	//oriz11 = MAP(oriz1)(domain2);
	//DRAW(oriz11);

	var dist = 0.05;
	var p0 = [[0.7,0,dist],[0.6,-1.8,dist],[-1.2,-2,dist],
		[-1.3,-1.8,dist],[-1.2,-0.5,dist],[-0.3,0,dist],[0.7,0,dist]];
	var k0 = [0,0,0,1,2,3,4,5,5,5];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//DRAW(MAP(c0)(domain));

	var p1 = [p0[0],p0[0]];
	var c1 = BEZIER(S0)(p1);

	var p2 = [p0[0],p0[0]];
	var oriz2 = BEZIER(S1)([c0,c1]);
	//oriz12 = MAP(oriz2)(domain2);
	//DRAW(oriz12);

	var orizzl = BEZIER(S2)([oriz1,oriz2]);
	orizzl = MAP(orizzl)(domain3);
	//DRAW(orizzl);

	//Dx

	var p0 = [[0.7,0,0],[0.6,1.8,0],[-1.2,2,0],
		[-1.3,1.8,0],[-1.2,0.5,0],[-0.3,0,0],[0.7,0,0]];
	var k0 = [0,0,0,1,2,3,4,5,5,5];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//DRAW(MAP(c0)(domain));

	var p1 = [p0[0],p0[0]];
	var c1 = BEZIER(S0)(p1);

	var p2 = [p0[0],p0[0]];
	var oriz1 = BEZIER(S1)([c0,c1]);
	//oriz11 = MAP(oriz1)(domain2);
	//DRAW(oriz11);

	var dist = 0.05;
	var p0 = [[0.7,0,dist],[0.6,1.8,dist],[-1.2,2,dist],
		[-1.3,1.8,dist],[-1.2,0.5,dist],[-0.3,0,dist],[0.7,0,dist]];
	var k0 = [0,0,0,1,2,3,4,5,5,5];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//DRAW(MAP(c0)(domain));

	var p1 = [p0[0],p0[0]];
	var c1 = BEZIER(S0)(p1);

	var p2 = [p0[0],p0[0]];
	var oriz2 = BEZIER(S1)([c0,c1]);
	oriz12 = MAP(oriz2)(domain2);
	//DRAW(oriz12);

	var orizzr = BEZIER(S2)([oriz1,oriz2]);
	orizzr = MAP(orizzr)(domain3);
	//DRAW(orizzr);


	exports.stabilizzatori = COLOR([1,250/255,250/255])(STRUCT([T([1])([-0.05])(vert),
		T([2])([0.3])(orizzl),
			T([2])([0.3])(orizzr)]));


 }(this));

 DRAW(stabilizzatori);