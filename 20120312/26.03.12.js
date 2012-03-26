var cuboUnitario = CUBOID([1,1,1]);

//DISEGNO IL CUBO
DRAW(cuboUnitario);

//PER NASCONDERE IL CUBO
HIDE(cuboUnitario);

// SHOW PER VISUALIZZARE GLI OGGETTI CHE ABBIAMO NASCOSTO
//SHOW(model);

var domain = DOMAIN([[1,5]])([4]);
DRAW(domain);

HIDE(domain);

var domain = DOMAIN([[1.5,5.5]])([4]);
DRAW(domain);

HIDE(domain);

var domain1 = DOMAIN([[1.5,5.5],[1,3]])([4,2]);
DRAW(domain1);

HIDE(domain1);

var domain2 = DOMAIN([[1.5,5.5],[1,3],[0,1]])([4,2,1]);
DRAW(domain2);

HIDE(domain2);



