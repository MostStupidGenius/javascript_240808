const scriptName = "한영번역기";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    msg = msg.trim();
    if (/^!한영 (.+)$/.test(msg)) {
        let a = RegExp.$1.trim();
        let textkor = a.replace(/[^ㄱ-ㅎ가-힣ㅏ-ㅣ]/g, '').length;
        let texteng = a.replace(/[^a-zA-Z]/g, '').length;
        let lang;
        if (textkor >= texteng) 
            lang = 'ko/en/한국어/영어';
        else if (texteng >= textkor) 
            lang = 'en/ko/영어/한국어';
        else {
            replier.reply('[ ' + a + ' ]\n\n❌한국어 또는 영어가 감지되지 않았습니다.');
            return;
        }
        let res = lang.split('/');
        try {
            let translate = Api.papagoTranslate(res[0], res[1], a);
            replier.reply('{ (감지)' + res[2] + ' ➺ ' + res[3] + ' }\n◆ ' + a + '\n\n◇ ' + translate);
        }    catch (e) {
    if ((e + []).includes('InternalError: Unable to resolve')) 
        replier.reply('⛔일시적 오류입니다. 잠시 후 다시 시도하십시오.');
    else 
        replier.reply(e);
        replier.reply('⛔하루에 사용 가능한 사용량을 초과하였습니다.');
}
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