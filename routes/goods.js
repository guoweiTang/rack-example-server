/*
 * @Description: 商店
 * @Author: tangguowei
 * @Date: 2021-06-09 18:56:26
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-14 18:21:04
 */
const express = require('express');
const { allGoods } = require('../config');

const router = express.Router();

router.get('/', ({ query: { page, size } }, res) => {
  return res.json({
    total: allGoods.length,
    results: allGoods.slice(size * (page - 1), size * page),
  })
})
router.get('/:id', ({ params: { id } }, res) => {
  const result = allGoods.find(item => item.id === id);
  if (!result) {
    res.status(400).json({
      message: '该商品不存在',
    })
  } else {
    res.json({
      count: goods.length,
      results: goods,
    })
  }
})
router.delete('/:id', ({ params: { id } }, res) => {
  const targetIndex = allGoods.findIndex(item => item.id === id);
  if (targetIndex === -1) {
    res.status(400).json({
      message: '该商品不存在',
    })
  } else {
    allGoods.splice(targetIndex, 1);
    res.json({
      message: '删除成功',
    })
  }
})
router.put('/:id', ({ params: { id }, body }, res) => {
  const targetIndex = allGoods.findIndex(item => item.id === id);
  if (targetIndex === -1) {
    res.status(400).json({
      message: '该商品不存在',
    })
  } else {
    allGoods[targetIndex] = {
      ...allGoods[targetIndex],
      ...body,
    }
    res.json({
      message: '更新成功',
    })
  }
})

module.exports = router;
