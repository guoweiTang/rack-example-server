/*
 * @Description: 工具函数
 * @Author: tangguowei
 * @Date: 2021-06-09 18:18:15
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-09 18:18:38
 */
/**
 * [factoryId 生成虚拟id的工厂]
 * @return {[type]} [description]
 */
exports.createFactoryId = function (){
	return '' + parseInt(Math.random()*Math.pow(10, 4)) + parseInt(Math.random()*Math.pow(10, 4))
}