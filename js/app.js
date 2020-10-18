document.addEventListener('init', function(event) {
        var page = event.target;
        console.log(page.id);
        if (page.id === 'page1') {
            // } else if (page.id === 'tennet' || page.id === 'tennet') {
            //     document.querySelector('ons-back-button').onclick = function(event) {
            //         document.querySelector('#myNavigator').popPage();
        };

    }

);

document.querySelector('ons-tabbar').addEventListener('reactive', function(event) {
    if (event.index == 0) {
        document.querySelector('#myNavigator_search').popPage();
    } else if (event.index == 1) {
        document.querySelector('#myNavigator').popPage();
    } else if (event.index == 2) {
        document.querySelector('#Navigator_profile').popPage();
    }
})