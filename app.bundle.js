!function(e){function t(t){for(var i,a,r=t[0],c=t[1],h=t[2],l=0,u=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);u.length;)u.shift()();return o.push.apply(o,h||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],i=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},n={0:0},o=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var h=0;h<r.length;h++)t(r[h]);var d=c;o.push([16,1]),s()}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INITIAL_GAME_DATA=t.GAME_CONFIG=t.isDev=void 0;const i=s(17),n=s(46),o=s(47),a=s(48),r=s(49);t.isDev=!1,t.GAME_CONFIG={type:Phaser.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[n.MenuScene,i.GameScene,r.PreviewScene,o.FailScene,a.WinScene]},t.INITIAL_GAME_DATA={level:0}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=t.Button=void 0;var i=s(22);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.Button}});var n=s(23);Object.defineProperty(t,"Vector",{enumerable:!0,get:function(){return n.Vector}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SceneName=t.EnemyName=t.GameMode=t.Owner=void 0,function(e){e.player="player",e.enemy="enemy"}(t.Owner||(t.Owner={})),function(e){e.totalKills="totalKills"}(t.GameMode||(t.GameMode={})),function(e){e.bot="bot"}(t.EnemyName||(t.EnemyName={})),function(e){e.menu="MenuScene",e.preview="PreviewScene",e.game="GameScene",e.fail="FailScene",e.win="WinScene"}(t.SceneName||(t.SceneName={}))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Service=void 0;t.Service=class{constructor(e){this.scene=e}act(){}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HEX_COLORS=t.COLORS=void 0,t.COLORS={white:16777215,green:65280,red:16711680,gray:14540253,yellow:16548895},t.HEX_COLORS={white:"#ffffff",green:"#00ff00"}},function(e,t,s){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,s,i){void 0===i&&(i=s),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,i){void 0===i&&(i=s),e[i]=t[s]}),n=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||i(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),n(s(25),t),n(s(8),t),n(s(26),t)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GAME_DATA=void 0,t.GAME_DATA={title:"Space Invaders",subtitle:"The battle for the galaxy",scene:{minYPos:100,failTimeoutTime:2e3,winTimeoutTime:2e3,failTitleText:"The Mission failed!",failSubtitleText:"Your ship has been destroyed!",winTitleText:"Congratulations!",winSubtitleText:"You have completed the mission!"}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=void 0;class i extends Phaser.Scene{getData(){return this.game.data}}t.Scene=i},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOffsetToAngle=t.getNearestAngle=t.angleToRadians=t.angleToDegrees=t.getAngleBetween=void 0;const i=s(1);t.getAngleBetween=function(e,t){const s=e.x-t.x,i=e.y-t.y;let n=Math.atan2(i,s);return n<0&&(n+=2*Math.PI),n},t.angleToDegrees=function(e){return e/Math.PI*180},t.angleToRadians=function(e){return e*Math.PI/180},t.getNearestAngle=function(e,t,s){return Math.abs(e-t)<2?e:(Math.abs(e-t)<180?e<t?e+=s:e-=s:e<t?e-=s:e+=s,(e%360+360)%360)};t.getOffsetToAngle=(e,t)=>new i.Vector(Math.cos(e)*t,Math.sin(e)*t)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bullet=void 0;const i=s(0),n=s(2);t.Bullet=class{constructor(e,t,s,i){this.scene=e,this.pos=t,this.owner=s,this.damage=i}act(){}update(){const{body:e}=this;(e.x<0||e.x>i.GAME_CONFIG.width||e.y<0||e.y>i.GAME_CONFIG.height)&&this.destroy()}initCollisions(){const{scene:e,owner:t,damage:s}=this;t===n.Owner.player?e.enemies.forEach(t=>{e.physics.add.collider(this.body,t.body,()=>{this.explode(),t.damage(s)})}):e.physics.add.collider(this.body,e.player.body,()=>{this.explode(),e.player.damage(s)})}explode(){}destroy(){const{body:e}=this;this.scene.bullets=this.scene.bullets.filter(e=>e!==this),e.destroy()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Effect=void 0;t.Effect=class{constructor(e){this.scene=e}act(){}destroy(){const{body:e}=this;this.scene.effects=this.scene.effects.filter(e=>e!==this),e.destroy()}}},,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LEVELS_CONFIG=void 0;const i=s(2);t.LEVELS_CONFIG=[{title:"1. Red Alert",text:"Space invaders have attacked our base. Come back and find out the reason for the invasion.\n    \nWarning! A lot of invaders have been detected on our way. ",mission:"Mission: kill 30 invaders",mode:{type:i.GameMode.totalKills,target:30}}]},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Enemy=void 0;t.Enemy=class{constructor(e,t){this.scene=e,this.name=t}act(){}damage(e){this.hp-=e,this.hp<=0&&this.destroy()}destroy(){const{scene:e,body:t,coinChance:s}=this;e.enemies=e.enemies.filter(e=>e!==this),t.destroy();const i=e.getStats();Math.random()>1-s&&e.utils.createBonus(t.x,t.y),i.kills[this.name]+=1,i.totalKills+=1}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SphereBullet=t.LaserBullet=t.Bullet=void 0;var i=s(9);Object.defineProperty(t,"Bullet",{enumerable:!0,get:function(){return i.Bullet}});var n=s(35);Object.defineProperty(t,"LaserBullet",{enumerable:!0,get:function(){return n.Laser}});var o=s(38);Object.defineProperty(t,"SphereBullet",{enumerable:!0,get:function(){return o.Sphere}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Fire=t.Explode=t.Effect=void 0;var i=s(10);Object.defineProperty(t,"Effect",{enumerable:!0,get:function(){return i.Effect}});var n=s(36);Object.defineProperty(t,"Explode",{enumerable:!0,get:function(){return n.Explode}});var o=s(37);Object.defineProperty(t,"Fire",{enumerable:!0,get:function(){return o.Fire}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0,s(11);const i=s(0);class n extends Phaser.Game{constructor(e){super(e),this.data=i.INITIAL_GAME_DATA}}t.Game=n,window.addEventListener("load",()=>{const e=new n(i.GAME_CONFIG);i.isDev&&console.log("game",e)})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameScene=void 0;const i=s(0),n=s(6),o=s(18),a=s(7),r=s(41),c=s(2),h=s(42),d=s(45);let l;class u extends a.Scene{constructor(){super({key:c.SceneName.game}),this.enemies=[],this.bullets=[],this.effects=[],this.bonuses=[],this.money=0,this.services=[],this.stats=JSON.parse(JSON.stringify(d.INITIAL_STATS)),this.isWon=!1,this.isFail=!1}preload(){this.load.image("background-black","assets/images/background/black.png"),this.load.image("player-ship","assets/images/ships/player-ship.png"),this.load.image("enemy-ship","assets/images/ships/enemy-ship.png"),this.load.image("laser-green","assets/images/bullets/laser-green.png"),this.load.image("laser-red","assets/images/bullets/laser-red.png"),this.load.image("green-explode","assets/images/effects/green-explode.png"),this.load.image("red-explode","assets/images/effects/red-explode.png"),this.load.image("orange-explode","assets/images/effects/orange-explode.png"),this.load.image("star","assets/images/effects/star-4.png"),this.load.image("fire","assets/images/effects/fire-3.png"),this.load.image("comet","assets/images/effects/comet.png"),this.load.image("meteor-1","assets/images/effects/meteor-1.png"),this.load.image("meteor-2","assets/images/effects/meteor-2.png"),this.load.image("meteor-3","assets/images/effects/meteor-3.png"),this.load.image("meteor-4","assets/images/effects/meteor-4.png"),this.load.audio("laser-1",["assets/audio/sfx_laser1.ogg"]),this.load.audio("laser-2",["assets/audio/sfx_laser2.ogg"]),this.load.image("coin-bronze","assets/images/bonus/star-bronze.png"),this.load.image("coin-silver","assets/images/bonus/star-silver.png"),this.load.image("coin-gold","assets/images/bonus/star-gold.png")}init(e){this.params=e}create(){this.resetState(),this.physics.world.setBounds(0,0,i.GAME_CONFIG.width,i.GAME_CONFIG.height),this.add.tileSprite(i.GAME_CONFIG.width/2,i.GAME_CONFIG.height/2,i.GAME_CONFIG.width,i.GAME_CONFIG.height,"background-black"),l=this.add.graphics({lineStyle:{width:2,color:65280},fillStyle:{color:16711680}}),this.player=new r.Player(this),this.utils=new h.Utils(this),this.initListeners(),this.initServices()}initListeners(){this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M).on("down",()=>{this.player.body.active&&this.scene.start(c.SceneName.menu)})}initServices(){this.addService(o.StarsService,{count:20}),this.addService(o.MeteorsService,{}),this.addService(o.InterfaceService,{}),this.addService(o.LevelService,{}),this.addService(o.CometsService,{})}addService(e,t){this.services.push(new e(this,t))}update(){const{player:e}=this;0===e.lastShootTime&&(this.player.lastShootTime=this.time.now+100),l.clear(),this.enemies.forEach(e=>{e.act()}),this.bullets.forEach(e=>{e.act()}),this.effects.forEach(e=>{e.act()}),this.services.forEach(e=>{e.act()}),this.bonuses.forEach(e=>{e.act()}),this.player.act()}resetState(){this.bullets=[],this.enemies=[],this.effects=[],this.bonuses=[],this.money=0,this.services=[],this.stats=JSON.parse(JSON.stringify(d.INITIAL_STATS)),this.isWon=!1,this.isFail=!1}onFail(){this.isFail=!0,setTimeout(()=>{this.scene.start(c.SceneName.fail)},n.GAME_DATA.scene.failTimeoutTime)}onWin(){this.isWon||this.isFail||(this.isWon=!0,setTimeout(()=>{this.isFail||this.scene.start(c.SceneName.win)},n.GAME_DATA.scene.winTimeoutTime))}getStats(){return this.stats}}t.GameScene=u},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Service=t.CometsService=t.LevelService=t.InterfaceService=t.LoggerService=t.MeteorsService=t.StarsService=void 0;var i=s(19);Object.defineProperty(t,"StarsService",{enumerable:!0,get:function(){return i.StarsService}});var n=s(21);Object.defineProperty(t,"MeteorsService",{enumerable:!0,get:function(){return n.MeteorsService}});var o=s(27);Object.defineProperty(t,"LoggerService",{enumerable:!0,get:function(){return o.LoggerService}});var a=s(28);Object.defineProperty(t,"InterfaceService",{enumerable:!0,get:function(){return a.InterfaceService}});var r=s(29);Object.defineProperty(t,"LevelService",{enumerable:!0,get:function(){return r.LevelService}});var c=s(39);Object.defineProperty(t,"CometsService",{enumerable:!0,get:function(){return c.CometsService}});var h=s(3);Object.defineProperty(t,"Service",{enumerable:!0,get:function(){return h.Service}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarsService=void 0;const i=s(20),n=s(3);class o extends n.Service{constructor(e,t){super(e),this.stars=[],this.params=t,this.init()}init(){const{scene:e}=this,{count:t}=this.params;for(let s=0;s<t;s++)this.stars.push(new i.Star(e,{initialAlphaCoef:500*s}))}act(){this.update()}update(){this.stars.forEach(e=>{e.act()})}}t.StarsService=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Star=void 0;const i=s(0);t.Star=class{constructor(e,t){this.scene=e,this.body=e.add.sprite(Math.random()*i.GAME_CONFIG.width,Math.random()*i.GAME_CONFIG.height,"star"),this.initialCoef=t.initialAlphaCoef,this.body.setDepth(0),this.body.setScale(.25+.25*Math.random())}act(){this.update()}update(){const{scene:e,body:t,initialCoef:s,lastRelocationTime:n}=this;t.angle+=4,t.alpha=Math.sin((e.time.now+s)/1500),e.time.now>n&&t.alpha<=.5&&(t.x=Math.random()*i.GAME_CONFIG.width,t.y=Math.random()*i.GAME_CONFIG.height,this.lastRelocationTime=e.time.now+1e3)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeteorsService=void 0;const i=s(0),n=s(1),o=s(24),a=s(8),r=s(5),c=s(3);class h extends c.Service{constructor(e,t){super(e),this.meteors=[],this.meteorIntervalTime=1e3,this.meteorIntervalTimeRange=1e3,this.lastMeteorTime=0,this.maxCount=25,this.params=t,this.init()}init(){for(let e=0;e<r.getRandomInt(5,8);e++)this.spawnMeteor({outside:!1});for(let e=0;e<r.getRandomInt(3,5);e++)this.spawnMeteor({outside:!0})}act(){this.update()}update(){const{scene:e,maxCount:t}=this;e.time.now>this.lastMeteorTime&&this.meteors.length<t&&this.spawnMeteor({outside:!0}),this.meteors.forEach(e=>{const{body:t,speed:s}=e;t.angle+=.5*s.x,t.x+=s.x,t.y+=s.y,(t.x>i.GAME_CONFIG.width+200||t.y>i.GAME_CONFIG.height+200)&&(this.meteors=this.meteors.filter(t=>t!==e),t.destroy())})}spawnMeteor({outside:e}){const{scene:t}=this,s=t.time.now,{meteorIntervalTime:r,meteorIntervalTimeRange:c}=this,h=.5+1*Math.random(),d=a.angleToRadians(45),l=.25+2.5*Math.random(),u=new n.Vector(l*Math.cos(d),l*Math.sin(d)),p=Math.random()>.5?"x":"y",m=e?{x:"x"===p?Math.random()*(.75*i.GAME_CONFIG.width)-200:-200,y:"y"===p?Math.random()*(.75*i.GAME_CONFIG.height)-200:-200}:{x:i.GAME_CONFIG.width*Math.random(),y:i.GAME_CONFIG.height*Math.random()};this.meteors.push(new o.Meteor(t,m,u,{spriteIndex:1+Math.floor(4*Math.random()),alpha:.25+.6*Math.random(),scale:h})),this.lastMeteorTime=Math.random()*c+s+r*h}}t.MeteorsService=h},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const i=s(4);class n extends Phaser.GameObjects.Sprite{constructor(e,t,s,n,o){super(e,t,s,n),this.graphics=e.add.graphics({lineStyle:{width:2,color:i.COLORS.white},fillStyle:{color:i.COLORS.white}}),this.params=o,this.init()}init(){const{scene:e,graphics:t,x:s,y:n}=this,{width:o,height:a,text:r,disabled:c}=this.params;this.width=o,this.height=a,this.setOrigin(.5,0);const h=c?.5:1;c?t.alpha=h:this.setInteractive({cursor:"pointer"});const d=new Phaser.Geom.Rectangle(s-o/2,n,o,a);t.strokeRectShape(d);const l=e.add.bitmapText(s,n+Math.floor(a/2),"atari","",16).setOrigin(.5).setAlpha(h).setCenterAlign();l.setText(r),this.on("pointerover",()=>{t.alpha=h,t.lineStyle(2,i.COLORS.green),l.tint=i.COLORS.green,document.body.style.cursor="pointer",t.strokeRectShape(d)}),this.on("pointerout",()=>{t.alpha=h,t.lineStyle(2,i.COLORS.white),l.tint=i.COLORS.white,document.body.style.cursor="default",t.strokeRectShape(d)}),this.on("pointerdown",()=>{document.body.style.cursor="default"})}}t.Button=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vector=void 0;t.Vector=class{constructor(e,t){this.x=e,this.y=t}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Meteor=void 0;t.Meteor=class{constructor(e,t,s,i){this.scene=e,this.body=e.add.sprite(t.x,t.y,"meteor-"+i.spriteIndex),this.speed=s,this.body.setAlpha(i.alpha),this.body.setDepth(5),this.body.setScale(i.scale,i.scale)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCenterBody=void 0;const i=s(1);t.getCenterBody=(e,t,s,n,o={x:0,y:0})=>{const a=e/s/2-n+o.x,r=t/s/2-n+o.y;return new i.Vector(a,r)}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomInt=void 0;t.getRandomInt=(e,t)=>Math.round(e+Math.random()*(t-e))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoggerService=void 0;const i=s(3);class n extends i.Service{constructor(e,t){super(e),this.lastLogTime=0,this.params=t,this.init()}init(){}act(){this.update()}update(){const e=this.scene,t=e.time.now;t>this.lastLogTime&&(console.group("Stats"),console.log("effects: "+e.effects.length),console.log("enemies: "+e.enemies.length),console.log("bullets: "+e.bullets.length),console.groupEnd(),this.lastLogTime=t+2e3)}}t.LoggerService=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InterfaceService=void 0;const i=s(0),n=s(4),o=s(3);class a extends o.Service{constructor(e,t){super(e),this.params=t,this.init()}init(){const{scene:e}=this;this.graphics=e.add.graphics({lineStyle:{width:2,color:65280},fillStyle:{color:16711680}}),this.counterText=e.add.bitmapText(i.GAME_CONFIG.width-17,27,"atari","0",24).setOrigin(1,.5).setDepth(500),this.moneyText=e.add.bitmapText(283,27,"atari","0",24).setOrigin(0,.5).setDepth(500),this.playerHealthbar=new Phaser.Geom.Rectangle(20,22,i.GAME_CONFIG.width,11),this.graphics.setDepth(500),e.add.image(255,25,"coin-gold").setDepth(100)}act(){this.draw(),this.update()}draw(){this.drawHealthbar(),this.drawScore()}update(){}drawHealthbar(){const{graphics:e,scene:t,playerHealthbar:s}=this,{player:i}=t;e.clear(),e.fillStyle(n.COLORS.red),s.width=200,e.fillRectShape(s),e.fillStyle(n.COLORS.green),s.width=Math.max(i.hp/i.maxHp*200,0),e.fillRectShape(s),e.lineStyle(2,n.COLORS.white),s.width=200,e.strokeRectShape(s)}drawScore(){const{scene:e,counterText:t,moneyText:s}=this;t.setText(e.text),s.setText(e.money.toString())}}t.InterfaceService=a},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LevelService=void 0;const i=s(30),n=s(3);class o extends n.Service{constructor(e,t){super(e),this.params=t,this.init()}init(){const{scene:e}=this;this.currentLevel=new i.levels[e.params.level](e)}act(){this.update()}update(){const{scene:e,currentLevel:t}=this,s=t.checkForWin();e.text=t.getTextByMode(),t.update(),s&&e.onWin()}}t.LevelService=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.levels=void 0;const i=s(31);t.levels=[i.Level1]},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Level1=void 0;const i=s(12),n=s(32);class o extends n.Level{constructor(e){super(e,i.LEVELS_CONFIG[0].mode),this.nextAttemptTimeInterval=4e3}update(){const{scene:e,nextAttemptTime:t,nextAttemptTimeInterval:s}=this,i=e.time.now;i>t&&(this.makeAttempt(),this.nextAttemptTime=i+s)}makeAttempt(){const{scene:e}=this,{enemies:t}=e,s=e.getStats().totalKills>18?4:3;(t.length<2||t.length<s&&Math.random()>.5)&&this.createEnemy()}}t.Level1=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Level=void 0;const i=s(2),n=s(0),o=s(33);t.Level=class{constructor(e,t){this.nextAttemptTime=0,this.scene=e,this.mode=t}update(){}getTextByMode(){const{scene:e,mode:t}=this,s=e.getStats();switch(t.type){case i.GameMode.totalKills:return(t.target-s.totalKills).toString();default:throw new Error("Mode is not set!")}}checkForWin(){const{scene:e,mode:t}=this,s=e.getStats();switch(t.type){case i.GameMode.totalKills:return t.target-s.totalKills<=0;default:throw new Error("Mode is not set!")}}createEnemy(){const{scene:e}=this,t={x:n.GAME_CONFIG.width,y:n.GAME_CONFIG.height},s=Math.random()>.5?"y":"x",i=[-100,t[s]+100][Math.floor(2*Math.random())],a={x:"x"===s?i:Math.random()*n.GAME_CONFIG.width,y:"y"===s?i:Math.random()*n.GAME_CONFIG.height};e.enemies.push(new o.Bot(e,a))}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bot=t.Enemy=void 0;var i=s(13);Object.defineProperty(t,"Enemy",{enumerable:!0,get:function(){return i.Enemy}});var n=s(34);Object.defineProperty(t,"Bot",{enumerable:!0,get:function(){return n.Bot}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bot=void 0;const i=s(0),n=s(1),o=s(5),a=s(2),r=s(13),c=s(14);class h extends r.Enemy{constructor(e,t){super(e,a.EnemyName.bot),this.angle=0,this.coinChance=.9,this.weaponDamage=10,this.bodySize=32,this.depth=50,this.scale=.6,this.speed=2,this.rotateSpeed=2,this.hp=100,this.bulletSpeed=7,this.lastShoot=0,this.shootTime=1200,this.shootTimeRange=200,this.changeTargetInterval=1e3,this.changeTargetIntervalRange=2e3,this.body=e.physics.add.image(t.x,t.y,"enemy-ship"),this.init(),this.defineTarget=this.defineTarget.bind(this),this.defineTarget()}init(){const{scale:e,depth:t,body:s,bodySize:i}=this;s.setScale(e),s.setImmovable(!0),s.setDepth(t);const n=o.getCenterBody(s.displayHeight,s.displayHeight,e,i);s.setCircle(i,n.x,n.y)}act(){this.update()}update(){const{scene:e,body:t,angle:s,targetAngle:a,rotateSpeed:r}=this;this.body.angle=s-90;const c=o.angleToRadians(s);if(t.x+=this.speed*Math.cos(c),t.y+=this.speed*Math.sin(c),this.angle=o.getNearestAngle(s,a,r),(t.x<100||t.y<100||t.x>i.GAME_CONFIG.width-100||t.y>i.GAME_CONFIG.height-100)&&this.setTarget(new n.Vector(i.GAME_CONFIG.width/2,i.GAME_CONFIG.height/2)),this.scene.time.now>this.lastShoot){const t=e.player.body;this.shoot(new n.Vector(t.x,t.y))}}defineTarget(){const{changeTargetInterval:e,changeTargetIntervalRange:t}=this,s=new n.Vector(Math.random()*i.GAME_CONFIG.width,Math.random()*i.GAME_CONFIG.height);this.setTarget(s);const o=e+Math.random()*t;this.timeout=setTimeout(this.defineTarget,o)}setTarget(e){const{body:t}=this;this.targetPos=e,this.targetAngle=o.angleToDegrees(o.getAngleBetween(this.targetPos,t))}shoot(e){const{body:t,bulletSpeed:s,shootTimeRange:i,shootTime:r,weaponDamage:h}=this,d=o.getAngleBetween(e,new n.Vector(t.x,t.y));this.scene.bullets.push(new c.LaserBullet(this.scene,new n.Vector(t.x,t.y),a.Owner.enemy,{speed:o.getOffsetToAngle(d,s),angle:d,sprite:"laser-red",explodeSprite:"red-explode",damage:h})),this.lastShoot=this.scene.time.now+r+Math.random()*i}destroy(){const{scene:e,body:t}=this;e.utils.tripleExplode(t.x,t.y),clearTimeout(this.timeout),super.destroy()}}t.Bot=h},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Laser=void 0;const i=s(1),n=s(5),o=s(15),a=s(9);class r extends a.Bullet{constructor(e,t,s,i){super(e,t,s,i.damage),this.scale=.5,this.depth=10,this.bodySize=12,this.body=e.physics.add.image(t.x,t.y,i.sprite),this.params=i,this.init()}init(){const{body:e,scene:t,params:s,scale:i,depth:o}=this,{angle:a}=s;e.setAngle(n.angleToDegrees(a)+90),e.setDepth(o),e.setOrigin(.5,.5),e.setScale(i),this.initBody(),this.initCollisions(),t.add.existing(this.body)}initBody(){const{params:e,scale:t,bodySize:s}=this,{angle:i}=e,o=n.getOffsetToAngle(i,this.body.displayHeight/t/3),a=n.getCenterBody(this.body.displayWidth,this.body.displayHeight,t,s,o);this.body.setCircle(s,a.x,a.y)}act(){this.update()}draw(){}explode(){const{body:e,scene:t,params:s}=this;t.effects.push(new o.Explode(t,new i.Vector(e.x,e.y),{sprite:s.explodeSprite})),this.destroy()}update(){const{body:e}=this,{speed:t}=this.params;e.x+=t.x,e.y+=t.y,super.update()}}t.Laser=r},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Explode=void 0;const i=s(10);class n extends i.Effect{constructor(e,t,s){super(e),this.body=new Phaser.GameObjects.Sprite(e,t.x,t.y,s.sprite),this.params=s,this.startTime=e.time.now,this.body.setScale(0),this.body.setDepth(115),e.add.existing(this.body)}act(){this.update()}update(){const{scene:e,startTime:t}=this,s=e.time.now-t,i=Math.sin(s/150),n=i;this.body.angle+=3,this.body.setScale(n,n),this.body.setAlpha(i),i<.06&&s>100&&this.destroy()}}t.Explode=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Fire=void 0;const i=s(8),n=s(10);class o extends n.Effect{constructor(e,t,s){super(e),this.speed=1.7,this.body=new Phaser.GameObjects.Sprite(e,t.x,t.y,"fire"),this.params=s,this.body.setDepth(5),this.body.setAngle(i.angleToDegrees(s.angle)+90),this.startTime=e.time.now,this.params=s,e.add.existing(this.body)}act(){this.update()}update(){const{scene:e,body:t,speed:s,startTime:i,params:n}=this,o=e.time.now-i;t.alpha=1-o/150,t.x+=s*Math.cos(n.angle),t.y+=s*Math.sin(n.angle),t.alpha<=0&&this.destroy()}}t.Fire=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sphere=void 0;const i=s(9);class n extends i.Bullet{constructor(e,t,s,i){super(e,t,s,5),this.params=i}act(){this.draw(),this.update()}draw(){}update(){}}t.Sphere=n},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CometsService=void 0;const i=s(0),n=s(40),o=s(3);class a extends o.Service{constructor(e,t){super(e),this.comets=[],this.count=15,this.params=t,this.init()}init(){const{scene:e,count:t}=this;for(let s=0;s<t;s++)this.comets.push(new n.Comet(e,{}))}act(){this.update()}update(){this.comets.forEach(e=>{const{body:t}=e;t.y+=e.speed,t.y>i.GAME_CONFIG.height+100&&(e.updateParams(),e.refreshPosition())})}}t.CometsService=a},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Comet=void 0;const i=s(0),n=s(5);t.Comet=class{constructor(e,t){this.speed=3,this.scene=e,this.body=this.scene.add.image(n.getRandomInt(0,i.GAME_CONFIG.width),n.getRandomInt(0,i.GAME_CONFIG.height),"comet"),this.updateParams()}updateParams(){const{body:e}=this;e.setAlpha(.03+.1*Math.random()),e.setScale(.2,.75+.5*Math.random()),this.speed=n.getRandomInt(3,7)}refreshPosition(){const{body:e}=this;e.x=n.getRandomInt(0,i.GAME_CONFIG.width),e.y=-100}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;const i=s(0),n=s(1),o=s(6),a=s(2),r=s(5),c=s(14);t.Player=class{constructor(e){this.scale=.6,this.bodySize=26,this.speed=5,this.bulletSpeed=10,this.lastShootTime=0,this.shootTime=320,this.hp=100,this.maxHp=100,this.weaponDamage=10,this.angle=0,this.scene=e,this.body=this.scene.physics.add.image(300,300,"player-ship"),this.init()}init(){const{scene:e,scale:t}=this;this.body.setScale(t),this.body.setDepth(100),this.body.setImmovable(!0),e.add.existing(this.body)}act(){this.update()}update(){this.body.active&&(this.updateBody(),this.updateShooting(),this.updateMovement(),this.updateAngle())}updateBody(){const{scale:e,bodySize:t}=this,s=r.getOffsetToAngle(this.angle+Math.PI,10),i=r.getCenterBody(this.body.displayWidth,this.body.displayHeight,e,t,s);this.body.setCircle(t,i.x,i.y)}updateShooting(){const{scene:e}=this,t=e.input.activePointer;t.isDown&&this.shoot(new n.Vector(t.x,t.y))}updateMovement(){const{scene:e,body:t}=this,s=e.input.keyboard.createCursorKeys();let n=this.speed;(s.up.isDown||s.down.isDown)&&(s.right.isDown||s.left.isDown)&&(n*=.8),s.up.isDown?t.y-=n:s.down.isDown&&(t.y+=n),s.right.isDown?t.x+=n:s.left.isDown&&(t.x-=n),t.x<0&&(t.x=0),t.y<o.GAME_DATA.scene.minYPos&&(t.y=o.GAME_DATA.scene.minYPos),t.x>i.GAME_CONFIG.width&&(t.x=i.GAME_CONFIG.width),t.y>i.GAME_CONFIG.height&&(t.y=i.GAME_CONFIG.height)}updateAngle(){const{scene:e,body:t}=this,s=e.input.activePointer;this.angle=r.getAngleBetween(new n.Vector(s.x,s.y),new n.Vector(t.x,t.y)),this.body.angle=r.angleToDegrees(this.angle)+90}shoot(e){const{body:t,bulletSpeed:s,weaponDamage:i}=this;if(this.scene.time.now>this.lastShootTime){const o=r.getAngleBetween(e,new n.Vector(t.x,t.y));this.scene.bullets.push(new c.LaserBullet(this.scene,new n.Vector(t.x,t.y),a.Owner.player,{speed:r.getOffsetToAngle(o,s),angle:o,sprite:"laser-green",explodeSprite:"green-explode",damage:i})),this.lastShootTime=this.scene.time.now+this.shootTime}}damage(e){this.hp-=e,this.hp<=0&&this.destroy()}destroy(){const{scene:e,body:t}=this;e.utils.tripleExplode(t.x,t.y),t.destroy(),e.onFail()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Utils=void 0;const i=s(1),n=s(43),o=s(5),a=s(15);t.Utils=class{constructor(e){this.scene=e}explode(e,t){const{scene:s}=this;s.effects.push(new a.Explode(s,new i.Vector(e,t),{sprite:"orange-explode"}))}tripleExplode(e,t){const s=360*Math.random()/3;for(let i=0;i<3;i++){const n=o.angleToRadians(120*i+s);this.explode(e+30*Math.cos(n),t+30*Math.sin(n))}}createBonus(e,t){const{scene:s}=this;s.bonuses.push(new n.Coin(s,new i.Vector(e,t)))}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Coin=void 0;const i=s(44),n={0:{sprite:"coin-bronze",cost:5},1:{sprite:"coin-silver",cost:7},2:{sprite:"coin-gold",cost:10}};class o extends i.Bonus{constructor(e,t){super(e),this.lifeTime=5e3;const s=n[(()=>{const e=Math.random();return e>.5?0:e>.2?1:2})()];this.cost=s.cost,this.body=this.scene.physics.add.image(t.x,t.y,s.sprite),this.creationTime=e.time.now,this.init()}init(){this.body.setDepth(10),this.body.setCircle(16),this.initCollisions()}initCollisions(){const{scene:e}=this;e.physics.add.collider(this.body,e.player.body,()=>{e.money+=this.cost,this.destroy()})}act(){this.update()}update(){const{scene:e,body:t}=this,s=e.time.now;t.angle+=3*Math.sin(.003*s),e.time.now>this.creationTime+this.lifeTime&&this.destroy()}}t.Coin=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Bonus=void 0;t.Bonus=class{constructor(e){this.scene=e}act(){}destroy(){const{body:e}=this;this.scene.bonuses=this.scene.bonuses.filter(e=>e!==this),e.destroy()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INITIAL_STATS=void 0,t.INITIAL_STATS={totalKills:0,kills:{bot:0}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MenuScene=void 0;const i=s(4),n=s(6),o=s(0),a=s(1),r=s(2),c=s(7);let h=0,d=0,l=0,u=0,p=!1;class m extends c.Scene{constructor(){super({key:r.SceneName.menu})}preload(){p||(this.load.bitmapFont("atari","assets/fonts/atari/bitmap/gem.png","assets/fonts/atari/bitmap/gem.xml"),p=!0)}create(){this.graphics=this.add.graphics({lineStyle:{width:2,color:i.COLORS.white},fillStyle:{color:i.COLORS.white}}),this.drawTitle(200),this.drawStartButton(300),this.drawLabButton(365)}update(){this.updateRainbow()}drawTitle(e){this.add.bitmapText(o.GAME_CONFIG.width/2,e,"atari",n.GAME_DATA.title,32).setOrigin(.5).setCenterAlign();const t=this.add.dynamicBitmapText(o.GAME_CONFIG.width/2,e+45,"atari",n.GAME_DATA.subtitle,23).setOrigin(.5).setCenterAlign();t.setDisplayCallback(this.rainbowCallback),t.tint=i.COLORS.green}drawStartButton(e){new a.Button(this,o.GAME_CONFIG.width/2,e,"",{width:180,height:46,text:"Start game"}).on("pointerdown",()=>{this.scene.start(r.SceneName.preview,{level:this.getData().level})})}drawLabButton(e){new a.Button(this,o.GAME_CONFIG.width/2,e,"",{width:180,height:46,text:"Lab",disabled:!0}).on("pointerdown",()=>{console.log("lab")})}updateRainbow(){h=0,6==l++&&(d=(d+1)%4,l=0)}rainbowCallback(e){return e.color=i.COLORS.green,h=(h+1)%4,e.y=2*Math.cos(u+h),u+=.005,e}}t.MenuScene=m},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FailScene=void 0;const i=s(4),n=s(0),o=s(6),a=s(1),r=s(2),c=s(7);class h extends c.Scene{constructor(){super({key:r.SceneName.fail})}preload(){}init(e){this.params=e}create(){const e=n.GAME_CONFIG.height/2-105,t=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,e,"atari",o.GAME_DATA.scene.failTitleText,28),s=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,e+37,"atari",o.GAME_DATA.scene.failSubtitleText,21);t.setOrigin(.5,0).setCenterAlign().setTint(i.COLORS.red),this.add.existing(t),s.setOrigin(.5,0).setCenterAlign().setTint(i.COLORS.white),this.add.existing(s),this.drawTryAgainButton(e+103),this.drawMenuButton(e+103+65)}drawMenuButton(e){new a.Button(this,n.GAME_CONFIG.width/2,e,"",{width:160,height:46,text:"Go to menu"}).on("pointerdown",()=>{this.scene.start(r.SceneName.menu)})}drawTryAgainButton(e){const t=new a.Button(this,n.GAME_CONFIG.width/2,e,"",{width:160,height:46,text:"Try again"}),s={level:this.getData().level};t.on("pointerdown",()=>{this.scene.start(r.SceneName.game,s)})}}t.FailScene=h},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WinScene=void 0;const i=s(4),n=s(0),o=s(6),a=s(1),r=s(2),c=s(7);class h extends c.Scene{constructor(){super({key:r.SceneName.win})}preload(){}init(e){this.params=e}create(){const e=n.GAME_CONFIG.height/2-105,t=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,e,"atari",o.GAME_DATA.scene.winTitleText,28),s=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,e+37,"atari",o.GAME_DATA.scene.winSubtitleText,21);t.setOrigin(.5,0).setCenterAlign().setTint(i.COLORS.green),this.add.existing(t),s.setOrigin(.5,0).setCenterAlign().setTint(i.COLORS.white),this.add.existing(s),this.drawNextButton(e+103),this.drawMenuButton(e+103+65)}drawMenuButton(e){new a.Button(this,n.GAME_CONFIG.width/2,e,"",{width:160,height:46,text:"Go to menu"}).on("pointerdown",()=>{this.scene.start(r.SceneName.menu)})}drawNextButton(e){new a.Button(this,n.GAME_CONFIG.width/2,e,"",{width:160,height:46,text:"Next level",disabled:!0}).on("pointerdown",()=>{})}}t.WinScene=h},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewScene=void 0;const i=s(4),n=s(0),o=s(12),a=s(1),r=s(2),c=s(7);class h extends c.Scene{constructor(){super({key:r.SceneName.preview})}init(e){this.params=e}create(){const{params:e}=this,{level:t}=e,{title:s,text:a,mission:r}=o.LEVELS_CONFIG[t],c=n.GAME_CONFIG.height/2,h=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,0,"atari",s,32);h.setOrigin(.5,0).setCenterAlign();const d=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,0,"atari",a,18);d.setMaxWidth(400).setOrigin(.5,0).setCenterAlign();const l=new Phaser.GameObjects.BitmapText(this,n.GAME_CONFIG.width/2,0,"atari",r,18);l.setMaxWidth(400).setOrigin(.5,0).setCenterAlign().setTint(i.COLORS.green);const u=c-(h.height+d.height+l.height+100)/2;h.y=u-25,d.y=h.y+65,l.y=d.y+d.height+25,this.add.existing(h),this.add.existing(d),this.add.existing(l),this.drawButton(l.y+l.height+45)}drawButton(e){const t=new a.Button(this,n.GAME_CONFIG.width/2,e,"",{width:120,height:46,text:"Go"}),s={level:this.params.level};t.on("pointerdown",()=>{this.scene.start(r.SceneName.game,s)})}}t.PreviewScene=h}]);