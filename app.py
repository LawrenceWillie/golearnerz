from flask import Flask, render_template, redirect, url_for, request, flash, session
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, IntegerField
from wtforms.validators import DataRequired, Email, EqualTo
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_oauthlib.client import OAuth
import psycopg2
from app import db  # Import the db object from app.py
from models import User  # Import the User model from models.py

# Initialize app, database, and login manager
app = Flask(__name__, static_folder='assets')
app.config['SECRET_KEY'] = 'your_secret_key'
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:TINY1996@localhost/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login'

oauth = OAuth(app)
google = oauth.remote_app(
    'google',
    consumer_key='your_client_id',
    consumer_secret='your_client_secret',
    request_token_params={
        'scope': 'email',
    },
    base_url='https://www.googleapis.com/oauth2/v1/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://accounts.google.com/o/oauth2/token',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
)

# User model
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    phone = db.Column(db.String(15))
    password = db.Column(db.String(100))
    google_id = db.Column(db.String(100), unique=True)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Sign-in form
class SignInForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = IntegerField('Phone Number', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    password_confirm = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])

# Login form
class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    form = SignInForm()
    if form.validate_on_submit():
        # Store the user data in the database
        new_user = User(
            name=form.name.data,
            email=form.email.data,
            phone=form.phone.data,
            password=form.password.data
        )
        db.session.add(new_user)
        db.session.commit()
        flash('You have successfully signed up!')
        return redirect(url_for('login'))
    return render_template('signin.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.password == form.password.data:
            login_user(user)
            return redirect(url_for('profile'))
        flash('Invalid login credentials')
    return render_template('login.html', form=form)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')

# Google login callback
@app.route('/login/google')
def login_google():
    return google.authorize(callback=url_for('authorized', _external=True))

@app.route('/login/google/authorized')
def authorized():
    response = google.authorized_response()
    if response is None or response.get('access_token') is None:
        return redirect(url_for('home'))

    user_info = google.get('userinfo')
    user = User.query.filter_by(google_id=user_info.data['id']).first()

    if user is None:
        user = User(
            google_id=user_info.data['id'],
            name=user_info.data['name'],
            email=user_info.data['email']
        )
        db.session.add(user)
        db.session.commit()

    login_user(user)
    return redirect(url_for('profile'))

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
