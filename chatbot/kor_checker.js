const hide = '\n' + '​'.repeat(500) + '\n';
const notice = '\n\n💠 “검사기는 참고용이므로 무작정 신뢰하지 마세요.”';
const made = '\n\n🌀 제작자. 맞춤법\n🔗 https://open.kakao.com/o/sV2Hr0Dg';
const Length = 28;
const line = '━'.repeat(Length);
const additionalErrors = {
    '않되': '안 돼', 
    '않돼': '안 돼'};
replaceAll = s => {
    return s.replace(/철자 검사를 해 보니.+/, '틀린 말로 판단하였습니다.')
    .replace(/종결어미 다음에 쓰거나.+/, '종결어미 다음에 쓰거나 문장을 마치면서 쓰는 종결형 문장부호는 종결어미 다음에 바로 붙여서 써야 바릅니다.')
    .replace(/ 문서 작성시 필요에.+/, '')
    .replace(/ 철자법 오류에 대한 도움말.+/, '철자법 오류입니다.')
    .replace(/ 대치어를 참고하여.+/, '').trim();
};
getType = s => {
    let result;
    switch (s) {
        case 1:
            result = '표기 오류 \xb7 정확도 80%';
            break;
        case 2:
            result = '표기 오류 \xb7 정확도 99%';
            break;
        case 3:
            result = '표기 오류 \xb7 정확도 60%';
            break;
        case 4:
            result = '문법/문맥 오류';
            break;
        case 5:
            result = '문장 부호 오류';
            break;
        case 6:
            result = '기타 오류';
            break;
        case 7:
            result = '영어 표기 오류';
            break;
        default:
            result = '알 수 없는 오류';
    }
    return result;
};
String.prototype.replaceAt = function(start, end, replace) {
    let a = this.split('');
    a.splice(start, end - start, replace);
    return a.join('');
};
Array.prototype.coverup = function(length, max) {
    if (!length) 
        length = 25;
    if (!max) 
        max = 33;
    const len = length - 1;
    const line = '━'.repeat(len);
    let res = '┏' + line + '\n';
    res += this.map(s => s.split('\n').map(d => (d ? (d.match(new RegExp('.{0,' + max + '}', 'g')).slice(0, -1)) : ['']).map(f => '┃' + f).join('\n')).join('\n')).join('\n┣' + line + '\n');
    res += '\n┗' + line;
    return res;
};
spellCheck = (msg, sender) => {
    try {
        const title = '📥 ' + msg + '\n\n';
        let a;
        let json;
        const rep = 5;
        let stack = 0;
        for (let i = 0; i < rep; i++) {
            try {
                let jsoup = org.jsoup.Jsoup.connect('http://speller.cs.pusan.ac.kr/results').data('text1', msg).post();
                let str = jsoup.toString();
                if (str.includes('<td id="tdBody" style="text-align: center;">맞춤법 검사기 서버에서 결과를 받지 못했습니다.')) 
                    return title + '⛔ 일시적 오류로 인해 결과를 받지 못했습니다. 잠시 후 다시 시도하십시오.';
                let obj = jsoup.select('script[type=text/javascript]').toString();
                if (!obj) 
                    return title + '⛔ 검사기가 응답이 없습니다. 잠시 후 다시 시도하십시오.';
                if (str.includes('맞춤법과 문법 오류를 찾지 못했습니다.')) 
                    stack++;
                else {
                    json = obj.split('data = ')[1].split('pageIdx')[0].trim().slice(0, -1).replace(/<[^>]+>/g, '').replace(/&apos;/g, '\'').replace(/&[^;]+;/g, '');
                    break;
                }
            }      catch (e) {
    let error = (e + []).trim();
    if (error.includes('JavaException: java.net.UnknownHostException:') || error.includes('JavaException: java.net.SocketTimeoutException:')) 
        return title + '⛔ 검사기의 인터넷 연결이 좋지 않습니다. 잠시 후 다시 시도하십시오.';
    return title + '알 수 없는 오류 발생!\n아래 오류 메시지를 개발자에게 보여 주세요.\n\n' + e + '\n#' + e.lineNumber;
}
        }
        if (stack == rep) {
            let fixed = msg;
            Object.keys(additionalErrors).forEach(s => fixed = fixed.replace(s, additionalErrors[s]));
            if (msg != fixed) 
                return title + '✔ ' + sender + ' 님, 검사기에서 오류는 발견되지 않았으나, 개발자가 수동으로 추가한 맞춤법 검사기에서 오류를 발견했습니다.\n풀이는 표시되지 않습니다.\n\n📤 ' + fixed;
            return title + '✔ ' + sender + ' 님, 검사 오류를 줄이기 위해 ' + rep + '회 반복 검사했지만, 맞춤법 오류를 찾지 못했습니다.' + notice;
        }
        a = JSON.parse(json)[0];
        let ori = a.str;
        let errorpart = ori;
        let result = ori;
        let explain = ori;
        let help = a.errInfo.reverse().map((s, i) => {
    let st = s.start;
    let en = s.end;
    let error = a.str.slice(st, en).trim();
    let edit = s.candWord.split('|')[0].trim();
    errorpart = errorpart.replaceAt(st, en, '{' + error + '}');
    result = result.replaceAt(st, en, edit);
    explain = explain.replaceAt(st, en, '{' + edit + '}');
    //return JSON.stringify(s,0,4)
    return '<' + error + '>\n「' + getType(s.correctMethod) + '」\n\n' + (!s.candWord.length ? '🔍 대체 문구 없음' : '📝 [' + s.candWord.split('|').join('] [').trim() + ']') + '\n\n💡 “' + replaceAll(s.help) + '”';
}).reverse().map((s, i) => '(' + (i + 1) + ') ' + s).coverup(Length, 34);
        return '❗ < ' + a.errInfo.length + '개 오류 발견 > ❗\n\n📥 ' + msg + '\n📖 ' + errorpart + '\n\n📤 ' + result + '\n📖 ' + explain + hide + '\n\n\n' + help + '\n\n\n' + notice + made;
    }  catch (e) {
    return title + '⛔ 일시적 오류입니다. 잠시 후 다시 시도하십시오.\n\n' + e + '\n#' + e.lineNumber;
}
};
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    msg = msg.trim();
    if (msg.startsWith('!검사 ')) {
        let a = msg.slice(4).replace(/\n/g, ' ').trim();
        replier.reply(sender + ' 님, 검사를 시작합니다.');
        replier.reply(spellCheck(a, sender));
    }
}
