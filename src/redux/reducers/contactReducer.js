const initialState =[
    {
        id:0,
        name: "nawel felah",
        number:16516165,
        email:"nf@gmail.com"
    },
    {
        id:1,
        name: "ahlem zouari",
        number:6561651,
        email:"az@gmail.com"
    },
];

const contactReducer = (state = initialState , action) =>{
    switch(action.type){
        case "ADD_CONTACT":
            state =[...state, action.payload];
            return state;
        default:
            return state;
    }
};

export default contactReducer;