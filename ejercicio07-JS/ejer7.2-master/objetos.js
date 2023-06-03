const info = {
    
    name: 'Brian',
    lastName: 'Basualdo',
    age: 28,
    height: 180,
    isDeveloper: true,

}

const age = info.age

const data = [{
    name: 'Brian',
    lastName: 'Basualdo',
    age: 28,
    height: 180,
    isDeveloper: true,
},

{
    name: 'Franco',
    lastName: 'Maluendez',
    age: 30,
    height: 179,
    isDeveloper: false,
},

{
    name: 'Nicolas',
    lastName: 'Pove',
    age: 29,
    height: 178,
    isDeveloper: false,
}
]

const newData = data.sort((a,b) => b.age - a.age);