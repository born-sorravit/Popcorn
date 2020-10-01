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
                <img class="card-img-top logo carouselPoster"  src="${doc.data().poster1}" alt="" id="tennet">
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
            <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="" >                
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="" >
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
            <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="">
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="">
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="">                
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="">
            </ons-carousel-item>
        </ons-carousel>
            </div>`;
            $('#trends').append(row);
        });
    });

    db.collection("poc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
            <ons-carousel swipeable auto-scroll overscrollable id="carousel"
            style="text-align: center; background-color: black;" item-width="150px">
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="" >
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="">                
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="">
            </ons-carousel-item>
            <ons-carousel-item>
            <img class="card-img-top logo sizeposter" src="${doc.data().poster5}" alt="">
            </ons-carousel-item>
        </ons-carousel>
            </div>`;
            $('#poc').append(row);
        });
    });


    // db.collection("tennet").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         var row = `<div class="text-center">



    //         <span class="list-item__title titleDetail" src="${doc.data().poster}"></span>
    //         <span class="list-item__subtitle" src="${doc.data().story}"></span>
    //         </div>`;
    //         $('#tennet').append(row);
    //     });
    // });


    db.collection("tennet").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `
        <img class="card-img-top" src="${doc.data().poster}">
        <div class="card-body">
            <h4 class="card-title">${doc.data().title}(${doc.data().year})</h4>
            <p class="card-text">${doc.data().title}(${doc.data().story}</p>
        </div>
    </div>`
            $("#watchtennet").append(row);

        });
    });

})



document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id);
    if (page.id === 'page1') {
        page.querySelector('#tennet').onclick = function() {
            document.querySelector('#myNavigator').pushPage('/views/blackwidow.html');

        };
    } else if (page.id === 'bw' || page.id === 'bb') {
        $('#back').show();
        document.querySelector('ons-back-button').onclick = function(event) {
            document.querySelector('#myNavigator').popPage();
        };

    }

});