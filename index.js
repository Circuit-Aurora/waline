const Waline = require('@waline/vercel');

module.exports = Waline({
  secureDomains: 'circuit-aurora.github.io'
  forbiddenWords: [
    '傻',
    '智障',
    '没妈',
    '死妈',
    '台独',
    '港独',
    '澳独',
    '疆独',
    '习近平',
    '毛泽东'
  ]
});
