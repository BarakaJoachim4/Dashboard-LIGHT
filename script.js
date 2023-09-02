let allumage=0;


//Demarrage/arrêt//
function demarrage(){
    var bouton=document.getElementById("power-bouton");
    console.log(bouton.src);
    if(allumage==0 ){
        allumage=1;
        //demarrage automatique//
        
        let h=setInterval (function(){
            //console.log("Salutation");
            //affichage montre
            afficher_montre();
            //afficher_salutation
            afficher_salutation();
            //allumer_lampes
            allumer_lampes();
        }, 1000);
        bouton.src="images/power-stop.png";
    } else { 
        allumage=0;
        bouton.src="images/power-start.png";
        clearInterval(h);
    }
}
//AffichageMontre//
function afficher_montre(){
    var d=new Date();
    var heure=d.getHours();
    var min=d.getMinutes();
    var sec=d.getSeconds();
    document.getElementById("heure").innerHTML=heure;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconde").innerHTML=sec;
}
//AffichageSalutation//
function afficher_salutation(){
    var d=new Date();
    var heure=d.getHours();
    if(heure<12){
        document.getElementById("salutation").innerHTML="Bonjour";
    } else if(heure>=12 && heure<16){
        document.getElementById("salutation").innerHTML="Bon apres-midi";
    } else {
        document.getElementById("salutation").innerHTML="Bon soir";
    }
}
//Allumagelampes//
function allumer_lampes(){
    var d=new Date();
    var sec=d.getSeconds();
    if(sec%2==0){
        document.getElementById("lamps1").src="images/traffic-green.png";
    } else{
        document.getElementById("lamps1").src="images/traffic-red.png";
    }
}
//Affichage_heure_numerique//
let widgets_heure=1;
function afficher_widgets_heure(){
    if(widgets_heure==1){
        widgets_heure=0;
        document.getElementById("ctrl_heure").src="images/toggle-off.png";
        document.getElementById("ctrl_hours").style.display="none";
    } else{
        widgets_heure=1;
        document.getElementById("ctrl_heure").src="images/toggle-on.png";
        document.getElementById("ctrl_hours").style.display="block";
    }
}