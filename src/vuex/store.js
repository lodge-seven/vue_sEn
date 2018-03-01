import Vue from 'vue'
import Vuex from 'vuex'
import editModule from './modules/md_editor'
import userModule from './modules/md_userinfo'
import MainNavModule from './modules/md_mainnav'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        editor:editModule,
        user:userModule,
        mainav:MainNavModule
    }
})
export default store