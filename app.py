from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from database import add_user, get_user_by_email

app = Flask(__name__)
app.secret_key = "your_secret_key"
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"

# User Class for Flask-Login
class User(UserMixin):
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

@login_manager.user_loader
def load_user(user_id):
    user = get_user_by_email(user_id)
    if user:
        return User(*user)
    return None

@app.route("/")
def home():
    return render_template("home.html", user=current_user)

# Sign-up Route
@app.route("/signup", methods=["POST"])
def signup():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        password = request.form["password"]
        confirm_password = request.form["confirm_password"]

        if password != confirm_password:
            flash("Passwords do not match!", "danger")
            return redirect(url_for("home"))

        hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8")

        try:
            # Add user to the database
            add_user(name, email, phone, hashed_pw)
            flash("Account created! Please log in.", "success")
            return redirect(url_for("login"))
        except sqlite3.IntegrityError:
            flash("Email already exists.", "danger")

    return redirect(url_for("home"))

# Login Route
@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        user = get_user_by_email(email)

        if user and bcrypt.check_password_hash(user[4], password):  # user[4] is the password
            user_obj = User(user[0], user[1], user[2])
            login_user(user_obj)
            flash("Login successful!", "success")
            return redirect(url_for("profile"))
        else:
            flash("Invalid email or password.", "danger")
