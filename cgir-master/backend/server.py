from flask import Flask, render_template

app = Flask(__name__,static_folder='/home/pi/dev/raspy/cgir-master/frontend/my-app/build/static',template_folder='/home/pi/dev/raspy/cgir-master/frontend/my-app/build')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',port=5000,debug=True)