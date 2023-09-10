function display(content) {

  if (typeof content === "string" || typeof content === "number") {
    return  'your message is ' + content;
  }else if(typeof content === "undefined" || typeof content === "object")
  return 'no message'
}
module.exports = display


