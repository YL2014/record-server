'use strict'

const BaseController = require('./base')

class OrderController extends BaseController {
  // 分页获取列表
  async index () {
    const params = this.ctx.query
    const orders = await this.service.order.list(params)
    this.success(orders)
  }

  // 添加订单
  async add () {
    const params = this.ctx.request.body
    const info = await this.service.order.add(params)
    this.success(info)
  }

  // 订单详情
  async detail () {
    const { id } = this.ctx.params
    const detailInfo = await this.service.order.detail(id)
    this.success(detailInfo)
  }

  // 更新
  async update () {
    const params = this.ctx.request.body
    const info = await this.service.order.update(params)
    this.success(info)
  }

  // 删除
  async remove () {
    const { id } = this.ctx.query
    await this.service.order.remove(id)
    this.success()
  }

  // 审核
  async check () {
    const { id, type, driver, rmsg } = this.ctx.query
    await this.service.order.check({ id, type, driver, rmsg })
    this.success()
  }

  // 下载excel
  async download () {
    const params = this.ctx.query
    const info = await this.service.order.download(params)
    this.ctx.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=order.xlsx'
    })
    this.ctx.body = info
  }

  // 导入快递单号
  async importDriver () {
    const data = await this.service.order.importDriver()
    this.success()
  }

  // 快递单号录入
  async driver () {
    const params = this.ctx.request.body
    await this.service.order.driver(params)
    this.success()
  }

}

module.exports = OrderController
