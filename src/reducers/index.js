import {ADD_FEATURE, REMOVE_FEATURE} from "../actions/index";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 59995,
      name: '2020 Chevrolet Corvette C8',
      image:
        'https://cdn.motor1.com/images/mgl/KqQjR/s1/2020-chevrolet-corvette-convertible-configurator.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'SuperCharged', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}


export const CarReducer = (state= initialState, action) =>{


    switch(action.type){
        case ADD_FEATURE:
            return {
                
                ...state,
                additionalPrice : state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [ 
                        ...state.car.features,
                        action.payload
                    ]
                }
            }
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter((feature)=>{
                        return action.payload.id !== feature.id
                    })
                }
            }
        default:
            return state
    }
}
