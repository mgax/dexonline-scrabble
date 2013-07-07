(function() {


SD.words = null;

$.get('static/forme.json').done(function(data) {
    SD.words = {};
    _(data).forEach(function(word) {
        SD.words[word] = true;
    });
});


SD.letter_map = {
    'Ș': 'S',
    'Ş': 'S',
    'Ț': 'T',
    'Ţ': 'T',
    'Ă': 'A',
    'Î': 'I',
    'Â': 'A'
};


SD.normalize = function(word) {
    var new_word = '';
    _(word.toUpperCase()).forEach(function(letter) {
        if(SD.letter_map[letter]) {
            letter = SD.letter_map[letter];
        }
        new_word += letter;
    });
    return new_word;
};


var form = $('form[name=scrabble]');
form.submit(function(evt) {
    evt.preventDefault();
    var word = SD.normalize(form.find('[name=q]').val());
    var out = form.find('p');
    if(! SD.words) {
        out.text('se încarcă');
    }
    else if(SD.words[word]) {
        out.text(word + ' e ok');
    }
    else {
        out.text(word + ' nu există');
    }
});


})();
