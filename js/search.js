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

    db.collection("John Wick").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
            <ons-carousel swipeable auto-scroll overscrollable id="carousel"
                style="text-align: center; background-color: black;">
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().img}" alt="">
                </ons-carousel-item>
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().title}" alt="">                
                </ons-carousel-item>
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().year}" alt="">
                </ons-carousel-item>
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().hour}" alt="">
                </ons-carousel-item>
            </ons-carousel>
            </div>`;
            $('#list').append(row);
        });
    });

    db.collection("Venom").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
            <ons-carousel swipeable auto-scroll overscrollable id="carousel"
            style="text-align: center; background-color: black;" item-width="150px">
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().img}" alt="" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().title}" alt="" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().year}" alt="" >                
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().hour}" alt="" >
            </ons-carousel-item>
        </ons-carousel>
            </div>`;
            $('#continue').append(row);
        });
    });
    
})