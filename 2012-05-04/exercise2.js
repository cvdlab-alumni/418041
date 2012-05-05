/*
 * EXERCISE 2 - Produce the model of a single wing in a
 * local coordinate system.
 */

 (function (exports){

 	var domain = INTERVALS(1)(40);
 	var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

	var p0 = [[0,1.5/2,-0.05],[0,0,0],[0,0,0.2],[0,0,1.5],[0,1.5/2,2],
		[0,1.5,1.5],[0,1.5,0.2],[0,1.5,0],[0,1.5/2,-0.05]];
	var k0 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c0 = NUBS(S0)(2)(k0)(p0);

	//var curve2 = MAP(c0)(domain);
	//DRAW(curve2);

	var d1 = 4;
	var p1 = [[0+d1,1.5/2,0.05+0.2],[0+d1,0.1,0.1+0.2],[0+d1,0.1,0.3+0.2],[0+d1,0.1,1.3+0.2],[0+d1,1.5/2,1.8+0.2],
		[0+d1,1.4,1.3+0.2],[0+d1,1.4,0.3+0.2],[0+d1,1.4,0.1+0.2],[0+d1,1.5/2,0.05+0.2]];
	var k1 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c1 = NUBS(S0)(2)(k1)(p1);

	//var curve2 = MAP(c1)(domain);
	//DRAW(curve2);

	var d3 = 7;
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

	//Tail2
	var domain = INTERVALS(1)(40);
	var d2 = 10;
	var p4 = [[0+d2,1.5/2,0.6+0.7],[0+d2,0.6,0.6+0.7],[0+d2,0.6,1+0.7],[0+d2,1.5/2,1.3+0.60],
		[0+d2,0.9,1+0.7],[0+d2,0.9,0.6+0.7],[0+d2,1.5/2,0.6+0.7]];

	var k4 = [0,0,0,1,2,3,4,5,5,5];
	var c4 = NUBS(S0)(2)(k4)(p4);
	
	//var curve2 = MAP(c4)(domain);
	//DRAW(curve2);

	// Fusoliera
	var fusoliera = BEZIER(S1)([c0,c1,c3,c4]);
	fusoliera = MAP(fusoliera)(domain2);

	// Chiudo la coda
	var d6 = 10
	var p6 = [p4[0],p4[0]];
	var c6 = BEZIER(S0)(p6);
	var surf0 = BEZIER(S1)([c4,c6]);
	surf0 = MAP(surf0)(domain2);

	// Muso
	var p4 = p1.map(function(p) {return [p[0]-4.3, p[1], p[2]]; });
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
	var elica = T([0,1,2])([-0.7,0.75,1.4])(R([1,2])([PI/8])(STRUCT([cil,pala1,pala2])));

	// Carrello Post
	var carrPost = T([0,1,2])([10,1.5/2+0.025,0.9])(R([0,1])([PI])(
	STRUCT([
		T([0,2])([0.15,0.15])(R([0,2])([PI/3])(CUBOID([0.05,0.05,0.7]))),
		,T([0,2])([0.35,0.25])(CUBOID([0.05,0.05,0.08]))
		])));
	
	// Carrello Ant

	var as1 = T([0,1])([0,0])(CUBOID([0.05,0.05,0.8]));
	var as2 = T([0,1])([0,0])(R([0,2])([-PI/4])(CUBOID([0.05,0.05,1.1])));
	var as3 = CUBOID([0.025,1.2,0.025]);
	var ruotaSx = T([1])([-0.1])(S([0,1,2])([0.4,0.4,0.4])(R([1,2])([PI/2])(TORUS_SOLID([0.1, 0.9])([12,8,8]))));
	var ruotaDx = T([1])([0.25+1.2])(ruotaSx);
	var t = T([1])([1.2]);
	var st1 = COLOR([16/255,78/255,139/255])(STRUCT([as1,as2,as3,t,as1,as2]));
	var st2 = COLOR([0,0,0])(STRUCT([ruotaSx,ruotaDx]));
	var cerchio1 = T([0,1,2])([-0.52/2,-0.1,-0.52/2])(CUBOID([0.52,0.04,0.52]));
	var cerchio2 = T([0,1])([0,1.45])(cerchio1);
	var st3 = COLOR([255/255,211/255,155/255])(STRUCT([cerchio1,cerchio2]));
	var carrAnt = T([0,1,2])([1,0.1,-0.7])(STRUCT([st1,st2,st3]));


	// Cupolino



	exports.fusoliera = STRUCT([fusoliera,elica,carrPost,carrAnt]);	


 }(this));

DRAW(fusoliera);