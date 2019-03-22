/*
 * @Author: sjw 
 * @Date: 2019-03-21 15:03:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 20:13:15
 */
var Mongo = require('mongodb-curd');
const batabaseName = 'lemonL'


module.exports = {
    custom: function(req, res, next) {
        Mongo.find(batabaseName, 'custom', {}, function(result) {
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
    },
    addCustom: function(req, res, next) {
        let { icon, title, type, common } = req.body
        if (!icon || !title || !type || !common) {
            res.send({ code: 2, message: '参数不完整' })
        }
        Mongo.insert(batabaseName, 'classify', req.body, function(result) {
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
    },
    getClassfiy: function(req, res, next) {
        let { common, type } = req.query;
        console.log(common)
        Mongo.find(batabaseName, 'classify', { "common": { $in: ['y', common] }, 'type': type }, function(result) {
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
}