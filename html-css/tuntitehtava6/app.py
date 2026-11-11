import json

from flask import Flask, abort

app = Flask(__name__)

@app.route("/")
def home():
  try:
    message =  "Hello, World!"
    return message

  except Exception as e:
    return f"Virhe happened {e}", 500

if __name__ == '__main__':
    app.run(use_reloader = True, host = '127.0.0.1', port = 3000)



