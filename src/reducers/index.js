export default initialState = {
    additionalPrice: 0,
    car: {
      price: 59995,
      name: '2020 Chevrolet Corvette',
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