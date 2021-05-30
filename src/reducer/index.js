import {TYPE} from './type';

export const reducer = (state, action) => {
    switch(action.type){
        case TYPE.PUT_NICKNAME : {
            return [...state, 
                putNick(action.payload.name, action.payload.nickname, action.payload.image)
            ];
        }
        case TYPE.PUT_OWN: {
            if(state.length > 0){
                for(let i = 0; i < state.length; i++){
                    if(state[i].name === action.payload.name){
                        state[i].name = action.payload.name
                        state[i].owned+=1
                        return [...state]  
                    }else{
                        if(state.length - 1 === i){
                            return [...state, 
                                putOwn(state, action.payload.name)
                            ];
                        }
                    }   
                }
            }
            else{
                return [...state, 
                    putOwn(state, action.payload.name)
                ];
            }
        }
        case TYPE.RELEASE_NICKNAME: {
            return releaseNick(state, action.payload.id)
        }
        case TYPE.RELEASE_OWN: {
            for(let i = 0; i < state.length; i++){
                if(state[i].name === action.payload.name){
                    state[i].owned-=1
                    if(state[i].owned === 0){
                        state.splice(i, 1)
                    }
                    break; 
                } 
            }
            return [...state]
        }       
        default : {return state};
    }
}


const putNick = (name, nickname, image) => {
    return {
        id: Date.now(),
        name: name,
        nickname: nickname,
        image: image
    }
}

const putOwn = (state, name) => {
    return {
        name: name,
        owned: 1
    } 
}
const releaseNick = (state, id) => {
    return state.filter(item => item.id !== id);
}