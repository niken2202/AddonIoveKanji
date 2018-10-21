// Initialize Firebase

var config = {
    apiKey: "AIzaSyDHc28T74L7bhKdS3tI_uiC9SvvgpAZub0",
    authDomain: "ilovekanji-fa097.firebaseapp.com",
    databaseURL: "https://ilovekanji-fa097.firebaseio.com",
    projectId: "ilovekanji-fa097",
    storageBucket: "ilovekanji-fa097.appspot.com",
    messagingSenderId: "565821302386"
};
firebase.initializeApp(config);
var dataWord = "";
var index = 0;
var Kanji = document.getElementById("text");
var Mean = document.getElementsByClassName("mm")[0];
var On = document.getElementsByClassName("on")[0];
var Kun = document.getElementsByClassName("kun")[0];
var example = document.getElementsByClassName("example")[0];
        
  
loadWord("");
function loadWord(type) {
    if (type == 'up') {
        index++;
    } else {
        if (index > 0)
            index--;
    }
    var wordRef = firebase.database().ref().child(index);
    wordRef.once('value', function (data) {
        Kanji.innerText = data.val().Kanji;
        Mean.innerText = data.val().Mean;
        On.innerText = "On: "+data.val().On;
        Kun.innerText = "Kun: "+data.val().Kun.replace( /\s\s+/g,',');
        example.innerText = data.val().Example;
    })
   
}

/*Add listener */
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        loadWord("up");
    }
});
document.addEventListener('keydown', function (event) {
    if (event.keyCode ==32 ) {
        loadWord("up");
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        loadWord("down");
    }
});

var element = document.getElementsByClassName("control-right")[0];
element.addEventListener("click", function () {
    loadWord("up");
});

document.getElementsByClassName("control-left")[0].addEventListener("click", function () {
    loadWord("down");
});