(function() {


SD.words = null;
SD.form = $('form[name=scrabble]');
SD.out = SD.form.find('p');
SD.out.text('se încarcă');


$.get('static/forme.json').done(function(data) {
    SD.words = {};
    _(data).forEach(function(word) {
        SD.words[word] = true;
    });
    SD.out.text('-');
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


SD.form.submit(function(evt) {
    evt.preventDefault();
    var word = SD.normalize(SD.form.find('[name=q]').val());
    if(! SD.words) {
        SD.out.text('se încarcă');
    }
    else if(SD.words[word]) {
        SD.out.text(word + ' e ok');
    }
    else {
        SD.out.text(word + ' nu există');
    }
});


})();
