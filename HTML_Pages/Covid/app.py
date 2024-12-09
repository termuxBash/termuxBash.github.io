from flask import Flask, send_from_directory
import os
import socket
def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.settimeout(0)
    try:
        # doesn't even have to be reachable
        s.connect(('10.254.254.254', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = 'localhost'
    finally:
        s.close()
    return IP

app = Flask(__name__)
url = get_ip()
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