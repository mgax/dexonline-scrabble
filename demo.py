import flask


app = flask.Flask(__name__, template_folder='.')

@app.route('/')
def home():
    return flask.render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
