(function() {


var words = null;

$.get(SD.STATIC + 'forme.json').done(function(data) {
    words = {};
    _(data).forEach(function(word) {
        words[word] = true;
    });
});


var letter_map = {
    'Ș': 'S',
    'Ş': 'S',
    'Ț': 'T',
    'Ţ': 'T',
    'Ă': 'A',
    'Î': 'I',
    'Â': 'A'
};


var normalize = function(word) {
    var new_word = '';
    _(word.toUpperCase()).forEach(function(letter) {
        if(letter_map[letter]) {
            letter = letter_map[letter];
        }
        new_word += letter;
    });
    return new_word;
};


var form = $('form[name=scrabble]');
form.submit(function(evt) {
    evt.preventDefault();
    var word = normalize(form.find('[name=q]').val());
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
