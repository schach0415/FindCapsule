const User = require('./user')
const Capsule = require('./capsule')
const Rador = require('./rador')
const Event = require('./event')
const Content = require('./content')
const Spot = require('./spot')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Event.hasMany(Rador)
Event.hasMany(Capsule)
User.hasMany(Event)
Capsule.hasMany(Content)
Capsule.hasMany(Spot)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Capsule,
  Rador,
  Event,
  Content,
  Spot,
}
