from flask import Flask, render_template, redirect, url_for
import csv

app = Flask(__name__)

# Load chapters from CSV
def load_chapters():
    chapters = []
    with open('memories.csv', 'r',encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            chapters.append(row)
    return chapters

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chapter/<int:chapter_id>')
def chapter(chapter_id):
    chapters = load_chapters()
    if chapter_id <= len(chapters):
        chapter_data = chapters[chapter_id - 1]
        return render_template('memory.html', chapter=chapter_data, chapter_id=chapter_id)
    else:
        return redirect(url_for('proposal'))

@app.route('/proposal')
def proposal():
    return render_template('proposal.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

if __name__ == '__main__':
    app.run(debug=True)
