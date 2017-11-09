'use strict';

module.exports = function(settings) {
    var extensionSettings = turbine.getExtensionSettings();
    window._stk = extensionSettings.stk;

    (function(){
        var a=document, b=a.createElement("script"); b.type="text/javascript";
        b.async=!0; b.src=('https:'==document.location.protocol ? 'https://' :
                'http://') + 'd31y97ze264gaa.cloudfront.net/assets/st/js/st.js';
        a=a.getElementsByTagName("script")[0]; a.parentNode.insertBefore(b,a);
    })();
};
