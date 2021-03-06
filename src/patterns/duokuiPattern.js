/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG44TBS',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'duokui',
  structures: [
    '多亏（了）……',
    'Good Outcome, 多亏（了）……',
    '多亏（了）……，不然 Subj. ……',
    '多亏（了）……，Subj. 才 ……',
  ],
  description:
    '多亏(duōkuī) can be translated as "thanks to" and is used to express that, due to somebody\'s help, a negative result has been averted. 了 is often placed after it as it\'s about something in the past. Note that 多亏(duōkuī) can be placed in the beginning or the middle. You can add in 不然 for an "otherwise... (this really bad thing would have happened)" explanation. When the good outcome comes before 多亏, there is no need to add in 才. But if the good outcome comes after 多亏, you need to add in 才 to indicate "as a result...(the good outcome happened)."',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(多亏了?)[^然才]*(不然|才)?/)]),
  examples: [
    {
      zh: '多亏了大家的帮助！',
      en: "Thanks to everyone's help!",
      src: allSetSrc,
    },
    {
      zh: '我的问题能这么快解决，多亏了他的人脉关系。',
      en: 'Thanks to his connections, I can solve my problem so soon.',
      src: allSetSrc,
    },
    {
      zh: '你没迟到，多亏了她的车。',
      en: 'Thanks to her car, you were not late to get there.',
      src: allSetSrc,
    },
    {
      zh: '这件事情多亏了你的提醒，不然我肯定忘了。',
      en:
        'Thank you for your reminding me about this matter! Otherwise I would definitely forget.',
      src: allSetSrc,
    },
    {
      zh: '多亏你送她去医院了，不然她的情况会很严重。',
      en:
        'Thanks to you taking her to the hospital, otherwise her condition can be really severe.',
      src: allSetSrc,
    },
    {
      zh: '多亏了你的建议，不然我还不知道怎么办.',
      en: "Thanks to your advice, otherwise I still don't know what to do about it.",
      src: allSetSrc,
    },
    {
      zh: '多亏了你的车，我才没迟到.',
      en: "Thanks to your car, I'm not late to get here.",
      src: allSetSrc,
    },
    {
      zh: '多亏了你的介绍，我才有机会认识他.',
      en: 'Thanks to your introduction, I get the chance to meet him.',
      src: allSetSrc,
    },
    {
      zh: '多亏你帮我，我才能这么快做完。',
      en: 'Thanks for your help, I can finish doing it so soon.',
      src: allSetSrc,
    },
  ],
};
