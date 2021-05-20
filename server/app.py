from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return {
        "test": "result1",
        "test2": "result2"
    }


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')