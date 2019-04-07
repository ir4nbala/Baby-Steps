function myVocation(hero) {
    switch (hero) {
        case 'Knight':
            return 'You are a amazing knight!'
        case 'Mage':
            return 'You are a strong Mage!'
        case 'Prist':
            return 'Pray for us!'
        case 'Ranger':
            return 'You have a nice pet with you!'
        default:
            return 'HELLP, A MONSTER IS GONNA KILL US!!!'
    }
}

console.log(myVocation('rat'))