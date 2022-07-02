const login = {
    namespaced: true,
    state: {
        loginBtnShow: false
    },
    mutations: {
        setLoginBtnShow(state, payload) {
            state.loginBtnShow = payload
        }
    }
};
 
export default login;