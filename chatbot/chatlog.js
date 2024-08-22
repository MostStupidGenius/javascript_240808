const scriptName = "채팅기록";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
const User = {
    prefix: '!', 
    path: 'chatlog', 
    admin: [].map(s => s + []), 
    max: 2000};
/*
prefix: 명령어 접두사입니다.
path: json이 저장될 폴더 이름입니다.
admin: 관리자 해시코드입니다. 아무 값도 없으면 아무나 사용할 수 있습니다.
max: 한 채팅방에서 저장할 수 있는 최대 채팅 수입니다. 너무 큰 수를 입력하면 속도가 느려지고, 파일 최대 용량을 초과할 정도로 크면 오류가 발생할 수 있습니다.(권장 수: 1000~3000)
*/

const FS = FileStream;
let chats = {};
let list = {};
let reload;
function displayTime(time) {
    time = new Date(time);
    return time.getFullYear() + '년 ' + 
    (time.getMonth() + 1) + '월 ' + 
    time.getDate() + '일 ' + 
    time.getHours().toString().padStart(2, '0') + ':' 
    + time.getMinutes().toString().padStart(2, '0');
}
function toTimeNotation(sec, time) {
    time = new Date(time) == 'Invalid Date' ? new Date().getTime() : new Date(time).getTime();
    let date = new Date(time);
    let month = date.getMonth();
    let y = mo = w = d = h = m = s = 0;
    sec = Math.ceil(sec);
    let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let year = date.getFullYear();
    while (sec >= 60 * 60 * 24 * days) {
        sec -= 60 * 60 * 24 * days;
        mo++;
        time += 60 * 60 * 24 * days * 1000;
        let t = new Date(time);
        days = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
        year = t.getFullYear();
    }
    while (mo >= 12) {
        mo -= 12;
        y++;
    }
    while (sec >= 60 * 60 * 24 * 7) {
        sec -= 60 * 60 * 24 * 7;
        w++;
    }
    while (sec >= 60 * 60 * 24) {
        sec -= 60 * 60 * 24;
        d++;
    }
    while (sec >= 60 * 60) {
        sec -= 60 * 60;
        h++;
    }
    while (sec >= 60) {
        sec -= 60;
        m++;
    }
    let r = (((y !== 0) ? y + "년 " : "") + ((mo !== 0) ? mo + "개월 " : "") + ((w !== 0) ? w + "주일 " : "") + ((d !== 0) ? d + "일 " : "") + ((h !== 0) ? h + "시간 " : "") + ((m !== 0) ? m + "분 " : "") + ((sec !== 0) ? sec + "초" : ""));
    if (!r) 
        r = "0초";
    return r.trim();
}
function FSreplace(a) {
    return a.replace(/[\/:*?"<>|]/g, '');
}
const Pa = 'sdcard/' + User.path + '/';
const listpath = Pa + 'UserID';
let last = {};
let today = new Date().getDate();
function response(room, msg, sender, isGroupChat, replier, imageDB) {
    try {
            let hash = imageDB.getProfileHash() + [];
            let path = Pa + FSreplace(room);
            if (!reload) {
                chats = JSON.parse(FS.read(path)) || {};
                list = JSON.parse(FS.read(listpath)) || {};
                reload = true;
            }
            if (!chats[room]) 
                chats[room] = [];
            if (!list[room]) 
                list[room] = [];
            if (!last[room]) 
                last[room] = {};
            if (!list[room].find(s => s.ID == hash)) 
            list[room].push({
    name: sender, 
    ID: hash});
            chats[room].unshift({
    msg: msg, 
    sender: sender, 
    time: new Date().getTime(), 
    hash: hash});
            if (chats[room].length > User.max) 
                chats[room].pop();
            if (msg.startsWith(User.prefix)) {
                msg = msg.slice(User.prefix.length).trim();
            if (User.admin.includes(hash) || !User.admin.length) {
                if (/^아이디 @(.+)$/.test(msg)) {
                    let a = RegExp.$1.trimRight();
                    let match = list[room].filter(s => s.name.replace(/ /g, '').includes(a.replace(/ /g, '')));
                    if (!match.length) 
                        replier.reply(a + ' 키워드가 포함된 유저가 없습니다.');
                    else {
                        let result = match.length == 1 ? match[0].ID : match.map((s, i) => (i + 1) + '. ' + s.ID + '(' + s.name + ')').join('\n') + '\n\n[' + User.prefix + '선택 (번호)] 명령어로 특정 아이디만 출력';
                        replier.reply(result);
                        last[room][hash] = match;
                    }
                }
                if (/^선택 ([1-9]\d*)$/.test(msg)) {
                    let a = RegExp.$1;
                    if (!last[room][hash]) 
                        return;
                    if (last[room][hash].length > 1) {
                        let result = last[room][hash][a - 1];
                        if (!result) 
                            replier.reply('번호가 잘못되었습니다.');
                        else 
                            replier.reply(result.ID);
                    }
                }
                if (/^로그 [1-9]\d*( -?\d+)?$/.test(msg)) {
                    let c = msg.split(' ');
                    let n = +c[1].trim();
                    let p = c[2];
                    let a = chats[room].filter(s => p ? s.hash == p : true).slice(1, n + 1);
                    let all = '';
                    if (a.length > 3) 
                        all = '​'.repeat(500);
                    let r = a.map(s => {
    with (s) {
        return '[ ' + sender + ' ] ⟮' + hash + '⟯\n【' + displayTime(time) + '(' + toTimeNotation((new Date().getTime() - time) / 1000, time) + ' 전)】\n➵ ' + '“' + msg + '”';
    }
}).join('\n⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼⎼\n');
                    replier.reply('[ ' + a.length + '개의 채팅 기록입니다 ]\n' + all + '\n' + r);
                }
            }
        }
        FS.write(path, JSON.stringify(chats));
        FS.write(listpath, JSON.stringify(list));
    }  catch (e) {
    replier.reply(e + '\n#' + e.lineNumber);
}
}
//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}