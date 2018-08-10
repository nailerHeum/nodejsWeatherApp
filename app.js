const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs.
  options({
    a: {
      demand: true,               // demand 가 true 일 경우ㅓ
      alias: 'address',           // address에 대한 단축키 a를 의미한다.
      describe: 'Address to fetch weather for',   // help -h  입력시에 나오는 명령어 설명
      string: true              // argv 로 string을 받는다.
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});



