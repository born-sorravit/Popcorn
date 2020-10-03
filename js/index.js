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
    document.addEventListener('init', function(event) {
            var page = event.target;
            console.log(page.id);
            if (page.id === 'page1') {
                getmovie();
                getmovie2();
                getmovie3();

            };

        }

    );

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
                <img class="card-img-top carouselPoster"  src="${doc.data().img}" alt=""  id="${doc.data().id}">
                </ons-carousel-item>
            </div>`;
            console.log(doc.data().id);
            $('#carousel').append(row);
        });
    });


    // var bigCarousel = document.createElement('ons-carousel');
    // bigCarousel.setAttribute("swipeable", "");
    // bigCarousel.setAttribute("auto-scroll", "");
    // bigCarousel.setAttribute("overscrollable", "");
    // bigCarousel.setAttribute("item-width", "150px");
    // bigCarousel.setAttribute("id", "CarouselMovie");
    // $('#continue').append(bigCarousel);
    // console.log(bigCarousel);
    // db.collection("continue").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // var row =
    //         //     `<div class="width">
    //         //     <ons-carousel-item>
    //         //     <img class="card-img-top sizeposter" src="${doc.data().img}" alt="" id="${doc.data().id}">
    //         //     </ons-carousel-item></div>`;


    //         // console.log(row);
    //         var row = `
    //         <div id="${doc.data().id}" style="width:150px">
    //             <ons-carousel-item>
    //                 <img src="${doc.data().img}" width="100%">
    //             </ons-carousel-item>
    //         </div>`


    //         $('#CarouselMovie').append(row);
    //     });
    //     $('ons-carousel-item').click(function() {})
    // });

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



    // db.collection("recommend").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         var row = `<div class="text-center">
    //         <ons-carousel swipeable auto-scroll overscrollable id="carousel"
    //         style="text-align: center; background-color: black;" item-width="150px">
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="" >
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="" >
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="">                
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="">
    //         </ons-carousel-item>

    //     </ons-carousel>
    //         </div>`;
    //         $('#recommend').append(row);
    //     });
    // });


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
        </div>`
            $("#watchtennet").append(row);

        });
    });


})

function getmovie() {

    var continueCarousel = document.createElement('ons-carousel');
    continueCarousel.setAttribute("swipeable", "");
    continueCarousel.setAttribute("auto-scroll", "");
    continueCarousel.setAttribute("overscrollable", "");
    continueCarousel.setAttribute("item-width", "150px");
    continueCarousel.setAttribute("id", "CarouselMovie");
    $('#continue').append(continueCarousel);
    console.log(continueCarousel);

    db.collection("continue").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" >
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie').append(row);
        });
        $('img').click(function() {

            const idposter = $(this).attr('id');
            console.log(idposter);

        })



    });



    // db.collection("recommend").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         var row = `<div class="text-center">
    //         <ons-carousel swipeable auto-scroll overscrollable id="carousel"
    //         style="text-align: center; background-color: black;" item-width="150px">
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="" >
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="" >
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="">                
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="">
    //         </ons-carousel-item>

    //     </ons-carousel>
    //         </div>`;
    //         $('#recommend').append(row);
    //     });
    // });


}

function getmovie2() {

    var recommendCarousel = document.createElement('ons-carousel');
    recommendCarousel.setAttribute("swipeable", "");
    recommendCarousel.setAttribute("auto-scroll", "");
    recommendCarousel.setAttribute("overscrollable", "");
    recommendCarousel.setAttribute("item-width", "150px");
    recommendCarousel.setAttribute("id", "CarouselMovie2");
    $('#recommend').append(recommendCarousel);
    console.log(recommendCarousel);



    db.collection("recommend").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" >
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie2').append(row);
        });
        $('img').click(function() {

            const idposter = $(this).attr('id');
            console.log(idposter);

        })
    });
}

function getmovie3() {

    var trendsCarousel = document.createElement('ons-carousel');
    trendsCarousel.setAttribute("swipeable", "");
    trendsCarousel.setAttribute("auto-scroll", "");
    trendsCarousel.setAttribute("overscrollable", "");
    trendsCarousel.setAttribute("item-width", "150px");
    trendsCarousel.setAttribute("id", "CarouselMovie3");
    $('#trends').append(trendsCarousel);
    console.log(trendsCarousel);



    db.collection("trends").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" >
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie3').append(row);
        });
        $('img').click(function() {

            const idposter = $(this).attr('id');
            console.log(idposter);

        })
    });


    // db.collection("trends").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         var row = `<div class="text-center">
    //         <ons-carousel swipeable auto-scroll overscrollable id="carousel"
    //         style="text-align: center; background-color: black;" item-width="150px">
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster2}" alt="">
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster4}" alt="">
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster1}" alt="">                
    //         </ons-carousel-item>
    //         <ons-carousel-item>
    //         <img class="card-img-top logo sizeposter" src="${doc.data().poster3}" alt="">
    //         </ons-carousel-item>
    //     </ons-carousel>
    //         </div>`;
    //         $('#trends').append(row);
    //     });
    // });
}