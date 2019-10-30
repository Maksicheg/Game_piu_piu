class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image('background', 'assets/images/backgrounds/background.jpg');
    this.load.image('red-donut', 'assets/images/game/gem-01.png');
    this.load.image('blue-donut', 'assets/images/game/gem-02.png');
    this.load.image('green-donut', 'assets/images/game/gem-03.png');
    this.load.bitmapFont('pixelFont', 'assets/images/font/font.png', 'assets/images/font/font.xml');
    this.load.audio('audio_beam', ['assets/sounds/beam.mp3', 'assets/sounds/beam.ogg']);
    this.load.audio('audio_explosion', ['assets/sounds/explosion.mp3', 'assets/sounds/explosion.ogg']);
    this.load.audio('audio_pickup', ['assets/sounds/pickup.mp3', 'assets/sounds/pickup.ogg']);
    this.load.audio('music', ['assets/sounds/sci-fi_platformer12.mp3', 'assets/sounds/sci-fi_platformer12.ogg']);

    this.load.spritesheet('ship1', 'assets/images/spritesheets/ship.png', {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.spritesheet('ship2', 'assets/images/spritesheets/ship2.png', {
      frameWidth: 32,
      frameHeight: 16,
    })
    this.load.spritesheet('ship3', 'assets/images/spritesheets/ship3.png', {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet('explosion', 'assets/images/spritesheets/explosion.png', {
      frameWidth: 16,
      frameHeight: 16,
    })

    this.load.spritesheet('power-up', 'assets/images/spritesheets/power-up.png', {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.spritesheet('player', 'assets/images/spritesheets/player.png', {
      frameWidth: 16,
      frameHeight: 24,
    })
    this.load.spritesheet('beam', 'assets/images/spritesheets/beam.png', {
      frameWidth: 16,
      frameHeight: 16,
    })

  }
  create() {
    // this.add.text(20, 20, 'Loading game...');
    this.scene.start("playGame");

    this.anims.create({
      key: 'ship1_anim',
      frames: this.anims.generateFrameNumbers('ship1'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship2_anim',
      frames: this.anims.generateFrameNumbers('ship2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'ship3_anim',
      frames: this.anims.generateFrameNumbers('ship3'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('power-up', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'gray',
      frames: this.anims.generateFrameNumbers('power-up', {
        start: 2,
        end: 3,
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'beam_anim',
      frames: this.anims.generateFrameNumbers('beam'),
      frameRate: 20,
      repeat: -1,
    });

  }
}
// hand;
// btnPlay;
// btnSfx;
// btnNoSfx;
// background;
// donut;
// menu;
// music;

// preload() {
//   game.load.image('background', 'images/backgrounds/background.jpg');
//   game.load.image('btn-play', 'images/btn-play.png');
//   game.load.image('donut', 'images/donut.png');
//   game.load.image('donut-logo', 'images/donuts_logo.png');
//   game.load.image('btn-sfx', 'images/btn-sfx.png');
//   game.load.image('btn-no-sfx', 'images/btn-no-sfx.png');
//   game.load.image('hand', 'images/game/hand.png');
//   game.load.audio('bg', 'audio/background.mp3');
// }


// create() {
//   game.physics.startSystem(Phaser.Physics.ARCADE);
//   //game.stage.backgroundColor = '#182d3b'
//   music = game.add.audio('bg');
//   //music.play();

//   background = game.add.tileSprite(0, 0, 800, 600, 'background');

//   btnPlay = game.add.button(game.world.centerX, game.world.centerY + 200, 'btn-play', actionOnPlayClick, this);
//   btnPlay.scale.setTo(0.8, 0.8);
//   btnPlay.anchor.set(0.5);
//   game.physics.arcade.enable(btnPlay);
//   btnPlay.enableBody = true;



//   btnSfx = game.add.button(680, 450, 'btn-sfx', actionOnSoundClick, this);
//   btnSfx.scale.setTo(0.5, 0.5);
//   btnNoSfx = game.add.button(680, 450, 'btn-no-sfx', actionOnSoundClick, this);
//   btnNoSfx.scale.setTo(0.5, 0.5);
//   btnNoSfx.visible = false;

//   let logo = game.add.sprite(game.world.centerX, game.world.centerY - 150, 'donut-logo');
//   logo.anchor.set(0.5);
//   //logo.body.velocity.x = 150;
//   // hand = game.add.sprite(game.world.centerX, game.world.centerY, 'hand');
//   // game.physics.arcade.enable(hand);
//   // hand.anchor.set(0.5);

//   donut = game.add.sprite(game.world.centerX - 123, 152, 'donut');

//   donut.scale.setTo(0.24, 0.24);
//   donut.anchor.set(0.5);




// }

// update() {
//   //game.physics.arcade.collide(donut, btnPlay);
//   donut.angle += 1;
// }

// actionOnSoundClick() {
//   if (btnSfx.visible) {
//     btnSfx.visible = !btnSfx.visible;
//     btnNoSfx.visible = !btnNoSfx.visible;
//     music.pause();
//   } else if (btnNoSfx.visible) {
//     btnSfx.visible = !btnSfx.visible;
//     btnNoSfx.visible = !btnNoSfx.visible;
//     music.resume();
//   }
// }

// actionOnPlayClick() {
//   game.physics.arcade.enable(donut);
//   // donut.body.gravity.y = 300;
//   // donut.body.velocity.x = 130;
//   // donut.body.bounce.y = 0.4;
//   // donut.enableBody = true;
// }