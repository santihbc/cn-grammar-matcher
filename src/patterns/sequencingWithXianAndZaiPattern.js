/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGLJM55',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'sequencingWithXianAndZai',
  name: '先 + [Verb Phrase 1] + 再 + [Verb Phrase 2]',
  description:
    'The word 再 (zài) actually has a lot of uses, beyond just "again."  "先⋯⋯， 再⋯⋯" (xiān..., zài...) is a pattern used for sequencing events, much like "First..., then..." in English. This pattern can also include "然后" (ránhòu) meaning "and after that."',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(先)[^再]+(再说?)/)]),
  examples: [
    {
      zh: '先洗手再吃。',
      en: 'Wash your hands, and then eat.',
      src: allSetSrc,
    },
    {
      zh: '我喜欢先洗澡，再睡觉。',
      en: 'I prefer to take a bath before I go to bed.',
      src: allSetSrc,
    },
    {
      zh: '请你先买票再进。',
      en: 'Please buy a ticket first, and then you come in.',
      src: allSetSrc,
    },
    {
      zh: '你要先做作业再看电视。',
      en: 'First you need to do your homework, and then you can watch.',
      src: allSetSrc,
    },
    {
      zh: '你先找工作再考虑买房子。',
      en: 'First find a job, then you can think about buying a house.',
      src: allSetSrc,
    },
    {
      zh: '先吃饭再说。',
      en: "Let's eat first, then we'll talk.",
      src: allSetSrc,
    },
    {
      zh: '先休息一下再说。',
      en: "Let's rest a little first, then talk.",
      src: allSetSrc,
    },
    {
      zh: '你先看完再说。',
      en: 'Finish reading first, and then we can talk.',
      src: allSetSrc,
    },
    {
      zh: '我先问一下老板再说。',
      en: "I'm going to ask the boss first.",
      src: allSetSrc,
    },
    {
      zh: '你们先讨论一下再说。',
      en: "You guys discuss a little first, then we'll talk.",
      src: allSetSrc,
    },
    {
      zh: '今早我起床以后先准备早饭，再叫孩子们起床，接着我们一起吃早饭，然后我送他们去学校。',
      en:
        'After I got up this morning, I first prepared breakfast, and then I woke up the kids. Afterwards, we ate breakfast together. After that, I took them to school.',
      src: allSetSrc,
    },
  ],
};