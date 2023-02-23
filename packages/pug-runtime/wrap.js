var runtime = require('./');

module.exports = wrap;
function wrap(template, templateName) {
  templateName = templateName || 'template';
  let args = template + '\n' + 'return ' + templateName + ';';
  console.log(args)
  return Function(
    'pug',
    args
  )(runtime);
}
