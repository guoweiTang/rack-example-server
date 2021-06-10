/*
 * @Description: 集合各个中间件
 * @Author: tangguowei
 * @Date: 2021-06-09 16:50:52
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-10 16:00:47
 */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(routes);

module.exports = app;
