const User = {
    prefix: '!', 
    start: 1, 
    end: 45, 
    number: 6};
/*
prefix: 명령어 접두사입니다.
start: 출력할 숫자의 시작 숫자입니다.
end: 출력할 숫자의 끝 숫자입니다.
number: 출력할 숫자의 개수입니다.
*/

if (User.start > User.end) 
    throw Error('start 값보다 end 값이 더 크거나 같아야 합니다.');
if (User.number <= 0 || User.number > 100000) 
    throw Error('number 값은 1에서 99999 사이여야 합니다.');
if (User.end - User.start + 1 < User.number) 
    throw Error('number 값보다 출력 가능한 숫자가 더 많거나 같아야 합니다.');
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg.startsWith(User.prefix)) {
        msg = msg.slice(User.prefix.length).trim();
        if (msg == '로또') {
            let a = [];
            while (true) {
                let random = ((Math.random() * (User.end + 1 - User.start)) | 0) + User.start;
                if (!a.includes(random)) 
                    a.push(random);
                if (a.length == User.number) 
                    break;
            }
            replier.reply(a.sort((s, d) => s - d).join(' '));
        }
    }
}
