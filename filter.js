var stories = document.getElementsByClassName('userContentWrapper');
var terms = ['vucic','vučić','sns','srpska napredna stranka','maja gojkovic','srs','stefanovic','aleksandar vucic', 'sinisa mali', 'ljubiša preletačević','beli', 'saša janković', 'nenad čanak', 'vuk jeremić'];
var lastRefresh = null;


function filter_politics(timestamp) {
    if (!lastRefresh){
        lastRefresh = 0;
    }

    var newRefresh = timestamp.timeStamp;
    console.log(newRefresh - lastRefresh);
    if (newRefresh - lastRefresh >= 750 || lastRefresh === null){
        for (var story of stories) {
            html = story.innerHTML.toLowerCase();
            for (var term of terms){
                var regex_term = new RegExp(term);
                if (regex_term.test(html) === true) {
                    story.style.display = 'none';
                }
            }
        }
        lastRefresh = newRefresh;
    }

}
document.addEventListener('scroll',filter_politics);
