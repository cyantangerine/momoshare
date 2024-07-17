
const MMSLS = []
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}


const fs = require('fs');
try {
  // 同步读取文件
  var data = fs.readFileSync('url.txt', 'utf8');
  data = data.split("\n")
  console.log(data);
  for (var i in data) {
    if (data[i]) MMSLS.push(data[i])
  }
} catch (err) {
  f = fs.openSync("./random_click.log", "a")
  fs.writeFileSync(f, new String(err).toString())
  fs.closeSync(f)
  console.error(err);
}
const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];

module.exports = {
  MMSL_random
}
