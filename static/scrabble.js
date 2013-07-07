(function() {


var words = null;

$.get(SD.STATIC + 'forme.json').done(function(data) {
    words = {};
    _(data).forEach(function(word) {
        words[word] = true;
    });
});

var form = $('form[name=scrabble]');
form.submit(function(evt) {
    evt.preventDefault();
    var word = form.find('[name=q]').val().toUpperCase();
    var out = form.find('p');
    if(! words) {
        out.text('se încarcă');
    }
    else if(words[word]) {
        out.text(word + ' e ok');
    }
    else {
        out.text(word + ' nu există');
    }
});


})();
