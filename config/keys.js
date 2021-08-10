//key.js - no need to commit this
if( process.env.NODE_ENV === 'production' ){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}

/*
//dev.js - no need to commit this
module.exports = {
    googleClientID : '572820114901-7h075qqe8i5d9mamogcad60oid5gna41.apps.googleusercontent.com',
    googleClientSecret : 'g45ePTQAlxan-rEXrW-DZlD9',
    mongoURI: 'mongodb+srv://dbUser:123dbUser123@reactmarketingcampaign.ga76a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    cookieKey: 'sdfsfsadawd'
}

STRIPE PUBLIC : pk_test_51JMvYrCYAFDOk6O8BjHidVKs6bTa6xErOOI0V9Ou9MZNlz1nH6dC0wG1oWWTWx3HQPujs9BU6OmPJ6JcWnUiVI7y00AwjoqSsz
SECRET: sk_test_51JMvYrCYAFDOk6O8ZSFG7ycSxc0y1JoypHWSQ7MUhYJgyC5SdJpnzBrCXe6yQLmapl4PEnYRwkYFv2x6s7YPM8JE00DNndrBF1
*/