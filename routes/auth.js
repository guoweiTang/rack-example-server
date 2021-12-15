/*
 * @Description: 授权
 * @Author: tangguowei
 * @Date: 2021-06-09 17:35:17
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-12-15 16:36:25
 */
const express = require('express');
const { allUsers } = require('../config');
const { createFactoryId } = require('../utils');

const router = express.Router();

router.post('/login', ({ body: { email, password } }, res) => {
  if (allUsers.find(item => item.email === email && item.password === password)) {
    res.json({
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBwb2V0aWNsb3VkLmNvbSIsImV4cCI6MTYxNzE4MjY5NSwidHlwIjoiYWNjZXNzIn0.HGO39CFJCJKCsp2gvsxRba4zj3WwV1fHPk8-90Jzv7A',
      refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBwb2V0aWNsb3VkLmNvbSIsImV4cCI6MTYyMjM1OTQ5NSwidHlwIjoicmVmcmVzaCJ9.He1tC8KYNzNCCZfeJIIGgSlTkT2WZ9mKjbw2VPUkDRg',
    })
  } else {
    res.status(400).json({
      message: '帐号或密码错误'
    })
  }
})

router.post('/register', ({ body: { email, password } }, res) => {
  if (!allUsers.find(item => item.email === email)) {
    allUsers.push({
      id: createFactoryId(),
      email,
      password,
    })
    res.json({
      message: 'OK',
    })
  } else {
    res.status(400).json({
      message: '账户已存在，可直接登录',
    })
  }
})

router.post('/reset-password', ({ body: { email, oldPassword, newPassword } }, res) => {
  const targetIndex = allUsers.findIndex(item => item.email === email && item.password === oldPassword);
  if (targetIndex > -1) {
    if(email === allUsers[0].email) {
      res.status(403).json({
        message: '系统账户不允许修改',
      })
    } else if (allUsers[targetIndex].password === newPassword) {
      res.status(400).json({
        message: '新密码不能与原密码相同',
      })
    } else {
      allUsers[targetIndex].password = newPassword;
      res.json({
        message: 'OK',
      });
    }
  } else {
    res.status(400).json({
      message: '账户或原密码错误，请重新输入',
    });
  }
})

module.exports = router;
