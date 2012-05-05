/*
 * EXERCISE 3 - Produce the model of horizontal 
 * and vertical stabilizers (local coordinate system).
 */

 (function (exports){


 	var domain = INTERVALS(1)(40);
 	var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

 	// Stabilizzatore Verticale
	var p0 = [[0,1.5/2,-0.05],[0,0,0],[0,0,0.2],[0,0,1.5],[0,1.5/2,2],
		[0,1.5,1.5],[0,1.5,0.2],[0,1.5,0],[0,1.5/2,-0.05]];
	var k0 = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c0 = NUBS(S0)(2)(k0)(p0);


 }(this));