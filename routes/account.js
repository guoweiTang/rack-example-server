/*
 * @Description: 账户
 * @Author: tangguowei
 * @Date: 2021-06-09 17:35:25
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-10 15:15:19
 */
const express = require('express');
const { userinfo } = require('../config');

const router = express.Router();

router.get('/userinfo', (req, res) => {
  res.json(userinfo);
})
router.put('/userinfo', ({ body }, res) => {
  for (let item of Object.getOwnPropertyNames(userinfo)) {
    if (body[item]) {
      userinfo[item] = body[item]
    }
  }
  res.json({
    message: 'OK',
  })
})

module.exports = router;
