
import requests
from flask import Flask,request ,jsonify
import os
from dotenv import load_dotenv


load_dotenv(dotenv_path="./.env.local")
UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY","")

if not UNSPLASH_KEY:
  raise EnvironmentError("please create .env.local file and insert there UNSPLASH-KEY")

app=Flask(__name__)

@app.route("/new_image")
def new_image():
  word=request.args.get("query")

  headers={"Authorization": f"Client-ID {UNSPLASH_KEY}"}
  paylod={"query":word}
  response=requests.get(UNSPLASH_URL,headers=headers,params=paylod)
  print(response)
  data=response.json()
  return data 