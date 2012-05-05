/*
 * EXERCISE 2 - Produce the model of a single wing in a
 * local coordinate system.
 */


 (function(exports){

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
	var d2 = 12;
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
	var d6 = 12
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

	var p5 = p2.map(function(p) {return [p[0]-12.5, p[1], p[2]]; });
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

DRAW(fusoliera);