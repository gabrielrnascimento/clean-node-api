module.exports = class ServerError extends Error {
  constructor (paramName) {
    super('An internal error')
    this.name = 'ServerError'
  }
}
