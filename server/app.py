from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return {"r": [{
       "col1": 'Hello',
       "col2": 'World',
     },
     {
       "col1": 'react-table',
       "col2": 'rocks',
     },
     {
       "col1": 'whatever',
       "col2": 'you want',
     },


    ]
    }


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')