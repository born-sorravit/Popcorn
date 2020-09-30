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

    db.collection("moviePoster").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
            <ons-carousel swipeable auto-scroll overscrollable id="carousel"
                style="text-align: center; background-color: black;">
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().poster1}" alt="">
                </ons-carousel-item>
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().poster2}" alt="">                
                </ons-carousel-item>
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster" src="${doc.data().poster3}" alt="">
                </ons-carousel-item>
            </ons-carousel>
            </div>`;
            $('#list').append(row);
        });
    });

    db.collection("continue").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
            <ons-carousel swipeable auto-scroll overscrollable id="carousel"
            style="text-align: center; background-color: black;" item-width="150px">
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster2}" alt="" style="width: 130px; margin-left: 10px;margin-right: 10px;" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster4}" alt="" style="width: 130px;margin-left: 10px;margin-right: 10px;">
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster1}" alt="" style="width: 130px; margin-left: 10px;margin-right: 10px;">                
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster3}" alt="" style="width: 130px;margin-left: 10px;margin-right: 10px;">
            </ons-carousel-item>
        </ons-carousel>
            </div>`;
            $('#continue').append(row);
        });
    });

    db.collection("trends").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
            <ons-carousel swipeable auto-scroll overscrollable id="carousel"
            style="text-align: center; background-color: black;" item-width="150px">
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster2}" alt="" style="width: 130px; margin-left: 10px;margin-right: 10px;" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster4}" alt="" style="width: 130px;margin-left: 10px;margin-right: 10px;">
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster1}" alt="" style="width: 130px; margin-left: 10px;margin-right: 10px;">                
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo" src="${doc.data().poster3}" alt="" style="width: 130px;margin-left: 10px;margin-right: 10px;">
            </ons-carousel-item>
        </ons-carousel>
            </div>`;
            $('#trends').append(row);
        });
    });

})