#!/usr/bin/env python

import flask
from flask.ext.script import Manager


app = flask.Flask(__name__, template_folder='.')

@app.route('/')
def home():
    return flask.render_template('index.html')


if __name__ == '__main__':
    Manager(app).run()
