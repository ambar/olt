module.exports = text =>
  new Function('data = {}', `with (data) return String.raw\`${text}\``)
