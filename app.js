let userName = 'Adanta';
userName ? console.log(`Hello ` + userName) : console.log('Hello!');
let userQuestion = 'Will I buy a house?';
console.log(`${userName} asked, ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = '';
switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do no count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`The Magic Ball says ${eightBall}.`);

