/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let profile = {
    name: "Daniel Romero",
    photo: "images/Daniel.png",
    favoriteFoods: ["Tacos", "Tamales", "Picaditas"],
    hobbies: ["Learn Nwe things", "Play Guitar", "eat new food", "meet new people"],
    placesLived: [{
            place: "Monterry, MExico",
            timeLived: 4
        },
        {
            place: "Morelos Mexico",
            timeLived: 20
        },
        {
            place: "Veracruz, Mexico",
            timeLived: 2
        },
        {
            place: "Puebla, Mexico",
            timeLived: 3
        },
    ]
}

/* OUTPUT */

name_out = document.getElementById("name");
name_out.innerHTML = profile.name;
photo_out = document.getElementById("photo");
photo_out.setAttribute("src", profile.photo);
photo_out.width = 240;
photo_out.height = 300;
foodList = profile.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}

hobbiesList = profile.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}


let placesOut = "";
place = profile.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}