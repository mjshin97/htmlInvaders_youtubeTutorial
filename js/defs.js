const ImageFiles = [
    'playerShip1_blue'
]


const GameSettings = {
    keyPress: { /*object 객체*/
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        space: 32
    },
    PluyAreaWidth: 720,
    PlayAreaHeight: 576,
    PlayAreaDiv: '#playArea',

    playerDivName: 'playerSprite',
    playerStart: {
        x: 360,
        y: 440
    }

};

let GameManager = {
    assets : {},
    player : undefined
}
