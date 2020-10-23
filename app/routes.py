from app import app
from flask import render_template, send_from_directory # can't import for some reason send_static_file

@app.route('/')
def index():
    print('index')
    return render_template('index.html')


'''
I think flask can just serve up files without a route as the ajax request for
'/static/ajax/objects.txt' 
works fine.  I couldn't get this to work.
@app.route('/ajax/<path:filename>')
def data(filename):
    print('data:', filename)
    #return Response(path, mimetype='text/plain')
    
    #return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)

    return send_from_directory('/static/ajax/', filename)
    
    #return send_static_file(filename)
'''
