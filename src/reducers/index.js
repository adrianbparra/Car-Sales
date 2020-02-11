import {ADD_FEATURE, REMOVE_FEATURE} from "../actions/index";

export const initialState = {
    additionalPrice: 0,
    addedFeatures: [],
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
    ],
    cars: [
        {
            id: 1,
            price: 59995,
            name: '2020 Chevrolet Corvette C8',
            image:
              'https://cdn.motor1.com/images/mgl/KqQjR/s1/2020-chevrolet-corvette-convertible-configurator.jpg',
            features: [
                { id: 1, name: 'Z 51', price: 5000 },
                { id: 2, name: 'Carbon Flash Wheels', price: 1500 },
                { id: 3, name: 'Premium sound system', price: 500 },
            ],
        },
        {
            id: 2,
            price: 47705,
            name : "2020 Ford Mustang",
            image: "//build.ford.com/dig/Ford/Mustang/2020/HD-TILE/Image%5B%7CFord%7CMustang%7C2020%7C1%7C1.%7C100A.P8T..YZ..882.LTS.COU.~VIRTUALPKGPART_AACAA_16.~VIRTUALPKGPART_AB2AA_18.~VIRTUALPKGPART_D17AA_21.~VIRTUALPKGPART_D2YFY_22.SYN.453.64A.MST.891.ANT.LRS.CLO.99H.RWD.44X.EBST.TDP.LESS.12A.13D.58A.2020%20P8T%20FORD.%5D/EXT/1/vehicle.png",
            features : [
                {id: 1, name: "5.2l Super Charged", price : 13000},
                {id: 2, name: "19in Carbon Fiber Wheels", price : 1400},
                {id: 3, name: "Leather Sport Seats", price:2000 },
            ],
        },
        {
            id: 3,
            price: 169990,
            name : "2020 Audi R8",
            image: "//mediaservice.audi.com/media/live/50710/n3c01aoa/4spree-0-kzv6w9/2020/14+t9t9/aaue0a/abo6h6/aer0p0/ata1x1/bav1la/bbo6fa/eph7x2/fsp5l1/gra8t2/hes5j2/hsw8it/ksuka2/kzv6w9/lia8g1/rad45d/zie4za.jpeg",
            features : [
                {id: 1, name: "20in Anthracite Wheels", price : 1800},
                {id: 2, name: "Carbon Front Spoiler", price : 2400},
            ],
        },
        {
            id: 4,
            price: 39995,
            name : "2020 Dodge Charger",
            image: "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVid9pavwXGXQpMTV1rUI1g6OQCckPquBhS1U%25jzbTllxA0omianvQFmwF1kpd2qeBoM&&pov=position1&width=1944&height=1052&bkgrnd=white&resp=jpg&cut=",
            features : [
                {id: 1, name: "Scat Pack", price : 6240},
                {id: 2, name: "Sun Roof", price : 1295},
                
            ],
        },
        {
            id: 5,
            price: 49990,
            name : "2020 Toyota Supra",
            image: "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2020/gr-supra/A96/1.png?bg=fff&fm=webp",
            features : [
                {id: 1, name: "Supra Command featuring touchpad control", price : 620},
                {id: 2, name: "Red leather-trimmed sport seats", price : 1295},
                
            ],
        },
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
