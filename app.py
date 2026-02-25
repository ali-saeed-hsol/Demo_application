from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

# Optional: serve other static files like CSS/JS automatically
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    # host='0.0.0.0' allows access from other devices on the network
    app.run(debug=True, host='0.0.0.0', port=5000)