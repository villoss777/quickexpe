// ==UserScript==
// @name         Quick Expe
// @namespace    gameforge.com
// @version      1
// @author       (You)
// @match        https://*.ogame.gameforge.com/game/index.php?page=ingame&component=fleetdispatch*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    const wantedSSrdm = 40;
    var quickExpe = document.createElement('button');
    quickExpe.innerHTML = "QE";
    quickExpe.setAttribute ('id', 'quickExpe');
    quickExpe.setAttribute('class','rdmbtn');

    var quickGhost = document.createElement('button');
    quickGhost.innerHTML = "GH";
    quickGhost.setAttribute('id','quickGhost');
    quickGhost.setAttribute('class','rdmbtn');

    document.getElementsByClassName('secondcol fleft')[0].appendChild(quickExpe);
    document.getElementsByClassName('secondcol fleft')[0].appendChild(quickGhost);

    document.getElementById("quickExpe").addEventListener (
        "click", sendQuickExpe, false
    );

    document.getElementById("quickGhost").addEventListener (
        "click", sendQuickGhost, false
    );

    function sendQuickExpe (event) {
        var SStoExpe = parseInt(fleetDispatcher.currentPlanet.system) + Math.floor(Math.random() * wantedSSrdm + 1) - (wantedSSrdm/2);
        fleetDispatcher.targetPlanet.system = SStoExpe;
        fleetDispatcher.targetPlanet.position = 16;
        fleetDispatcher.targetPlanet.type = 1;
        fleetDispatcher.mission = 15;
        fleetDispatcher.expeditionTime = 1;

        // fleetDispatcher.selectShip(ID DU VAISSEAU, QUANTITÉ);
        fleetDispatcher.selectShip(204,0); // Chasseur léger
        fleetDispatcher.selectShip(203,100); // Grand transporteur
        fleetDispatcher.selectShip(210,1); // Sonde
        fleetDispatcher.selectShip(213,5); // Destructeur
        fleetDispatcher.selectShip(218,1); // Faucheur
        fleetDispatcher.selectShip(219,1); // Éclaireur

        fleetDispatcher.refresh();

        document.getElementById('continueToFleet2').click();
        document.getElementById('continueToFleet3').click();
    }

    function sendQuickGhost (event) {
        var SStoExpe = parseInt(fleetDispatcher.currentPlanet.system) + Math.floor(Math.random() * wantedSSrdm + 1) - (wantedSSrdm/2);
        fleetDispatcher.targetPlanet.system = SStoExpe;
        fleetDispatcher.targetPlanet.position = 16;
        fleetDispatcher.targetPlanet.type = 1;
        fleetDispatcher.mission = 15;
        fleetDispatcher.expeditionTime = 7;

        fleetDispatcher.selectAllShips();

        fleetDispatcher.cargoDeuterium = fleetDispatcher.deuteriumOnPlanet;
        fleetDispatcher.cargoCrystal = fleetDispatcher.crystalOnPlanet;
        fleetDispatcher.cargoMetal = fleetDispatcher.metalOnPlanet;

        fleetDispatcher.refresh();

        document.getElementById('continueToFleet2').click();
        document.getElementById('continueToFleet3').click();
    }
})();

GM_addStyle(`
.rdmbtn {
    box-shadow: inset 0 1px rgba(255,255,255,.2), 0 0 0 1px rgba(0,0,0,.3);
    background-color: #375879;
	border-radius:3px;
    color:white;
	text-align:center;
    font-weight: bold;
	position: relative;
    display: inline-block;
	cursor: pointer;
	width: 30px;
	height: 30px;
	line-height: 30px;
	box-sizing: border-box;
}
`);