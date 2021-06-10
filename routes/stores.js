/*
 * @Description: 商店
 * @Author: tangguowei
 * @Date: 2021-06-09 18:56:26
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-10 15:15:42
 */
const express = require('express');
const { allStores } = require('../config');

const router = express.Router();

router.get('/', ({ params: { id } }, res) => {
  const result = allStores.map(item => ({
    id: item.id,
    name: item.name,
  }));
  return res.json({
    count: result.length,
    results: result,
  })
})
router.get('/:id/goods', ({ params: { id } }, res) => {
  const { goods } = allStores.find(item => item.id === id);
  res.json({
    count: goods.length,
    results: goods,
  })
})

module.exports = router;
