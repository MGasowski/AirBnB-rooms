const repo = require('../repository/mainRepo')

exports.showMainView = async (req, res, next) => {
    // if(!(req.params.page instanceof Number) || req.params.page < 1) return
    console.log(req.params.page)
    repo.getRooms(req.params.page)
        .then(rooms => {
            console.log(rooms[0])
            res.render('index', {
                title: 'AirBnB rooms',
                rooms: rooms,
                page: req.params.page
            })
        })
}