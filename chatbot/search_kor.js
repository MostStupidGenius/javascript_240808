const scriptName = "검색기";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
const hide = '\n' + '​'.repeat(500) + '\n';
function Han(word, include, exclude, isAttach, front, back) {
    const cho = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ';
    const mo = 'ㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣㅘㅚㅟㅢㅙㅞㅒㅖ';
    let text = word.trim();
    let last = text.slice(-1);
    if (cho.includes(last)) 
        last = '각';
    if (mo.includes(last)) 
        last = '가';
    return (isAttach ? (front || '') + text + (back || '') : '') + (((last.charCodeAt(0) - 44032) % 28 > 0) ? include : exclude);
}
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    msg = msg.trim();
    if (msg.startsWith('!검색 ')) {
        msg = msg.slice(3).trim();
        if (/[^ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(msg)) {
            replier.reply('❌표준국어대사전 검색 기능에서는 한글만 입력이 가능합니다.\n\n맞춤법 검사를 원하신다면 [!검사 맞춤뻡]과 같이 명령어를 입력해 보세요.');
            return;
        }
        let a;
        for (let i = 0; i < 3; i++) {
            try {
                a = org.jsoup.Jsoup.connect('https://stdict.korean.go.kr/search/searchResult.do?pageSize=10&searchKeyword=' + msg).get();
            }      catch (e) {
    continue;
}
            break;
        }
        if (!a) {
            replier.reply('⛔일시적 오류입니다. 잠시 후 다시 시도하십시오.');
            return;
        }
        let b = a.select('dt');
        let result = [];
        for (let i = 0; i < b.length; i++) {
            let q = b.get(i).toString();
            let word = q.split('t_blue1"> ')[1].split('</a>')[0].replace('<sup>', '(').replace('</sup>', ')').trim();
            let type = q.split('</span>')[1].split('<span')[0].trim();
            let meaning = q.split('dataLine">')[1].split('</font')[0].trim();
            result.push({
    word: word, 
    type: type, 
    meaning: meaning.replace(/<[^>]+>/g, '')});
        }
        if (!b.length) {
            replier.reply('❌' + Han(msg, '은', '는', 1, '‘', '’') + ' 표준국어대사전에서 찾을 수 없는 단어입니다.\n\n맞춤법 검사를 원하신다면 [!검사 맞춤뻡]과 같이 명령어를 입력해 보세요.');
            return;
        }
        replier.reply('[ ✔' + Han(msg, '은', '는', 1, '‘', '’') + ' 표준국어대사전에서 ' + b.length + '건의 검색 결과가 있습니다 ]' + hide + result.map(s => '< ' + s.word + ' >\n' + s.type + s.meaning).join('\n\n'));
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