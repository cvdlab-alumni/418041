/*
 * EXERCISE 5 - Model a reasonably simplified airstrip, 
 * and put there your aircraft model.
 */

 (function (exports){

	(function (exports){

		// Ala SX
		var domain = INTERVALS(1)(50);
		var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

		var p0 = [[1.4,0,0],[1.4,0,0.4],[0.2,0,0.3],
			[-0.4,0,0],[-0.4,0,-0.1],[1.3,0,-0.1],[1.4,0,0]];

		var d1 = 0.5;	
		var p1 = [[2,d1,0],[1.6,d1,0.3],[0.4,d1,0.2],
			[-0.6,d1,0],[-0.6,d1,-0.1],[1.8,d1,-0.1],[2,d1,0]];

		var d2 = 4;
		var p2 = [[2,d2,0],[1.6,d2,0.3],[0.4,d2,0.2],
			[-0.6,d2,0],[-0.6,d2,-0.1],[1.8,d2,-0.1],[2,d2,0]];

		var d3 = 4.5;
		var p3 = [[2,d3,0],[1.6,d3,0.2],[0.4,d3,0.1],
			[-0.6,d3,0],[-0.6,d3,-0.1],[1.8,d3,-0.1],[2,d3,0]];

		var d4 = 4.7;
		var p4 = [[2,d4,0],[1.6,d4,0.1],[0.4,d4,0],
			[-0.6,d4,0],[-0.6,d4,-0.1],[1.8,d4,-0.1],[2,d4,0]];

		var d5 = 4.8;
		var p5 = [[2,d5,0],[1.6,d5,0.05],[0.4,d5,0],
			[-0.6,d5,0],[-0.6,d5,0],[1.8,d5,-0.1],[2,d5,0]];

		var d6 = 5.4;
		var p6 = [[2,d6-0.6,0],[1.9,d6+0.2,0],[0.4,d6+0.2,0],
			[-0.6,d6-1.8,0],[-0.6,d6-0.4,0],[1.9,d6+0.4,0],[2,d6-0.6,0]];

		
		var c0 = BEZIER(S0)(p0);
		var c1 = BEZIER(S0)(p1);
		var c2 = BEZIER(S0)(p2);
		var c3 = BEZIER(S0)(p3);
		var c4 = BEZIER(S0)(p4);
		var c5 = BEZIER(S0)(p5);
		var c6 = BEZIER(S0)(p6);

		var singleW = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6]);
		var singleWing = MAP(singleW)(domain2);

		// Disegno le braccia dell'ala
		var asta1 = CUBOID([1.7,0.13,0.05]);
		var asta2 = R([0,1])([PI/6])(asta1);
		var struct = T([0,1])([1,-(0.15/2)])(R([0,1])([PI/2.5])(STRUCT([asta1,asta2])));
		struct = T([0,2])([-0.1,0.77])(R([1,2])([-PI/7])(struct));
		struct = COLOR([16/255,78/255,139/255])(struct);


		exports.singleWingSx = STRUCT([singleWing,struct]);

		//Ala Dx

		var domain = INTERVALS(1)(50);
		var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

		var p0 = [[1.4,0,0],[1.4,0,0.4],[0.2,0,0.3],
			[-0.4,0,0],[-0.4,0,-0.1],[1.3,0,-0.1],[1.4,0,0]];

		var d1 = -0.5;	
		var p1 = [[2,d1,0],[1.6,d1,0.3],[0.4,d1,0.2],
			[-0.6,d1,0],[-0.6,d1,-0.1],[1.8,d1,-0.1],[2,d1,0]];

		var d2 = -4;
		var p2 = [[2,d2,0],[1.6,d2,0.3],[0.4,d2,0.2],
			[-0.6,d2,0],[-0.6,d2,-0.1],[1.8,d2,-0.1],[2,d2,0]];

		var d3 = -4.5;
		var p3 = [[2,d3,0],[1.6,d3,0.2],[0.4,d3,0.1],
			[-0.6,d3,0],[-0.6,d3,-0.1],[1.8,d3,-0.1],[2,d3,0]];

		var d4 = -4.7;
		var p4 = [[2,d4,0],[1.6,d4,0.1],[0.4,d4,0],
			[-0.6,d4,0],[-0.6,d4,-0.1],[1.8,d4,-0.1],[2,d4,0]];

		var d5 = -4.8;
		var p5 = [[2,d5,0],[1.6,d5,0.05],[0.4,d5,0],
			[-0.6,d5,0],[-0.6,d5,0],[1.8,d5,-0.1],[2,d5,0]];

		var d6 = -5.4;
		var p6 = [[2,d6+0.6,0],[1.9,d6-0.2,0],[0.4,d6-0.2,0],
			[-0.6,d6+1.8,0],[-0.6,d6+0.4,0],[1.9,d6-0.4,0],[2,d6+0.6,0]];

		
		var c0 = BEZIER(S0)(p0);
		var c1 = BEZIER(S0)(p1);
		var c2 = BEZIER(S0)(p2);
		var c3 = BEZIER(S0)(p3);
		var c4 = BEZIER(S0)(p4);
		var c5 = BEZIER(S0)(p5);
		var c6 = BEZIER(S0)(p6);

		var singleW = BEZIER(S1)([c0,c1,c2,c3,c4,c5,c6]);
		var singleWing = MAP(singleW)(domain2);

		// Disegno le braccia dell'ala
		var asta1 = CUBOID([1.7,0.13,0.05]);
		var asta2 = R([0,1])([PI/6])(asta1);
		var struct = T([0,1])([1,-(0.15/2)])(R([0,1])([-PI/2.5 -PI/6])(STRUCT([asta1,asta2])));
		struct = T([0,2])([-0.21,0.82])(R([1,2])([PI/7])(struct));
		struct = COLOR([16/255,78/255,139/255])(struct);

		exports.singleWingDx = STRUCT([singleWing,struct]);
		

	}(this));

 (function (exports){

 	var domain = INTERVALS(1)(40);
 	var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

	var p0 = [[0,1.5/2,-0.05],[0,0,0],[0,0,0.2],[0,0,1.5],[0,1.5/2,2],
		[0,1.5,1.5],[0,1.5,0.2],[0,1.5,0],[0,1.5/2,-0.05]];
	var k0 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//var curve2 = MAP(c0)(domain);
	//DRAW(curve2);

	var d1 = 6;
	var p1 = [[0+d1,1.5/2,0.05+0.2],[0+d1,0.1,0.1+0.2],[0+d1,0.1,0.3+0.2],[0+d1,0.1,1.3+0.2],[0+d1,1.5/2,1.8+0.2],
		[0+d1,1.4,1.3+0.2],[0+d1,1.4,0.3+0.2],[0+d1,1.4,0.1+0.2],[0+d1,1.5/2,0.05+0.2]];
	var k1 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c1 = NUBS(S0)(2)(k1)(p1);

	//var curve2 = MAP(c1)(domain);
	//DRAW(curve2);

	var d3 = 8;
	var p3 = [[0+d3,1.5/2,0.1+0.4],[0+d3,0.3,0.1+0.4],[0+d3,0.3,0.3+0.4],[0+d3,0.3,1.1+0.4],[0+d3,1.5/2,1.6+0.4],
		[0+d3,1.2,1.1+0.4],[0+d3,1.2,0.3+0.4],[0+d3,1.2,0.1+0.4],[0+d3,1.5/2,0.1+0.4]];
	var k3 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c3 = NUBS(S0)(2)(k3)(p3);

	//var curve2 = MAP(c3)(domain);
	//DRAW(curve2);

	//Tail
	var d2 = 10;
	var p2 = [[0+d2,1.5/2,0.2+0.7],[0+d2,0.4,0.2+0.7],[0+d2,0.4,0.4+0.7],[0+d2,0.4,0.9+0.7],[0+d2,1.5/2,1.3+0.65],
		[0+d2,1.1,0.9+0.7],[0+d2,1.1,0.4+0.7],[0+d2,1.1,0.2+0.7],[0+d2,1.5/2,0.2+0.7]];

	var k2 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c2 = NUBS(S0)(2)(k2)(p2);

	
	//var curve2 = MAP(c2)(domain);
	//DRAW(curve2);

	// Fusoliera
	var fusoliera = BEZIER(S1)([c0,c1,c3,c2]);
	fusoliera = MAP(fusoliera)(domain2);

	// Chiudo la coda
	var d6 = 10
	var p6 = [[0+d6,1.5/2,0.2+0.7],[0+d6,1.5/2,0.2+0.7]];
	var c6 = BEZIER(S0)(p6);
	var surf0 = BEZIER(S1)([c2,c6]);
	surf0 = MAP(surf0)(domain2);

	// Muso
	var p4 = p1.map(function(p) {return [p[0]-6.3, p[1], p[2]]; });
	var k4 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c4 = NUBS(S0)(2)(k4)(p4);

	var surf1 = BEZIER(S1)([c0,c4]);
	surf1 = MAP(surf1)(domain2);

	var p5 = p2.map(function(p) {return [p[0]-10.5, p[1], p[2]]; });
	var k5 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c5 = NUBS(S0)(2)(k5)(p5);

	var surf2 = BEZIER(S1)([c4,c5]);
	surf2 = MAP(surf2)(domain2);

	var d7 = 0.6;
	var p7 = [p5[0],p5[0]];
	var c7 = BEZIER(S0)(p7)

	var surf3 = BEZIER(S1)([c5,c7]);
	surf3 = MAP(surf3)(domain2);

	fusoliera = COLOR([16/255,78/255,139/255])(STRUCT([fusoliera, surf0, surf1, surf2, surf3]));
	
	// Elica
	// Disegno un cilindro
	var cilindroPieno = function(r,h,n,m,p,color) {
		r = r || 1;
		h = h || 1;

		n = n || r*15;

		m = m || 1;
		p = p || 1;
		color = color || [0,1,0];

		var dominio = SIMPLEX_GRID([REPEAT(n)(2*PI/n), REPEAT(m)((r)/m), REPEAT(p)(h/p) ]);
		
		var mapping = function(pt) {
			return [
				pt[2],
				pt[1]*SIN(pt[0]),
				pt[1]*COS(pt[0]),
			];
		};

		var mapped = MAP(mapping)(dominio);
		return mapped;
	};

	var cil = COLOR([139/255,71/255,38/255])(cilindroPieno(0.2,0.2,20,1));
	//DRAW(cil);

	// Pala sx
	var p4 = [[0.1,0,0],[0.1,1.5,0.3],[0.1,1.7,0],[0.1,1.5,-0.3],[0.1,0,0]];
	var k4 = [0,0,0,1,2,3,3,3];
	var c4 = NUBS(S0)(2)(k4)(p4);

	var p5 = [p4[0],p4[0]];
	var c5 = BEZIER(S0)(p5);

	//var curve2 = MAP(c4)(domain);
	//DRAW(curve2);

	var pal1 = BEZIER(S1)([c4,c5]);
	//var pal11 = MAP(pal1)(domain2);
	//DRAW(pal11);


	var p4 = [[0.19,0,0],[0.19,1.5,0.3],[0.19,1.7,0],[0.19,1.5,-0.3],[0.19,0,0]];
	var k4 = [0,0,0,1,2,3,3,3];
	var c4 = NUBS(S0)(2)(k4)(p4);

	var p5 = [p4[0],p4[0]];
	var c5 = BEZIER(S0)(p5);

	//var curve2 = MAP(c5)(domain);
	//DRAW(curve2);

	var pal2 = BEZIER(S1)([c4,c5]);
	//var pal22 = MAP(pal2)(domain2);
	//DRAW(pal22);

	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([30,1,1]);
	var pala1 = BEZIER(S2)([pal1,pal2]);
	pala1 = COLOR([1,250/255,250/255])(MAP(pala1)(domain3));
	//DRAW(pala1);

	// Pala dx
	var p4 = [[0.1,0,0],[0.1,-1.5,0.3],[0.1,-1.7,0],[0.1,-1.5,-0.3],[0.1,0,0]];
	var k4 = [0,0,0,1,2,3,3,3];
	var c4 = NUBS(S0)(2)(k4)(p4);

	var p5 = [p4[0],p4[0]];
	var c5 = BEZIER(S0)(p5);

	//var curve2 = MAP(c4)(domain);
	//DRAW(curve2);

	var pal1 = BEZIER(S1)([c4,c5]);
	//var pal11 = MAP(pal1)(domain2);
	//DRAW(pal11);


	var p4 = [[0.19,0,0],[0.19,-1.5,0.3],[0.19,-1.7,0],[0.19,-1.5,-0.3],[0.19,0,0]];
	var k4 = [0,0,0,1,2,3,3,3];
	var c4 = NUBS(S0)(2)(k4)(p4);

	var p5 = [p4[0],p4[0]];
	var c5 = BEZIER(S0)(p5);

	//var curve2 = MAP(c5)(domain);
	//DRAW(curve2);

	var pal2 = BEZIER(S1)([c4,c5]);
	//var pal22 = MAP(pal2)(domain2);
	//DRAW(pal22);

	var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([30,1,1]);
	var pala2 = BEZIER(S2)([pal1,pal2]);
	pala2 = COLOR([1,250/255,250/255])(MAP(pala2)(domain3));
	//DRAW(pala2);
	var elica = T([0,1,2])([-0.7,0.75,1.4])(STRUCT([cil,pala1,pala2]));


	// Carrello Ant


	// Carrello Post



	exports.fusoliera = STRUCT([fusoliera,elica]);	


 }(this));

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


 singleWingDx = T([0,1,2])([1.5,0.15,0.3])(singleWingDx);
 singleWingSx = T([0,1,2])([1.5,1.38,0.3])(singleWingSx);
 stabilizzatori = T([0,1,2])([9.8,1.5/2,1.6])(S([0,1,2])([0.8,0.8,0.8])(R([0,1])([PI])(stabilizzatori)));


 var airplane = STRUCT([singleWingDx,singleWingSx,fusoliera,stabilizzatori]);
 exports.airplane = airplane;


}(this));


