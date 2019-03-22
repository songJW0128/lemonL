/*
 * @Author: sjw 
 * @Date: 2019-03-21 15:03:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 15:39:29
 */
var Mongo = require('mongodb-curd');
const batabaseName = 'lemonL'
const collcationName = 'user'

module.exports = function(req, res, next) {
    Mongo.find(batabaseName, collcationName, {}, function(result) {
        console.log(result)
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })

}