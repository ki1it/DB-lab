
const Group = require('../models/Worker')
const UserInGroup = require('../models/Wagon')
const User = require('../models/Client')

Group.hasMany(UserInGroup, { foreignKey: 'id_gr', sourceKey: 'id' })
User.hasMany(UserInGroup, { foreignKey: 'id_us', sourceKey: 'id' })
UserInGroup.belongsTo(Group, { foreignKey: 'id_gr', targetKey: 'id' })
UserInGroup.belongsTo(User, { foreignKey: 'id_us', targetKey: 'id' })
async function init () {
  // await Worker.sync({force:true});

  await Group.sync()
  await User.sync()
  await UserInGroup.sync()
}

(async function f () {
  await init()
})()

// module.exports.init = init()
