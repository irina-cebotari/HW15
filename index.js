// // ex1

// const time = 566

// // 1week 5days 
// // 4days 10hours
// // 7hours 50minutes
// // less than an hour 

// const week = 10080
// const day = 1440
// const hour = 60
// const minute = 1

// const timeFormat = (remainedTime) => {
//     if (remainedTime / week >= 1) {
//         const weekMark = Math.floor(remainedTime / week) !== 1 ? 'weeks' : 'week'
//         const dayMark = Math.floor((remainedTime % week) / day) > 1 ? 'days' : 'day'
//         return `${Math.floor(remainedTime / week)} ${weekMark} ${Math.floor((remainedTime % week) / day)} ${dayMark}`
//     }
//     if (remainedTime / day >= 1) {
//         const dayMark = Math.floor(remainedTime / day) !== 1 ? 'days' : 'day'
//         const hourMark = Math.floor((remainedTime % day) / hour) > 1 ? 'hours' : 'hour'
//         return `${Math.floor(remainedTime / day)} ${dayMark} ${Math.floor((remainedTime % day) / hour)} ${hourMark}`
//     }
//     if (remainedTime / hour >= 1) {
//         const hourMark = Math.floor(remainedTime / hour) !== 1 ? 'hours' : 'hour'
//         const minuteMark = Math.floor((remainedTime % hour) / minute) > 1 ? 'minutes' : 'minute'
//         return `${Math.floor(remainedTime / hour)} ${hourMark} ${Math.floor((remainedTime % hour) / minute)} ${minuteMark}`
//     }
//     if (remainedTime < hour) {
//         return `less than an hour`
//     }
// }


// console.log(timeFormat(time))



// // // ex2

// class Rock {
//     constructor(options) {
//         this.name = options.name
//         this.foundationYear = options.foundationYear
//         this.country = options.country
//         this.genre = 'Rock'
//     }
//     caracteristics() {
//         console.log('Basis in simple rhythms and melodic harmonies')
//     }
// }

// const ledZeppelin = new Rock({ name: 'Led Zeppelin', foundationYear: 1968, country: 'United Kingdom' })

// console.log(ledZeppelin)
// ledZeppelin.caracteristics()


// class HardRock extends Rock {
//     constructor(options) {
//         super(options)
//         this.subgenre = 'Hard Rock'
//     }
//     caracteristics() {
//         super.caracteristics()
//         console.log('Harder and more intense rhythms, increased energy in interpretation and performance')
//     }
// }

// const scorpions = new HardRock({ name: 'Scorpions', foundationYear: 1965, country: 'Germany' })
// console.log(scorpions)
// scorpions.caracteristics()

// class HeavyMetal extends Rock {
//     constructor(options) {
//         super(options)
//         this.subgenre = 'Heavy Metal'
//     }
//     caracteristics() {
//         console.log('Heavy distortion on guitars, bass and even vocals')
//     }
// }

// const ironMaiden = new HeavyMetal({ name: 'Iron Maiden', foundationYear: 1975, country: 'United Kingdom' })
// console.log(ironMaiden)
// ironMaiden.caracteristics()



// // // ex3

// const soad = {
//     name: 'System of a Down',
//     country: 'Armenia-America',
//     foundationYear: 1994,
//     genre: 'Rock',
//     subgenre: 'Alernative Metal, Nu Metal'
// }

// const { name, country, foundationYear, subgenre } = soad

// console.log(soad)
// console.log(name)
// console.log(country)
// console.log(foundationYear)
// console.log(subgenre)



// // // ex4

// const operation = (a, b) => {
//     const op1 = Math.pow(a, b)
//     const op2 = Math.sqrt(a + b)
//     const op3 = Math.sign(a - b)
//     const op4 = Math.abs(a - b)

//     return [op1, op2, op3, op4];
// }

// const [op1, op2, op3, op4] = operation(3, 6);
// console.log(operation(3, 6))


const func = ({a, b}) => {
    return a+b;
}

const obj = {b: 'World', a:"Hello"}

console.log(func(obj))