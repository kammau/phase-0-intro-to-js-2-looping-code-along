function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(posIn) {
    while (posIn > -1) {
        console.log(posIn--)
    }
}
console.log(countDown(10))