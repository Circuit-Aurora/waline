const Waline = require('@waline/vercel');

module.exports = Waline({
  secureDomains: 'waline.js.org'

  forbiddenWords: [
    '傻逼',
    '智障',
    '没妈',
    '草泥马',
    '操你妈'
  ]

  async preSave(comment) {
    const isSapm = await Akismet.check(comment);
    if(isSpam) {
      return { errmsg: 'It\'s a spam!' };
    }
  }

  async postSave(comment, pComment) {
    await mailto({
      mail: pComment.mail,
      text: `${comment.nick} replied your comment!`
    });
  }

  async preUpdate(comment) {
    return 'Then you can\'t update comment data';

  async postUpdate(comment) {
    console.log(`comment ${comment.objectId} has been updated!`);
  }

  async preDelete(commentId) {
    return 'Then you can\'t delete comment';
  }

  async postDelete(commentId) {
    console.log(`comment ${commentId} has been deleted!`);
  }
});
