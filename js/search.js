var firebaseConfig = {
    apiKey: "AIzaSyDyXjr-BUDZTM5MVKdQvDVMlINCofdTFlo",
    authDomain: "popcorn-9afb7.firebaseapp.com",
    databaseURL: "https://popcorn-9afb7.firebaseio.com",
    projectId: "popcorn-9afb7",
    storageBucket: "popcorn-9afb7.appspot.com",
    messagingSenderId: "787336592475",
    appId: "1:787336592475:web:4b54b4d16cb39e033f537e",
    measurementId: "G-9JXPL486H7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

$(function() {

    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<ons-col onclick="openHome()">
                <div class="user_thumbnail">
                                <img src="${doc.data().img}" alt="" class="searchPoster"> 
                            </div>
                            
                </ons-col>

               `;
            $('#list').append(row);
        });
    });

});

function Src() {

    const result = document.getElementById('Srcname').value;
    console.log(result);

    $('#list').empty();
    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const titleMovie = doc.data().title;

            if (titleMovie.indexOf(result) != -1) {
                var row = `<ons-col onclick="openHome()">
                <div class="user_thumbnail">
                                <img src="${doc.data().img}" alt="" class="searchPoster"> 
                            </div>
                            <div class="username" id="user_2_name">${doc.data().title}</div>
                </ons-col>

               `;
                $('#list').append(row);
            }

        });
    });

}