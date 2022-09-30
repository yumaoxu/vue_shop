import Mock from 'mockjs'
//导入json数据
//图片和json格式数据时默认对外暴露的，不需要export
import banner from './banner.json'
import floor from './floor.json'

Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })