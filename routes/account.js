/*
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-06-09 17:35:25
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-09 18:56:15
 */
const express = require('express');
const { allUsers } = require('../config');

const router = express.Router();

router.get('/users/:id', ({ params: { id } }, res) => {
  const result = allUsers.map(item => item.id === id)[0];
  delete result.password;
  res.json(result)
})
router.put('/users/:id', ({ params: { id }, body }, res) => {
  const result = allUsers.map(item => item.id === id)[0];
  for (let item of Object.getOwnPropertyNames(result)) {
    if (body[item]) {
      result[item] = body[item]
    }
  }
  delete result.password;
  res.json({
    message: 'OK',
  })
})
