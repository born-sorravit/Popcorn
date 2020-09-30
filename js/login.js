$(function() {
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

    db.collection("logo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center pd-15">
                        <img class="card-img-top logo" src="${doc.data().popcornlogo}" alt="">
                       </div>`;
            $('#list').append(row);
        });
    });

})