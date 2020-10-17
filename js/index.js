var db = firebase.firestore();

$(function() {
    document.addEventListener('init', function(event) {
            var page = event.target;
            if (page.id === 'page1') {
                getmovie();
                getmovie2();
                getmovie3();
            } else if (page.id === 'profile') {
                $('#signout').click(function() {
                    firebase.auth().signOut().then(function() {
                        // Sign-out successful.
                    }).catch(function(error) {
                        // An error happened.
                    });
                })
            }

        }

    );

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            console.log(`User with email ${email} signed in and yourname ${user.displayName}`);
            $("#Myname").html(user.displayName)

        } else {
            window.location.href = "login.html";
        }
    });


    db.collection("logo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ``;
            $('#list').append(row);
        });
    });

    db.collection("carousel").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center NewMovie">
                            <ons-carousel-item>
                            <img class="card-img-top carouselPoster"  src="${doc.data().img}" alt=""  id="${doc.data().id}">
                            </ons-carousel-item>
                        </div>`;
            $('#carousel').append(row);
        });
        $('.NewMovie img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
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

    db.collection("continue").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="continue">
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie').append(row);
        });
        $('#continue img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })


    });
}

function getmovie2() {

    var recommendCarousel = document.createElement('ons-carousel');
    recommendCarousel.setAttribute("swipeable", "");
    recommendCarousel.setAttribute("auto-scroll", "");
    recommendCarousel.setAttribute("overscrollable", "");
    recommendCarousel.setAttribute("item-width", "150px");
    recommendCarousel.setAttribute("id", "CarouselMovie2");
    $('#recommend').append(recommendCarousel);



    db.collection("recommend").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="recommend" >
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie2').append(row);
        });
        $('#recommend img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
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



    db.collection("trends").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="trends">
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie3').append(row);
        });
        $('#trends img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
    });
}

function getmovieDetail(Target) {
    console.log(Target);
    db.collection("movieDetail").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                console.log(doc.data());
                const result =
                    `<div class="text-center">
                        <img class="card-img-top carouselPoster" src="${doc.data().preview}" alt="" style="padding-top: 20px;">
                    </div>
                    <div class="container">
                        <div>
                            <div style="color: #33ccff; font-size: 20px; margin-top: 10px;"><b>${doc.data().title}</b></div>
                            <div class="row" style="color: grey; font-size: 16px; margin-top: 5px;">
                                <div class="col-8">2hr 32min PG-13 2020</div>
                                <div class="col-4 text-right"><i class="far fa-heart" style="color: white;font-size: 30px;" aria-hidden="true"></i></div>
                            </div>
                            <div style="color: white;font-size: 16px; margin-top: 5px; ">
                            ${doc.data().story}
                            </div>
                        </div>
                    </div>`
                $("#movieDetail").append(result)
            }
        });
    });
}

document.addEventListener('init', function(event) {
        var page = event.target;
        // var paagedetail = 
        if (page.id === 'page1') {

            // page.querySelector('#blackWidow').onclick = function() {
            //     document.querySelector('#myNavigator').pushPage('views/blackwidow.html');
            // };


        } else if (page.id === "blackWidow" || page.id === "jamesBond") {
            db.collection("movieDetail").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var row = `<div class="text-center">
                        <ons-carousel-item>
                        <img class="card-img-top carouselPoster"  src="${doc.data().img}" alt=""  id="${doc.data().id}">
                        </ons-carousel-item>
                    </div>`;
                    $('#carousel222').append(row);
                });
            });
        }

    }

);