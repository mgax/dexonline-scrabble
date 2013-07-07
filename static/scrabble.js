(function() {


var data = null;

$.get(SD.STATIC + 'forme.json').done(function(data) {
    console.log(data.length);
});


})();
