function Spaceship(n,h)
{
	this.name = n;
	this.health = h;
}

var SpaceRacer = new Spaceship("SpaceRacer",10);
var Trailmore = new Spaceship("Constilation",50);
var Beast = new Spaceship("Beast",30);
var Damage = new  Spaceship("Damage",20);

SpaceRacer.name = "SpaceDrifter";

showname(SpaceRacer);

Damage.life = 4;

Spaceship.prototype.fly = function() {
Spaceship.speed = 5;
Spaceship.speed + 1
};

function shoot()
{
   Damage.life - 1;
}

function showname(Name)
{
document.getElementById("spaceship").innerHTML += Name.name;
}

document.getElementById("spaceship").innerHTML += " " +Spaceship.name;

for (var prop in SpaceRacer) {
      	
      	document.getElementById("disp").innerHTML += (" 1. " + prop + " = " + Trailmore[prop] + "<br>");

        document.getElementById("disp").innerHTML += (" 2. " + prop + " = " + SpaceRacer[prop] + "<br>");

        document.getElementById("disp").innerHTML += (" 3. " + prop + " = " + Beast[prop] + "<br>");

        document.getElementById("disp").innerHTML += (" 4. " + prop + " = " + Damage[prop] + "<br>");
    }
