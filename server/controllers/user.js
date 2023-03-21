const db = require("../models");
const User = db.user;
const Friends = db.friend;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.addFriend = (req, res) => {
    return Friends.create({
        name: req.body.completeName,
        username: req.body.username,
        userId: req.body.userId, //Id in this case is the 
    })
    .then((friend) => {
        console.log("Added Friend: " + JSON.stringify(friend, null, 4));
        res.status(200).send(friend);
    })
    .catch((err) => {
        console.log("Error while adding friend: ", err);
        res.status(500).send({ message: err.message });
    });
};

exports.findAllUsers = (req,res) => {
    return User.findAll({
        include: ["friends"],
    }).then((users) => {
        res.status(200).send(users);
    })
    .catch((err) => {
        console.log(" Error while finding user: ", err);
        res.status(500).send({ message: err.message });
    });
};

exports.findUserById = (req, res) => {
    return User.findByPk(req.params.id, { include: ["friends"] })
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => {
        console.log(" Error while finding user: ", err);
        res.status(500).send({ message: err.message });
      });
};

exports.findUserByEmail = (req,res) => {
    return User.findOne({
        where: {
            email: req.params.email
        },
        include: ["friends"],
    }).then((user) => {
        res.status(200).send(user);
    })
    .catch((err) => {
        console.log(" Error while finding user: ", err);
        res.status(500).send({ message: err.message });
    });
};

exports.findByName = (req,res) => {
    return User.findAll({
        where: {
            completeName: { [db.Op.like]: `%${req.params.name}%` },
        },
        include: ["friends"],
    }).then((users) => {
        res.status(200).send(users);
    })
    .catch((err) => {
        console.log(" Error while finding user: ", err);
        res.status(500).send({ message: err.message });
    });
};