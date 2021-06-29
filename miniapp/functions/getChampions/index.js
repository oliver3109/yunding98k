// 云函数入口文件
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cloud = require('wx-server-sdk');

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();

  // 根据主键查询
  if (event._id) {
    return await db
      .collection('set4_champions')
      .where({ _id: event._id })
      .get();
  }

  // 默认查全部
  return await db.collection('set4_champions').limit(999).get();
};
