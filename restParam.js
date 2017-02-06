module.exports = (...args) => {
  var total = args.reduce((a,b) => a + b);
  return total/args.length
}
