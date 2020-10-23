from app import app
from flask import render_template, jsonify

@app.route('/')
def index():
    print('index')
    return render_template('index.html')

@app.route('/data')
def data():   
    print('data')
    out = {
        "data": [
            {
                "name": "Tiger Nixon",
                "position": "System Architect"
            }
        ]
    }
    # a dict should be ok, recent versions of flask will call jsonify under the hood. 
    #return jsonify(out)
    return out
    

