// DRAWING A CHESS QUEEN

!(function (exports){
	var queen = [];	
	var domain2 = DOMAIN([[0,1],[0,2*PI]])([40,70]);

	var r = -1.3;
	var p0 = [[5+r,0,0], [5.2+r,0,0], [5.2+r,0,0.5], [4.4+r,0,0.6]];
	var k0 = [0,0,0,1,2,2,2];
	var c0 = NUBS(S0)(2)(k0)(p0);
	var m0 = ROTATIONAL_SURFACE(c0);
	var s0 = MAP(m0)(domain2);	
	queen.push(s0);

	var d1 = 0.5;
	var p1 = [[4.4+r,0,0.6],[4.7+r,0,0.6],[4.8+r,0,1],
		[4.7+r,0,1.2],[4.5+r,0,1.3],[3.3+d1+r,0,1.7],[3.25+d1+r,0,1.71],[3.25+d1+r,0,2]];
	var k1 = [0,0,0,1,2,3,4,5,6,6,6];
	var c1 = NUBS(S0)(2)(k1)(p1);
	var m1 = ROTATIONAL_SURFACE(c1);
	var s1 = MAP(m1)(domain2);	
	queen.push(s1);

	var p2 = [[3.25+d1+r,0,2],[2.9+d1+r,0,2]];
	var c2 = BEZIER(S0)(p2);
	var m2 = ROTATIONAL_SURFACE(c2);
	var s2 = MAP(m2)(domain2);	
	queen.push(s2);

	var p3 = [[2.9+d1+r,0,2],[2.1+d1+r,0,4],[1.8+d1+r,0,8],[2+d1+r,0,10]];
	var k3 = [0,0,0,1,2,2,2];
	var c3 = NUBS(S0)(2)(k3)(p3);
	var m3 = ROTATIONAL_SURFACE(c3);
	var s3 = MAP(m3)(domain2);	
	queen.push(s3);

	var p4 = [[2+d1+r,0,10],[2.9+d1+r,0,10],
		[3+r+d1,0,10.2], [2.9+r+d1,0,10.4], [2.3+r+d1,0,10.45]];
	var k4 = [0,0,0,1,2,3,3,3];
	var c4 = NUBS(S0)(2)(k4)(p4);
	var m4 = ROTATIONAL_SURFACE(c4);
	var s4 = MAP(m4)(domain2);	
	queen.push(s4);	

	var p5 = [[2.3+d1+r,0,10.45],[2.4+d1+r,0,10.45],
		[2.45+r+d1,0,10.65], [2.4+r+d1,0,10.86], [1.8+r+d1,0,10.85]];
	var k5 = [0,0,0,1,2,3,3,3];
	var c5 = NUBS(S0)(2)(k5)(p5);
	var m5 = ROTATIONAL_SURFACE(c5);
	var s5 = MAP(m5)(domain2);	
	queen.push(s5);	

	var p6 = [[1.8+d1+r,0,10.85],[1.8+d1+r,0,11.15]];
	var c6 = BEZIER(S0)(p6);
	var m6 = ROTATIONAL_SURFACE(c6);
	var s6 = MAP(m6)(domain2);	
	queen.push(s6);

	var p7 = [[1.8+d1+r,0,11.15],[1.9+d1+r,0,11.15],
		[1.95+r+d1,0,11.25], [1.9+r+d1,0,11.35], [1.8+r+d1,0,11.35]];
	var k7 = [0,0,0,1,2,3,3,3];
	var c7 = NUBS(S0)(2)(k7)(p7);
	var m7 = ROTATIONAL_SURFACE(c7);
	var s7 = MAP(m7)(domain2);	
	queen.push(s7);	

	var d2 = -0.4;
	var p8 = [[1.8+d1+r,0,11.35],[1.8+d1+r,0,12+d2],
		[2.2+r+d1,0,13+d2], [3.2+r+d1,0,13.7+d2]];
	var k8 = [0,0,0,1,2,2,2];
	var c8 = NUBS(S0)(2)(k8)(p8);
	var m8 = ROTATIONAL_SURFACE(c8);
	var s8 = MAP(m8)(domain2);	
	queen.push(s8);	

	var p9 = [[3.2+r+d1,0,13.7+d2], [3.3+d1+r,0,13.8+d2], 
		[3.25+d1+r,0,13.85+d2], [3.1+d1+r,0,13.8+d2], [1.8+d1+r,0,13.4+d2]];
	var k9 = [0,0,0,1,2,3,3,3];
	var c9 = NUBS(S0)(2)(k9)(p9);
	var m9 = ROTATIONAL_SURFACE(c9);
	var s9 = MAP(m9)(domain2);	
	queen.push(s9);	

	var sphereSurface = function (r, n) {  
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
	  return MAP(mapping)(domain);
	};

	var dome = sphereSurface(1.4,40);
	queen.push(T([2])([13.4+d2])(dome));

	var sphere = sphereSurface(0.4,20);
	queen.push(T([2])([15.1+d2])(sphere));

	var base = DISK(3.8)([50,2]);
	queen.push(base);

	// EXPORT THE MODEL
	var struct1 = COLOR([152/255,118/255,84/255])(STRUCT(queen));
	exports.scmodel = struct1;

}(this));