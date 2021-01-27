const Rooms = require('../model/Room')

exports.getRooms = async (req, res, next) => {
    return Rooms.find({}).limit(10);
}