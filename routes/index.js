/*
 * @Description: 路由
 * @Author: tangguowei
 * @Date: 2021-06-09 17:16:43
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-14 18:05:08
 */
const express = require('express');
const auth = require('./auth');
const goods = require('./goods');
const account = require('./account');

const router = express.Router();
const baseDir = '/api';

// 授权
router.use(`${baseDir}/auth`, auth);

// 商品
router.use(`${baseDir}/goods`, goods);

// 账户
router.use(`${baseDir}/account`, account);

module.exports = router;