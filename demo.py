#!/usr/bin/env python

import flask
from flask.ext.script import Manager


app = flask.Flask(__name__, template_folder='.')


@app.route('/')
def home():
    return flask.render_template('index.html')


@app.route('/check')
def check():
    word = flask.request.args['word']
    with app.open_resource('words.txt', 'r') as f:
        for line in f:
            if line.strip() == word.strip():
                return flask.jsonify(match=True)
        else:
            return flask.jsonify(match=False)


if __name__ == '__main__':
    app.debug = True
    Manager(app).run()
