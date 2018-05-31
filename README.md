# TwitPic

Bookmarklet for reverse image searching Twitter profile pictures with Google
Images and TinEye.

![TwitPic Screenshot](https://github.com/mh0x/twitpic/blob/master/img/twitpic.png
"TwitPic Screenshot")


<a href="javascript:(function(){var e,n=location.hostname;function t(e,n){if((e=i(e))&&(n=i(n))){var t=function(){var e=prompt('Enter a Twitter username:');if(null!=e){if((e=('@'==e[0]?e.substr(1):e).toLowerCase())&&e.length<=15&&e.match(/^[a-z0-9_]+$/i))return'https://twitter.com/'+e+'/profile_image?size=original';r('invalid username',e)}}();t&&(n.value=t,e.submit())}}function i(e){var n=document.getElementById(e);if(n)return n;r('cannot find page element','#'+e)}function r(e,n){alert('error: '+e+(n?': \''+n+'\'':''))}n.match(/^(www|images)\.google\.[a-z]{2,3}(\.[a-z]{2})?$/i)?(e=i('gs_si0'))&&(e.click(),setTimeout(function(){t('qbf','qbui')},100)):n.match(/^(www.)?tineye\.com$/i)?t('url_form','url_box'):r('unknown search engine',n)})();" title="TwitPic Bookmarklet"><h2>Bookmarklet</h2></a>

 * Source: [twitpic.js](https://github.com/mh0x/twitpic/blob/master/twitpic.js
   "TwitPic Source")
 * Minified: [twitpic.min.js](https://github.com/mh0x/twitpic/blob/master/twitpic.min.js
   "TwitPic Minified Source")


## Usage

 1. Add the bookmarklet to your browser;
 2. Open [images.google.com](https://images.google.com "Google Images")\* or
    [tineye.com](https://tineye.com "TinEye");
 3. Click the bookmarklet;
 4. Enter a username when prompted.

\* Or any other Google Images domain.


## License

[MIT](https://github.com/mh0x/twitpic/blob/master/LICENSE "MIT License")
© 2018 mh0x
