from flask import Flask, send_from_directory
import os

app = Flask(__name__)
url = 'localhost'

# IP Addresses
# Tab on jio wifi - '192.168.29.14';
# Laptop on jio wifi - '192.168.29.169';
# No Wifi use 'localhost';
port = 8080

@app.route('/public/<path:path>')
def send_public(path):
    return send_from_directory('public', path)

@app.route('/Codes/<path:path>')
def send_codes(path):
    return send_from_directory('../../Codes', path)

@app.route('/Music/<path:path>')
def send_music(path):
    return send_from_directory('../../../Music', path)

@app.route('/Covid-data/<path:path>')
def send_covid_data(path):
    return send_from_directory('Covid-data', path)

@app.route('/')
def index():
    return send_from_directory(os.path.dirname(__file__), 'Covid.html')

if __name__ == '__main__':
    app.run(host=url, port=port)