//CREATION DE LA SCENE
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: new DoubleSaut()
};
//VARIABLES
let player;
let platforms;
let cursors;

let game = new Phaser.Game(config);