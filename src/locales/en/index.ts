import accounts from './accounts.json';
import admin from './admin.json';
import auth from './auth.json';
import classification from './classification.json';
import common from './common.json';
import components from './components.json';
import dashboard from './dashboard.json';
import layout from './layout.json';
import profile from './profile.json';
import recurring from './recurring.json';
import users from './users.json';

export default {
    admin,
    auth,
    common,
    components,
    dashboard,
    profile,
    classification,
    accounts,
    recurring,
    layout,
    users,
} as const;
