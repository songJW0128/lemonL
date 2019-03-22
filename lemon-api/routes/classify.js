/*
 * @Author: sjw 
 * @Date: 2019-03-21 15:45:30 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 20:08:04
 * [分类]
 */

var express = require('express');
var router = express.Router();
var classifyApi = require('./classifyApi');
/* GET home page. */
//查找自定义分类
router.get('/api/getCustom', classifyApi.custom);
//添加自定义分类
router.post('/api/addCustom', classifyApi.addCustom);

router.get('/api/gitclassify', classifyApi.getClassfiy);

module.exports = router;