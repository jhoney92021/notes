from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def survey():
    return render_template('index.html')

@app.route('/results', methods=[POST'])
def results():
    return render_template('results.html')
if __name__=='__main__':
    app.run(debug=True)