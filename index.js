const Waline = require('@waline/vercel');

module.exports = Waline({
  secureDomains: 'https://circuit-aurora.github.io/'
});

module.exports = Waline({
  forbiddenWords: [
    '傻',
    '智障',
    '没妈',
    '操',
    '死妈',
    '台独',
    '习近平',
    '毛泽东'
  ]
});

module.exports = Waline({
  disallowIPList: [
    '177.18.2.206',
    '200.186.145.218',
    '117.41.183.100',
    '208.68.88.54',
    '123.30.180.135',
    '61.147.103.160',
    '218.108.0.73',
    '42.228.8.196',
    '81.94.193.29',
    '199.193.71.80'
  ]
});

module.exports = Waline({
  async preSave(comment) {
    const isSapm = await Akismet.check(comment);
    if(isSpam) {
      return { errmsg: 'It\'s a spam!' };
    }
  }
});

module.exports = Waline({
  async postSave(comment, pComment) {
    await mailto({
      mail: pComment.mail,
      text: `${comment.nick} replied your comment!`
    });
  }
});

module.exports = Waline({
  async preUpdate(comment) {
    return 'Then you can\'t update comment data';
  }
});

module.exports = Waline({
  async postUpdate(comment) {
    console.log(`comment ${comment.objectId} has been updated!`);
  }
});

module.exports = Waline({
  async preDelete(commentId) {
    return 'Then you can\'t delete comment';
  }
});

module.exports = Waline({
  async postDelete(commentId) {
    console.log(`comment ${commentId} has been deleted!`);
  }
});
