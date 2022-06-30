const common = {
    namespaced: true,
    state: {
        device: "",
        mainSearchBar: true // main Search Bar 표시 유무
    },
    getters: {
        GET_DEVICE: state => state.device
    },
    mutations: {
        setMainSearchBar(state, payload) {
            state.mainSearchBar = payload
        }
    }
};
 
export default common;