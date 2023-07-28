//Condition IF
let age = prompt('Saisir votre age');

if (age <= 14) {
    alert('Enfants');
}else if(age > 14 & age <= 25){
    alert('Adolescents');
}else if(age > 25 & age <= 64){
    alert('Adultes');
}
else{
    alert('Ainés');
}

//Condition SWITCH
/*let vehicule = prompt('Quel vehicule souhaitez-vous ? Peugeot, BMW, Ferrari')

let km = prompt('Combien de KM souhaitez-vous faire ?')

const prix = {
    peugeot: 0.4,
    bmw: 0.6,
    ferrari: 0.8,
};

switch (vehicule){
    case 'Peugeot': {
        alert('Vous payerez : ' + prix.peugeot * km + ' € ');
        break;
    }
    case 'BMW': {
        alert('Vous payerez : ' + prix.bmw * km + ' € ');
        break;
    }
    case 'Ferrari': {
        alert('Vous payerez : ' + prix.ferrari * km + ' € ');
        break;
    }
    default:
        alert('Veuillez choisir un vehicule proposé dans la liste')
}*/