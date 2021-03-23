const Rooms = require('../model/Room')

exports.getRooms = async (page) => {
    return Rooms.find({}).sort({"price" : -1}).skip(page*10).limit(10);
}