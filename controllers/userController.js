const mongoose = require('mongoose');
const User = require('../models/User');
const Order = require('../models/Order');

const create = (req, res, next) => {
    console.log(req.body);
    User.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
};
module.exports.create = create;
const getId = (req, res, next) => {
    User.findById(req.params.id, (err, users) => {
        if (err) return next(err);
        res.json(users);
    })
};
module.exports.getId = getId;
const getAll = (req, res, next) => {
    User.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    })
};
module.exports.getAll = getAll;

const update = (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, users) => {
        if (err) return next(err);
        return res.json(users);
    })
};
module.exports.update = update;

const remove = (req, res, next) => {
    User.findByIdAndRemove(req.params.id, (err, users) => {
        if (err) return next(err);
        res.json(users);
    })
};
module.exports.remove = remove;

const newOrder = async (req, res, next) => {
    const userId = req.params.id;
    //create order
    const newOrder = new Order(req.body);

    // get user
    const user = await User.findById(userId);
    newOrder.seller = user;
    //save order
    await newOrder.save();

    user.orders.push(newOrder);
    await user.save();
    return res.status(201).json(newOrder);
};
module.exports.newOrder = newOrder;

const getUserOrder = async (req, res, next) => {
    const userid = req.params.id;
    const user = await User.findById(userid).populate('orders');
    return res.status(200).json(user);
};
module.exports.getUserOrder = getUserOrder;





