//more information here http://babeljs.com

(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Babel = factory()
}
(this, function() {
    
    var Babel = Babel || {};
    Babel.languageFile = 'en.json';
    
    Babel.init = function(pathToTranslationFile, callback) {

        Babel.readTranslation(pathToTranslationFile, function(translations) {
            Babel.translations = JSON.parse(translations);
            callback();
        });

    };
    
    Babel.fish = function(key) {

        return Babel.translations[key] || key;

    };

    Babel.readTranslation = function(pathOfFileToReadFrom, callback) {

        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        callback(returnValue);

    }

    window.Babel = Babel;
    return Babel;

}));