(function (exports){

	var grass = COLOR([0,100/255,0])(CUBOID([70,30,0.1]));
	//DRAW(grass);
	var pista = T([0,1,2])([5,5,0.1])(COLOR([0.01,0.01,0.01])(CUBOID([65,20,0.05])));
	//DRAW(pista);
	var striscia = T([0,1,2])([7,7,0.3])(COLOR([0.99,0.99,0.99])(CUBOID([10,1.2,0.1])));

	var t = T([1])([1.7]);
	var strisce = STRUCT([striscia,t,striscia,t,striscia,t,striscia]);
	//DRAW(strisce);

	var strisce2 =T([1])([10])(strisce);

	var bordopista = STRUCT([
		T([0,1,2])([5,5,0.3])(COLOR([0.99,0.99,0.99])(CUBOID([65,0.5,0.1]))),
		T([0,1,2])([5,24.5,0.3])(COLOR([0.99,0.99,0.99])(CUBOID([65,0.5,0.1]))),
		T([0,1,2])([5,5,0.3])(COLOR([0.99,0.99,0.99])(CUBOID([0.5,20,0.1])))
		]);
	//DRAW(bordopista);

	var linea = T([0,1,2])([17,5+9.75,0.3])(COLOR([0.99,0.99,0.99])(CUBOID([5,0.5,0.1])));
	var t = T([0])([12]);
	var linee = STRUCT([linea,t,linea,t,linea,t,linea,t,linea]);
	//DRAW(linee);

	exports.pista = STRUCT([grass,pista,strisce,strisce2,bordopista,linee])


}(this));

DRAW(pista);
DRAW(R([0,2])([PI/20])(T([0,1,2])([15,15,9])(airplane)));