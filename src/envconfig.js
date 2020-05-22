require('dotenv').config();

module.exports = {
    checkVariables(envs) {
        for (env in envs) {
            if ( envs[env] === '') {
                return env;
            }
        }
        return true;
    }
}