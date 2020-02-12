
const db = require('../config/db')

const userAdmin   =   { id: 1000, name: 'Administrator', email: 'admin@domain.com',     pass: 'changeit' }
const userRoot    =   { id: 666,  name: 'Root',          email: 'root@domain.com',      pass: 'changeit' }
const usersNormal = [ { id: 0,    name: 'anonymous',     email: 'anonymous@domain.com', pass: 'changeit' },
                      { id: 1,    name: 'user',          email: 'user@domain.com',      pass: 'changeit' } ]
db('users').insert(userAdmin)
  .then(res  => console.log(res))
  .catch(err => console.log(err))
db.insert(userRoot).into('users')
  .then(res  => console.log(res))
  .catch(err => console.log(err))
db('users').insert(usersNormal)
  .then(res  => console.log(res))
  .catch(err => console.log(err))

const profilesNormal = [ { id: 0,    name: 'anonymous'     }, 
                         { id: 1,    name: 'user'          } ]
const profilesSuper =  [ { id: 666,  name: 'manager'       },
                         { id: 1000, name: 'administrator' } ]
db('profiles').insert(profilesNormal)
  .then(res  => console.log(res))
  .catch(err => console.log(err))
db.insert(profilesSuper).into('profiles')
  .then(res  => console.log(res))
  .catch(err => console.log(err))

const userProfile = [ { userId: 1000, profileId: 1000 },
                      { userId: 666,  profileId: 666  },
                      { userId: 0,    profileId: 0    },
                      { userId: 1,    profileId: 1    } ]
db('users_profiles').insert(userProfile)
  .then(res  => console.log(res))
  .catch(err => console.log(err))
