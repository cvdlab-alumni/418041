/*
 * EXERCISE 1 - Produce the model of a single wing in a 
 * local coordinate system.
 */

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

DRAW(singleWingSx);