var db = firebase.firestore();


$(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            console.log(`User with email ${email} signed in`);
            window.location.href = "../index.html";
        } else {

        }
    });

    db.collection("logo").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center pd-15">
                        <img class="card-img-top logo" src="${doc.data().popcornlogo}" alt="">
                       </div>`;
            $('#list').append(row);
        });
    });

    $('#signinemail').click(function() {
        var email = $('#email').val();
        var password = $('#password').val();
        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            $('#errormessage').text(errorMessage);
        });
    })

    $('#signinGoogle').click(function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithRedirect(provider);

        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            $('#errormessage').text(errorMessage);
        });

    });

})