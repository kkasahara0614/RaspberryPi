from flask import Flask, render_template,jsonify
from flask_cors import CORS, cross_origin
import subprocess


app = Flask(__name__,static_folder='/home/pi/dev/raspy/cgir-master/frontend/my-app/build/static',template_folder='/home/pi/dev/raspy/cgir-master/frontend/my-app/build')
CORS(app, support_credentials=True)

path="/home/pi/dev/raspy/cgir-master"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tv_power',methods=['POST'])
def tv_power():
    subprocess.run(["./cgirtool.py", "send", "tv_power"], cwd=path)
    return 'tv_power'

@app.route('/input_switching',methods=['POST'])
def input_switching():
    subprocess.run(["./cgirtool.py", "send", "input_switching"], cwd=path)
    return 'input_switching'

@app.route('/_1',methods=['POST'])
def _1():
    subprocess.run(["./cgirtool.py", "send", "1"], cwd=path)
    return '1'

@app.route('/_2',methods=['POST'])
def _2():
    subprocess.run(["./cgirtool.py", "send", "2"], cwd=path)
    return '2'

@app.route('/_3',methods=['POST'])
def _3():
    subprocess.run(["./cgirtool.py", "send", "3"], cwd=path)
    return '3'

@app.route('/_4',methods=['POST'])
def _4():
    subprocess.run(["./cgirtool.py", "send", "4"], cwd=path)
    return '4'

@app.route('/_5',methods=['POST'])
def _5():
    subprocess.run(["./cgirtool.py", "send", "5"], cwd=path)
    return '5'

@app.route('/_6',methods=['POST'])
def _6():
    subprocess.run(["./cgirtool.py", "send", "6"], cwd=path)
    return '6'

@app.route('/_7',methods=['POST'])
def _7():
    subprocess.run(["./cgirtool.py", "send", "7"], cwd=path)
    return '7'

@app.route('/_8',methods=['POST'])
def _8():
    subprocess.run(["./cgirtool.py", "send", "8"], cwd=path)
    return '8'

@app.route('/_9',methods=['POST'])
def _9():
    subprocess.run(["./cgirtool.py", "send", "9"], cwd=path)
    return '9'

@app.route('/_10',methods=['POST'])
def _10():
    subprocess.run(["./cgirtool.py", "send", "10"], cwd=path)
    return '10'

@app.route('/_11',methods=['POST'])
def _11():
    subprocess.run(["./cgirtool.py", "send", "11"], cwd=path)
    return '11'

@app.route('/_12',methods=['POST'])
def _12():
    subprocess.run(["./cgirtool.py", "send", "12"], cwd=path)
    return '12'

@app.route('/vol_up',methods=['POST'])
def vol_up():
    subprocess.run(["./cgirtool.py", "send", "vol_up"], cwd=path)
    return 'vol_up'

@app.route('/vol_down',methods=['POST'])
def vol_down():
    subprocess.run(["./cgirtool.py", "send", "vol_down"], cwd=path)
    return 'vol_down'

@app.route('/mute',methods=['POST'])
def mute():
    subprocess.run(["./cgirtool.py", "send", "mute"], cwd=path)
    return 'mute'

@app.route('/sel_up',methods=['POST'])
def sel_up():
    subprocess.run(["./cgirtool.py", "send", "sel_up"], cwd=path)
    return 'sel_up'

@app.route('/sel_down',methods=['POST'])
def sel_down():
    subprocess.run(["./cgirtool.py", "send", "sel_down"], cwd=path)
    return 'sel_down'

@app.route('/schedule',methods=['POST'])
def schedule():
    subprocess.run(["./cgirtool.py", "send", "schedule"], cwd=path)
    return 'schedule'

@app.route('/info',methods=['POST'])
def info():
    subprocess.run(["./cgirtool.py", "send", "info"], cwd=path)
    return 'info'

@app.route('/D',methods=['POST'])
def D():
    subprocess.run(["./cgirtool.py", "send", "D"], cwd=path)
    return 'D'

@app.route('/BS',methods=['POST'])
def BS():
    subprocess.run(["./cgirtool.py", "send", "BS"], cwd=path)
    return 'BS'

@app.route('/CS',methods=['POST'])
def CS():
    subprocess.run(["./cgirtool.py", "send", "CS"], cwd=path)
    return 'CS'

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',port=5000,debug=True)