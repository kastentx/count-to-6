console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(templateString, ...substitutions) {
  let result = ""
  for (let e in substitutions) {
    var cleanSub = substitutions[e].replace(/&/g, "&amp;")
    cleanSub = cleanSub.replace(/'/g, "&apos;")
    cleanSub = cleanSub.replace(/"/g, "&quot;")
    cleanSub = cleanSub.replace(/</g, "&lt;")
    cleanSub = cleanSub.replace(/>/g, "&gt;")
    substitutions[e] = cleanSub
  }

  for (let i = 0; i < substitutions.length; i++) {
    result += templateString[i]
    result += substitutions[i]
  }
  result += templateString[templateString.length - 1]
  
  return result
}
