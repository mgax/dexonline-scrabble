from pytest import fixture
from flask import json


@fixture
def client():
    import scrabble
    app = scrabble.app
    client = app.test_client()
    return client


def test_check(client):
    assert json.loads(client.get('/check?word=OAIE').data) == {'match': True}
    assert json.loads(client.get('/check?word=ZXCV').data) == {'match': False}
