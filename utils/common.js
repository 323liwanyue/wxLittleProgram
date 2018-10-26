function echoHello(user){
  return "welcome to Chengdu " + user;
}

function echoBye(user){
  return user + "已经退出，欢迎下次再来"
}

module.exports.echoHello = echoHello;
exports.echoBye = echoBye;