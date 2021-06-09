/*
 * @Description: 启动文件
 * @Author: tangguowei
 * @Date: 2021-06-09 16:50:52
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-09 18:11:19
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

app.listen(3000);