

exports.getData = (req, res, next) => {
    return res.send({
        status: "ok",
        data:[1,2,3,4,5]
    });

};
exports.postData = (req, res, next) => {
    let id = req.body.id
    console.log("id--",id)
    return res.send({
        status: `ok for id= ${id}`,
    });

};





