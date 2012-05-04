/*
 * EXERCISE 2 - Produce the model of a single wing in a
 * local coordinate system.
 */


 (function(exports){

 	var domain = INTERVALS(1)(30);

	var controls = [[0,1.5/2,-0.05],[0,0,0],[0,0,0.2],[0,0,1],[0,1.5/2,1.5],
	[0,1.5,1],[0,1.5,0.2],[0,1.5,0],[0,1.5/2,-0.05]];
	var knots = [0,0,0,1,2,3,4,5,6,7,7,7];
	var c1 = NUBS(S0)(2)(knots)(controls);
	var curve1 = MAP(c1)(domain);
	DRAW(curve1);



 }(this));