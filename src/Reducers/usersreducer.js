const initialState = {
    users: [{name: "Frankie", userid: 4274227, gender: "male"}]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            break;
        default:
            return state;
    }
};

export default userReducer;