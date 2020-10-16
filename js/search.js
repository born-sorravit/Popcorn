$(function() {
    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="col-4 areaMovie center" onclick="openHome()">
                            <div class="user_thumbnail margin-15">
                                <img src="${doc.data().img}" alt="" class="searchPoster mt-5"> 
                            </div>
                            <div class="username" id="user_2_name">${doc.data().title}</div>
                        </div>
                `;
            $('#listMovie').append(row);
        });
    });

    $("#carouselSearch ons-carousel-item .button").click(function() {
        const category = $(this).attr('id')
        getmovieCategory(category)
    })
});




function Src() {

    const result = document.getElementById('Srcname').value;
    $('#listMovie').empty();
    db.collection("action").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const titleMovie = doc.data().title;

            if (titleMovie.indexOf(result) != -1) {
                var row = `<div class="areaMovie" onclick="openHome()">
                                <div class="user_thumbnail">
                                    <img src="${doc.data().img}" alt="" class="searchPoster"> 
                                </div>
                                <div class="username" id="user_2_name">${doc.data().title}</div>
                            </div>

                `;
                $('#listMovie').append(row);
            }

        });
    });

}


function getmovieCategory(Type) {
    $('#listMovie').empty();
    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const typeMovie = doc.data().type;
            if (typeMovie === Type) {
                var row = `<div class="areaMovie" onclick="openHome()">
                                <div class="user_thumbnail">
                                    <img src="${doc.data().img}" alt="" class="searchPoster"> 
                                </div>
                                <div class="username" id="user_2_name">${doc.data().title}</div>
                            </div>

                `;
                $('#listMovie').append(row);
            }

        });
    });
}