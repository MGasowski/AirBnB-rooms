const repo = require('../repository/mainRepo')

exports.showMainView = async (req, res, next) => {
    repo.getRooms()
        .then(rooms => {
            console.log(rooms)
            res.render('index', {
                title: 'AirBnB rooms',
                rooms: rooms
            })
        })
}