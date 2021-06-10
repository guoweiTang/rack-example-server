/*
 * @Description: 集合各个中间件
 * @Author: tangguowei
 * @Date: 2021-06-09 16:50:52
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-10 15:14:59
 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));
app.use(routes);

module.exports = app;
