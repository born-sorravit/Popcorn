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

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            console.log(`User with email ${email} signed in`);

        } else {
            window.location.href = "/views/login.html";
        }
    });

    $('#signout').click(function() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
    })

    db.collection("logo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ``;
            $('#list').append(row);
        });
    });



    db.collection("carousel").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center">
                <ons-carousel-item>
                <img class="card-img-top logo carouselPoster"  src="${doc.data().img}" alt=""  id="${doc.data().id}">
                </ons-carousel-item>
            </div>`;
            console.log(doc.data().id);
            $('#carousel').append(row);
        });
    });



    db.collection("continue").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center width" >
                <ons-carousel-item width="150px">
                <img class="card-img-top logo sizeposter" src="${doc.data().img}" alt="" id="${doc.data().id}">
                </ons-carousel-item>
            </div>`;
            console.log(doc.data().id);
            $('#continue').append(row);
        });
    });

    // db.collection("continue").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         var row = `<div class="text-center">
    //         <ons-carousel swipeable auto-scroll overscrollable id="carousel"
    //         style="text-align: center; background-color: black;" item-width="150px">
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="" >
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="" >
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="" >                
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="" >
    //         </ons-carousel-item>
    //     </ons-carousel>
    //         </div>`;
    //         $('#continue').append(row);
    //     });
    // });

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

    db.collection("recommend").get().then((querySnapshot) => {
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
        
        </ons-carousel>
            </div>`;
            $('#recommend').append(row);
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