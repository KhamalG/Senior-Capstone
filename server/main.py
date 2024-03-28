from flask import Flask, request, jsonify
import pypyodbc as odbc
from credentials import username, password, server, database

connection_string = '{ODBC Driver 18 for SQL Server};Server=tcp:team-a5.database.windows.net,1433;Database=team-a5;Uid=team-a5;Pwd='+password+';Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
conn = odbc.connect(connection_string)

app = Flask(__name__)

@app.route("/admin/login", methods=["POST"])
def login():
    if request.method == "POST":
        return "new"
    return "Home"

if __name__ == "__main__":
    app.run(debug=True)
