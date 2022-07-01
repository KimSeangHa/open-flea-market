const common = {
    namespaced: true,
    state: {
        device: "",
        mainSearchBar: true, // main Search Bar 표시 유무
        menuNumber: 1 // menu Select Number
    },
    getters: {
        GET_DEVICE: state => state.device
    },
    mutations: {
        setMainSearchBar(state, payload) {
            state.mainSearchBar = payload
        },
        setMenuNumber(state, payload) {
            state.menuNumber = payload
        }
    }
};
 
export default common;