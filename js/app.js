document.addEventListener('init', function(event) {
        var page = event.target;
        console.log(page.id);
        if (page.id === 'page1') {
            page.querySelector('#list').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/blackwidow.html');
            };
            // } else if (page.id === 'tennet' || page.id === 'tennet') {
            //     document.querySelector('ons-back-button').onclick = function(event) {
            //         document.querySelector('#myNavigator').popPage();
        };

    }

);