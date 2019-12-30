const readLine = require('readline-sync')

function start() {

  const content = {}

  content.text   = askAndReturnText('Inform a text: ')
  content.prefix = askAndReturnPrefix('Select an option: ', ['Option 1', 'Option 2', 'Option 3'])

  function askAndReturnText(strQuestion) {
    return readLine.question(strQuestion)
  }

  function askAndReturnPrefix(strQuestion, aPrefixes) {
    return readLine.keyInSelect(aPrefixes, strQuestion)
  }

  console.log(content)
}

start()
