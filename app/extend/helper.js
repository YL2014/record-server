// 工具方法

module.exports = {
  formatDate () {
    return ''
  },

  merge (origin, newObj) {
    if (!newObj) return origin
    Object.keys(newObj).map(item => {
      if (item) origin[item] = newObj[item]
      return item
    })
    return origin
  }
}
