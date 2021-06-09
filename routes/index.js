/*
 * @Description: 路由
 * @Author: tangguowei
 * @Date: 2021-06-09 17:16:43
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-09 18:54:52
 */
const express = require('express');
const auth = require('./auth');
const services = require('./services');
const stores = require('./stores');
const account = require('./account');

const router = express.Router();
const baseDir = 'api';

// 授权
router.use(`${baseDir}/auth`, auth);

// 服务
router.use(`${baseDir}/services`, services);

// 账户
router.use(`${baseDir}/account`, account);

// 商店
router.use(`${baseDir}/stores`, stores);

module.exports = router;