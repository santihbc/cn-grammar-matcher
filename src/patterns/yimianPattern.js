const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG1QB4K',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'yimian',
  structures: ['一面 + Verb +  一面 + Verb'],
  description:
    '一面 (yìmiàn)  is a more formal than 一边, but is used in the same way to express two simultaneous actions. It is used in the following way:',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([regexMatchLocs(text, /(一面)[^一面]+(一面)/)]);
  },
  examples: [
    {
      zh: '他喜欢一面吃东西，一面看电影。',
      en: 'He likes to eat and watch movies at the same time.',
      src: allSetSrc,
    },
    {
      zh: '我告诉你多少次了，别一面躺在床上一面吃零食！弄得床上都是碎屑!',
      en:
        'I told you so many times, don\'t eat while laying on the bed. The "clean" bed now has crumbs all over it!',
      src: allSetSrc,
    },
    {
      zh: '他们一家人一面赏月一面吃月饼。',
      en: 'They enjoy the moon and eat mooncakes together as a family.',
      src: allSetSrc,
    },
    {
      zh: '你会一面拍头一面揉肚子吗？',
      en: 'Can you pat your head and rub your belly at the same time?',
      src: allSetSrc,
    },
    {
      zh: '政府一面要控制通货膨胀，一面也要保证一定的经济增长速度。',
      en:
        "On one hand, the government is going to control inflation, but on the other hand, it's definitely going to protect economic growth.",
      src: allSetSrc,
    },
  ],
};
