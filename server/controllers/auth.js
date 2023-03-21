const db = require("../models");
const config = require("../config/auth");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { friend } = require("../models");

exports.signup = (req, res) => {
    
    // Save User to Database
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        completeName: req.body.firstName + " " + req.body.lastName,
        userName: req.body.email, // For now make it the userName
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {
        // Set user role for 1 (user).
        user.setRoles([1]).then(() => {
            res.send({ message: "Registration Succesful!" });
        });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({ 
                message: "User Not found." 
            });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        let friends = [];
        friend.findOne({
            where: {
                userId: user.id
            }
        })
        .then(friendList => {
            friends = friendList
        })

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24hrs expiration time
        });

        res.status(200).send({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            completeName: user.completeName,
            userName: user.userName,
            friends: friends,
            email: user.email,
            accessToken: token
        });
        
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

// To be used in the future or not
function makeid() {
    let result = '';
    let length = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
        if (counter == length) {
            let unique = isUniqueUserName(result);
            if (!unique) {
                counter = 0;
                result = '';
            }
        }
    }
    return result;
};

function isUniqueUserName(userNameDb) {
    User.findOne({
        where: {
            userName: userNameDb
        }
    })
    .then(user => {
        if (!user) {
            return true;
        }

        return false;
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};