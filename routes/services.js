/*
 * @Description: 服务
 * @Author: tangguowei
 * @Date: 2021-06-09 17:35:32
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-10 15:15:34
 */
const express = require('express');
const { allServices } = require('../config');

const router = express.Router();

router.get('/', ({ query: { k, page, page_size } }, res) => {
  let lists = [...allServices];
  const _page_size = page_size || 10;
  const _page = page || 1;
  if (k) {
    lists = lists.map(item => item.title.includes(k))
  }
  res.json({
    count: lists.length,
    results: lists.slice(_page_size * (_page - 1), _page_size * _page),
  });
})
router.post('/', (req, res) => {
  res.json({
    message: 'OK',
  })
})
router.put('/:id', ({ params: { id }, body }, res) => {
  const targetIndex = allServices.findIndex(item => item.id === id);
  allServices[targetIndex] = {
    ...allServices[targetIndex],
    ...body,
  }
  res.json({
    message: 'OK',
  })
})
router.delete('/:id', ({ params: { id }, body }, res) => {
  const targetIndex = allServices.findIndex(item => item.id === id);
  allServices.splice(targetIndex, 1)
  res.json({
    message: 'OK',
  })
})

module.exports = router;
