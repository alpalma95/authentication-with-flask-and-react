"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_sr = list(map(User.serialize, users))
    return jsonify(users_sr)

@api.route('/signup', methods=['POST'])
def handle_signup():
    response_body = request.get_json(force=True)
    hashed_pw = generate_password_hash(response_body['password'], "md5")
    new_user = User(email=response_body['email'], password_hash=hashed_pw, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    print(new_user.password_hash)
    return "ok", 200

# this will be set just for testint purporses
@api.route('/remove', methods=['DELETE'])
def delete_all():
    User.query.delete()
    db.session.commit()
    return "everyone deleted", 200