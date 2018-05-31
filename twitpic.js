// TwitPic v0.3
// https://github.com/mh0x/twitpic

(function() {

    var engine = location.hostname;

    if (engine.match(/^(www|images)\.google\.[a-z]{2,3}(\.[a-z]{2})?$/i)) {
        googleSearch();
    } else if (engine.match(/^(www.)?tineye\.com$/i)) {
        tineyeSearch();
    } else {
        error('unknown search engine', engine);
    }

    function googleSearch() {
        var button = getElem('gs_si0');
        if (button) {
            button.click();
            setTimeout(function() { search('qbf', 'qbui'); }, 100);
        }
    }

    function tineyeSearch() {
        search('url_form', 'url_box');
    }

    function search(form, input) {
        var form = getElem(form);
        if (form) {
            var input = getElem(input);
            if (input) {
                var url = getUrl();
                if (url) {
                    input.value = url;
                    form.submit();
                }
            }
        }
    }

    function getUrl() {
        var user = prompt('Enter a Twitter username:');
        if (user != null) {
            user = (user[0] == '@' ? user.substr(1) : user).toLowerCase();
            if (user && user.length <= 15 && user.match(/^[a-z0-9_]+$/i)) {
                return 'https://twitter.com/' + user + '/profile_image?size=original';
            }
            error('invalid username', user);
        }
    }

    function getElem(id) {
        var elem = document.getElementById(id);
        if (elem) {
            return elem;
        }
        error('cannot find page element', '#' + id);
    }

    function error(msg, str) {
        alert('error: ' + msg + (str ? ': \'' + str + '\'' : ''));
    }

})();
