import { STORE_AUTH } from '../../config/app-config';

function getStoreAuth() {
    // default state if not exist
    var state = {
        user: { "BRANCH_CODE": "16011011", "PC_ID": "031", "OPER_ID": "TEST" },
        login_time: 1526865746,
        authenticated: true
    };

    try {
        var storeStr = localStorage.getItem(STORE_AUTH);

        if (storeStr == "{}") {
            return state;
        }

        var store = JSON.parse(storeStr);
        console.log(store)
        if (store == null || typeof store === "undefined") {
            return state;
        } else {
            return store;
        }

    } catch (err) {
        console.log("getStoreAuth error", err);
        return state;
    }
}

const state = getStoreAuth();
console.log(state);
// getters
const getters = {
    authState: state => state,
    authUser: (state) => state.user
}

// mutations
const mutations = {}

// actions
const actions = {}

export default {
    state,
    getters,
    actions,
    mutations
}