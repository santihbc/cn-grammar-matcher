/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGYKH5G',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'nanguai',
  name: '难怪 + [Specific Person / People]',
  description:
    '难怪 (nánguài) when used as a verb can be translated as "hard to blame." This is usually directed at a person, and it is similar to how in English we may say "He\'s always sleepy, but you can\'t blame him because he works a night shift."',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(难怪)/)]);
  },
  examples: [
    {
      zh: 'A:他迟到了。B:这也难怪。今天地铁坏了。',
      en: "A: He's late. B: Don't blame him, the subway broke down today.",
      src: allSetSrc,
    },
    {
      zh: '难怪他，他还是个孩子呢，什么都不懂。',
      en: "Don't blame him, he's just a child. He doesn't know any better.",
      src: allSetSrc,
    },
    {
      zh: '这也难怪你，第一次到这个地方还不了解这里的风俗。',
      en:
        "No one can blame you, the first time I came here, I didn't understand the customs.",
      src: allSetSrc,
    },
    {
      zh: '这也难怪，他刚来嘛，算了算了。',
      en: "Don't blame anyone, he just got here, forget it.",
      src: allSetSrc,
    },
  ],
};
