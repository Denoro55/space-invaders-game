/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([21,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isDev = exports.GAME_CONFIG = exports.LEVELS_CONFIG = exports.ENEMIES_CONFIG = exports.CONFIG = void 0;
var config_1 = __webpack_require__(22);
Object.defineProperty(exports, "CONFIG", { enumerable: true, get: function () { return config_1.CONFIG; } });
var enemies_1 = __webpack_require__(19);
Object.defineProperty(exports, "ENEMIES_CONFIG", { enumerable: true, get: function () { return enemies_1.ENEMIES_CONFIG; } });
var levels_1 = __webpack_require__(13);
Object.defineProperty(exports, "LEVELS_CONFIG", { enumerable: true, get: function () { return levels_1.LEVELS_CONFIG; } });
var game_1 = __webpack_require__(17);
Object.defineProperty(exports, "GAME_CONFIG", { enumerable: true, get: function () { return game_1.GAME_CONFIG; } });
exports.isDev = "production" === "development";


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector_1 = __webpack_require__(23);
Object.defineProperty(exports, "Vector", { enumerable: true, get: function () { return Vector_1.Vector; } });


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    constructor(scene) {
        this.scene = scene;
    }
}
exports.Service = Service;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HEX_COLORS = exports.COLORS = void 0;
exports.COLORS = {
    white: 0xffffff,
    green: 0x00ff00,
    red: 0xff0000,
    gray: 0xdddddd,
    yellow: 0xfc841f,
};
exports.HEX_COLORS = {
    white: "#ffffff",
    green: "#00ff00",
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
const components_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
class Enemy {
    constructor(scene, name) {
        this.isOutOfWorld = false;
        this.angle = 0;
        this.scene = scene;
        this.name = name;
    }
    act(time, delta) { }
    updateWorldCollisions(time, delta) {
        const { isOutOfWorld } = this;
        if (this.isOutsideScene(100)) {
            if (!isOutOfWorld) {
                const xRange = 250;
                const yRange = 150;
                const x = config_1.CONFIG.width / 2 - xRange + Math.random() * (xRange * 2);
                const y = config_1.CONFIG.height / 2 - yRange + Math.random() * (yRange * 2);
                const nextTarget = new components_1.Vector(x, y);
                this.onOutOfWorld(nextTarget);
            }
            this.isOutOfWorld = true;
        }
        else {
            this.isOutOfWorld = false;
        }
    }
    damage(value) {
        this.hp -= value;
        if (this.hp <= 0) {
            this.destroy();
        }
    }
    destroy() {
        const { scene, body, coinChance } = this;
        scene.enemies = scene.enemies.filter((b) => b !== this);
        body.destroy();
        const stats = scene.getStats();
        if (Math.random() > 1 - coinChance) {
            scene.utils.createBonus(body.x, body.y);
        }
        stats.kills[this.name] += 1;
        stats.totalKills += 1;
        scene.shakeScreen();
    }
    isOutsideScene(value = 0) {
        const { body } = this;
        if (body.x < value || body.x > config_1.CONFIG.width - value || body.y < value || body.y > config_1.CONFIG.height - value) {
            return true;
        }
        return false;
    }
    onOutOfWorld(nextTarget) { }
}
exports.Enemy = Enemy;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SphereBullet = exports.Bullet = void 0;
var Bullet_1 = __webpack_require__(18);
Object.defineProperty(exports, "Bullet", { enumerable: true, get: function () { return Bullet_1.Bullet; } });
var Sphere_1 = __webpack_require__(29);
Object.defineProperty(exports, "SphereBullet", { enumerable: true, get: function () { return Sphere_1.Sphere; } });


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIRainbowText = exports.UICosmons = exports.UIButton = void 0;
var Button_1 = __webpack_require__(46);
Object.defineProperty(exports, "UIButton", { enumerable: true, get: function () { return Button_1.UIButton; } });
var Cosmons_1 = __webpack_require__(47);
Object.defineProperty(exports, "UICosmons", { enumerable: true, get: function () { return Cosmons_1.UICosmons; } });
var RainbowText_1 = __webpack_require__(48);
Object.defineProperty(exports, "UIRainbowText", { enumerable: true, get: function () { return RainbowText_1.UIRainbowText; } });


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const config_1 = __webpack_require__(0);
class Scene extends Phaser.Scene {
    getData() {
        return this.game.data;
    }
    setData(key, value) {
        this.game.data[key] = value;
        if (config_1.isDev) {
            console.log(`[${key}] was updated in global data:`, this.game.data);
        }
    }
}
exports.Scene = Scene;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Flyer = exports.UFO = exports.Hunter = exports.Bot = exports.Enemy = void 0;
var Enemy_1 = __webpack_require__(6);
Object.defineProperty(exports, "Enemy", { enumerable: true, get: function () { return Enemy_1.Enemy; } });
var Bot_1 = __webpack_require__(24);
Object.defineProperty(exports, "Bot", { enumerable: true, get: function () { return Bot_1.Bot; } });
var Hunter_1 = __webpack_require__(33);
Object.defineProperty(exports, "Hunter", { enumerable: true, get: function () { return Hunter_1.Hunter; } });
var UFO_1 = __webpack_require__(34);
Object.defineProperty(exports, "UFO", { enumerable: true, get: function () { return UFO_1.UFO; } });
var Flyer_1 = __webpack_require__(35);
Object.defineProperty(exports, "Flyer", { enumerable: true, get: function () { return Flyer_1.Flyer; } });


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
class Effect {
    constructor(scene) {
        this.scene = scene;
    }
    act() { }
    destroy() {
        const { body } = this;
        this.scene.effects = this.scene.effects.filter((b) => b !== this);
        body.destroy();
    }
}
exports.Effect = Effect;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
const types_1 = __webpack_require__(1);
const config_1 = __webpack_require__(0);
const levels_1 = __webpack_require__(13);
class Level {
    constructor(scene) {
        this.nextAttemptTime = 0;
        this.levelState = null;
        this.scene = scene;
        const levelNumber = +this.constructor.name.slice(5) - 1;
        this.mode = levels_1.LEVELS_CONFIG[levelNumber].mode;
        if (this.mode.type === types_1.GameMode.waves) {
            this.setLevelState(0);
        }
    }
    setLevelState(levelNumber) {
        const { mode } = this;
        if (mode.type === types_1.GameMode.waves) {
            const maxMaves = mode.target.length;
            if (levelNumber >= maxMaves) {
                this.levelState = {
                    waveNumber: levelNumber,
                    enemies: [],
                    maxEnemies: 0,
                };
            }
            else {
                this.levelState = {
                    waveNumber: levelNumber,
                    enemies: [...mode.target[levelNumber].enemies],
                    maxEnemies: mode.target[levelNumber].maxEnemies,
                };
            }
        }
    }
    update() {
        const { scene, nextAttemptTime, nextAttemptTimeInterval } = this;
        const time = scene.gameTime;
        if (time > nextAttemptTime) {
            this.makeAttempt();
            this.nextAttemptTime = time + nextAttemptTimeInterval;
        }
        this.updateStatus();
    }
    updateStatus() {
        const { scene, mode } = this;
        const stats = scene.getStats();
        const modeType = mode.type;
        switch (mode.type) {
            case types_1.GameMode.totalKills: {
                const targetKills = +mode.target;
                this.status = targetKills - stats.totalKills;
                break;
            }
            case types_1.GameMode.enemyKills: {
                const targets = mode.target;
                const targetsCount = Object.values(targets).reduce((acc, e) => acc + e, 0);
                const targetsKilled = Object.keys(targets).reduce((acc, e) => {
                    const maxKills = targets[e];
                    return acc + Math.min(maxKills, stats.kills[e] || 0);
                }, 0);
                this.status = targetsCount - targetsKilled;
                break;
            }
            case types_1.GameMode.time: {
                this.status = Math.ceil(+mode.target - scene.gameTime / 1000);
                break;
            }
            case types_1.GameMode.waves: {
                const maxWaves = mode.target.length;
                this.status = maxWaves - this.levelState.waveNumber;
                break;
            }
            default: {
                throw new Error(`Mode "${modeType}" is not set or not defined!`);
            }
        }
        this.status = Math.max(this.status, 0);
    }
    getTextByMode() {
        if (this.status === undefined)
            return "";
        return this.status.toString();
    }
    checkForWin() {
        const { status } = this;
        if (status === undefined)
            return false;
        return status <= 0;
    }
    createEnemy(EnemyConstructor) {
        const { scene } = this;
        const mapping = {
            x: config_1.CONFIG.width,
            y: config_1.CONFIG.height,
        };
        const axis = Math.random() > 0.5 ? "y" : "x";
        const points = [-50, mapping[axis] + 50];
        const pointIndex = Math.floor(Math.random() * 2);
        const resultPoint = points[pointIndex];
        const spawnPoint = {
            x: axis === "x" ? resultPoint : Math.random() * config_1.CONFIG.width,
            y: axis === "y" ? resultPoint : Math.random() * config_1.CONFIG.height,
        };
        scene.enemies.push(new EnemyConstructor(scene, spawnPoint));
    }
    makeAttempt() {
        const { scene, mode, levelState } = this;
        if (mode.type === types_1.GameMode.waves) {
            const { maxEnemies, enemies } = levelState;
            const maxMaves = mode.target.length;
            const enemiesCount = scene.enemies.length;
            if (enemiesCount < maxEnemies) {
                const nextEnemy = enemies.shift();
                if (nextEnemy) {
                    this.createEnemy(nextEnemy);
                }
                else if (enemiesCount <= 0 && levelState.waveNumber < maxMaves) {
                    this.setLevelState(levelState.waveNumber + 1);
                }
            }
        }
    }
}
exports.Level = Level;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVELS_CONFIG = void 0;
const enemies_1 = __webpack_require__(10);
const types_1 = __webpack_require__(1);
const helpers_1 = __webpack_require__(36);
exports.LEVELS_CONFIG = [
    helpers_1.getLevelConfig({
        level: 0,
        title: "Red Alert",
        text: `Space invaders have attacked our base. Come back and find out the reason for the invasion.
    \nWarning! A lot of invaders have been detected on our way.`,
        mode: {
            type: types_1.GameMode.totalKills,
            target: 30,
        },
    }),
    helpers_1.getLevelConfig({
        level: 1,
        title: "Hunters",
        text: `Hunters in sight. It's the most common units among the enemy ships. Be careful, they follow for their targets.`,
        mode: {
            type: types_1.GameMode.enemyKills,
            target: {
                hunter: 15,
            },
        },
    }),
    helpers_1.getLevelConfig({
        level: 2,
        title: "UFO",
        text: `Seems like aliens are also against us. Or maybe their ships were hijacked?`,
        mode: {
            type: types_1.GameMode.time,
            target: 150,
        },
    }),
    helpers_1.getLevelConfig({
        level: 3,
        title: "Defense",
        text: `Ok, we are on the base. Take the hit and help your allies to protect the one.`,
        mode: {
            type: types_1.GameMode.waves,
            target: [
                {
                    maxEnemies: 4,
                    enemies: [enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Hunter, enemies_1.Hunter, enemies_1.Bot, enemies_1.Hunter],
                },
                {
                    maxEnemies: 4,
                    enemies: [enemies_1.Hunter, enemies_1.Hunter, enemies_1.Hunter, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Hunter],
                },
                {
                    maxEnemies: 4,
                    enemies: [enemies_1.Hunter, enemies_1.Hunter, enemies_1.Hunter, enemies_1.Bot, enemies_1.Hunter, enemies_1.Bot, enemies_1.Hunter, enemies_1.Bot, enemies_1.Hunter, enemies_1.Bot, enemies_1.Hunter, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot],
                },
                {
                    maxEnemies: 5,
                    enemies: [enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.UFO, enemies_1.Hunter, enemies_1.UFO, enemies_1.Bot, enemies_1.UFO, enemies_1.Hunter, enemies_1.Bot, enemies_1.Hunter, enemies_1.Bot, enemies_1.Bot, enemies_1.UFO, enemies_1.Bot, enemies_1.Hunter, enemies_1.Bot],
                },
                {
                    maxEnemies: 5,
                    enemies: [enemies_1.Hunter, enemies_1.Hunter, enemies_1.Hunter, enemies_1.UFO, enemies_1.UFO, enemies_1.Hunter, enemies_1.Hunter, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Bot, enemies_1.Hunter, enemies_1.UFO, enemies_1.Hunter, enemies_1.Bot, enemies_1.UFO, enemies_1.Hunter, enemies_1.Bot, enemies_1.UFO, enemies_1.UFO, enemies_1.Hunter],
                },
            ],
        },
    }),
];


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.spreadRadians = exports.spreadAngle = exports.getAngleDiff = exports.getOffsetToAngle = exports.getNearestAngle = exports.angleToRadians = exports.angleToDegrees = exports.getAngleBetween = void 0;
const components_1 = __webpack_require__(2);
// returns number in radians
function getAngleBetween(obj1, obj2) {
    const xDiff = obj1.x - obj2.x;
    const yDiff = obj1.y - obj2.y;
    let result = Math.atan2(yDiff, xDiff);
    if (result < 0)
        result += Math.PI * 2;
    return result;
}
exports.getAngleBetween = getAngleBetween;
function angleToDegrees(angle) {
    return (angle / Math.PI) * 180;
}
exports.angleToDegrees = angleToDegrees;
function angleToRadians(angle) {
    return (angle * Math.PI) / 180;
}
exports.angleToRadians = angleToRadians;
function getNearestAngle(currentAngle, targetAngle, step) {
    if (Math.abs(currentAngle - targetAngle) < 2)
        return currentAngle;
    if (Math.abs(currentAngle - targetAngle) < 180) {
        // Rotate current directly towards target.
        if (currentAngle < targetAngle)
            currentAngle += step;
        else
            currentAngle -= step;
    }
    else {
        // Rotate the other direction towards target.
        if (currentAngle < targetAngle)
            currentAngle -= step;
        else
            currentAngle += step;
    }
    return ((currentAngle % 360) + 360) % 360;
}
exports.getNearestAngle = getNearestAngle;
const getOffsetToAngle = (radians, distance) => {
    return new components_1.Vector(Math.cos(radians) * distance, Math.sin(radians) * distance);
};
exports.getOffsetToAngle = getOffsetToAngle;
const getAngleDiff = (angle1, angle2) => {
    const a = Math.abs(angle1 - angle2);
    return Math.abs(((a + 180) % 360) - 180);
};
exports.getAngleDiff = getAngleDiff;
const spreadAngle = (angle, spread) => {
    return angle - spread + Math.random() * (spread * 2);
};
exports.spreadAngle = spreadAngle;
const spreadRadians = (radians, rangeAngle) => {
    return exports.spreadAngle(radians, angleToRadians(rangeAngle));
};
exports.spreadRadians = spreadRadians;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = exports.Fire = exports.Explode = exports.Effect = void 0;
var Effect_1 = __webpack_require__(11);
Object.defineProperty(exports, "Effect", { enumerable: true, get: function () { return Effect_1.Effect; } });
var Explode_1 = __webpack_require__(30);
Object.defineProperty(exports, "Explode", { enumerable: true, get: function () { return Explode_1.Explode; } });
var Fire_1 = __webpack_require__(31);
Object.defineProperty(exports, "Fire", { enumerable: true, get: function () { return Fire_1.Fire; } });
var Shadow_1 = __webpack_require__(32);
Object.defineProperty(exports, "Shadow", { enumerable: true, get: function () { return Shadow_1.Shadow; } });


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_GAME_DATA = exports.GAME_CONFIG = void 0;
const config_1 = __webpack_require__(0);
const Game_1 = __webpack_require__(37);
const Menu_1 = __webpack_require__(63);
const Fail_1 = __webpack_require__(64);
const Win_1 = __webpack_require__(65);
const Preview_1 = __webpack_require__(66);
const config_2 = __webpack_require__(0);
exports.GAME_CONFIG = {
    type: Phaser.AUTO,
    width: config_1.CONFIG.width,
    height: config_1.CONFIG.height,
    // scale: {
    //   mode: Phaser.Scale.FIT,
    //   parent: "phaser-example",
    //   autoCenter: Phaser.Scale.CENTER_BOTH,
    //   width: 800,
    //   height: 600,
    // },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [Menu_1.MenuScene, Game_1.GameScene, Preview_1.PreviewScene, Fail_1.FailScene, Win_1.WinScene],
};
exports.INITIAL_GAME_DATA = {
    level: !config_2.isDev ? 0 : 2,
    levels: {},
    score: 0,
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullet = void 0;
const config_1 = __webpack_require__(0);
const types_1 = __webpack_require__(1);
class Bullet {
    constructor(scene, pos, owner, damage) {
        this.scene = scene;
        this.pos = pos;
        this.owner = owner;
        this.damage = damage;
    }
    act(time, delta) { }
    update(time, delta) {
        const { body } = this;
        if (body.x < 0 || body.x > config_1.CONFIG.width || body.y < 0 || body.y > config_1.CONFIG.height) {
            this.destroy();
        }
    }
    initCollisions() {
        const { scene, owner, damage } = this;
        if (owner === types_1.Owner.player) {
            scene.enemies.forEach((enemy) => {
                scene.physics.add.collider(this.body, enemy.body, () => {
                    this.explode();
                    enemy.damage(damage);
                });
            });
        }
        else {
            scene.physics.add.collider(this.body, scene.player.body, () => {
                this.explode();
                scene.player.damage(damage);
            });
        }
    }
    explode() { }
    destroy() {
        const { body } = this;
        this.scene.bullets = this.scene.bullets.filter((b) => b !== this);
        body.destroy();
    }
}
exports.Bullet = Bullet;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENEMIES_CONFIG = void 0;
exports.ENEMIES_CONFIG = {
    bot: {
        pluralName: ["bot", "bots", "bots"],
    },
    hunter: {
        pluralName: ["hunter", "hunters", "hunters"],
    },
    ufo: {
        pluralName: ["ufo", "ufo", "ufo"],
    },
    flyer: {
        pluralName: ["flyer", "flyers", "flyers"],
    },
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIComponent = void 0;
class UIComponent {
    constructor(scene) {
        this.scene = scene;
    }
}
exports.UIComponent = UIComponent;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
__webpack_require__(16);
const game_1 = __webpack_require__(17);
const config_1 = __webpack_require__(0);
class Game extends Phaser.Game {
    constructor(config) {
        super(config);
        this.data = game_1.INITIAL_GAME_DATA;
    }
}
exports.Game = Game;
window.addEventListener("load", () => {
    const game = new Game(game_1.GAME_CONFIG);
    if (config_1.isDev) {
        console.log("game", game);
    }
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const levels_1 = __webpack_require__(13);
exports.CONFIG = {
    title: "Space Invaders",
    subtitle: "The battle for the galaxy",
    width: 800,
    height: 600,
    levelsCount: levels_1.LEVELS_CONFIG.length,
    scene: {
        delta: 16,
        minYPos: 100,
        failTimeoutTime: 2000,
        winTimeoutTime: 2000,
        failTitleText: 'MISSION FAILED',
        failSubtitleText: 'Your ship was destroyed.',
        winTitleText: 'MISSION COMPLETED',
    },
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Vector = Vector;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(3);
const types_1 = __webpack_require__(1);
const Enemy_1 = __webpack_require__(6);
const bullets_1 = __webpack_require__(7);
class Bot extends Enemy_1.Enemy {
    // private lastFireTime: number = 0;
    // private fireReloadTime: number = 100;
    // private laserSound: Phaser.Sound.BaseSound;
    constructor(scene, params) {
        super(scene, types_1.EnemyName.bot);
        this.coinChance = 0.9;
        this.weaponDamage = 10;
        this.bodySize = 32;
        this.depth = 50;
        this.scale = 0.6;
        this.speed = 2;
        this.rotateSpeed = 2;
        this.hp = 30;
        this.bulletSpeed = 7;
        this.lastShoot = 0;
        this.shootTime = 1200;
        this.shootTimeRange = 200;
        this.changeTargetInterval = 1000;
        this.changeTargetIntervalRange = 2000;
        this.body = scene.physics.add.image(params.x, params.y, "enemy-bot-ship");
        // this.laserSound = scene.sound.add("laser-1");
        this.init();
        this.defineTarget = this.defineTarget.bind(this);
        this.defineTarget();
    }
    init() {
        const { scale, depth, body, bodySize } = this;
        body.setScale(scale);
        body.setImmovable(true);
        body.setDepth(depth);
        const speed = 1.5 + Math.random();
        this.speed = speed;
        this.rotateSpeed = speed;
        const centerPos = helpers_1.getCenterBody(body.displayWidth, body.displayHeight, scale, bodySize);
        body.setCircle(bodySize, centerPos.x, centerPos.y);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        const { scene } = this;
        this.updateWorldCollisions(time, delta);
        this.updateBase(time, delta);
        if (this.scene.gameTime > this.lastShoot) {
            const playerBody = scene.player.body;
            this.shoot(new components_1.Vector(playerBody.x, playerBody.y));
        }
    }
    updateBase(time, delta) {
        const { body, angle, targetAngle, rotateSpeed } = this;
        this.body.angle = angle - 90;
        const angleInRadians = helpers_1.angleToRadians(angle);
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        body.x += this.speed * Math.cos(angleInRadians) * deltaSpeed;
        body.y += this.speed * Math.sin(angleInRadians) * deltaSpeed;
        this.angle = helpers_1.getNearestAngle(angle, targetAngle, rotateSpeed);
    }
    defineTarget() {
        const { changeTargetInterval, changeTargetIntervalRange } = this;
        const target = new components_1.Vector(Math.random() * config_1.CONFIG.width, Math.random() * config_1.CONFIG.height);
        this.setTarget(target);
        const timeoutTime = changeTargetInterval + Math.random() * changeTargetIntervalRange;
        this.timeout = setTimeout(this.defineTarget, timeoutTime);
    }
    setTarget(target) {
        const { body } = this;
        this.targetPos = target;
        this.targetAngle = helpers_1.angleToDegrees(helpers_1.getAngleBetween(this.targetPos, body));
    }
    shoot(target) {
        const { body, bulletSpeed, shootTimeRange, shootTime, weaponDamage } = this;
        // this.laserSound.play();
        const rotation = helpers_1.getAngleBetween(target, new components_1.Vector(body.x, body.y));
        this.scene.bullets.push(new bullets_1.SphereBullet(this.scene, new components_1.Vector(body.x, body.y), types_1.Owner.enemy, {
            speed: helpers_1.getOffsetToAngle(rotation, bulletSpeed),
            angle: rotation,
            sprite: "laser-red",
            explodeSprite: "red-explode",
            damage: weaponDamage,
        }));
        this.lastShoot = this.scene.gameTime + shootTime + Math.random() * shootTimeRange;
    }
    onOutOfWorld(nextTarget) {
        this.setTarget(nextTarget);
    }
    destroy() {
        const { scene, body } = this;
        scene.utils.tripleExplode(body.x, body.y);
        clearTimeout(this.timeout);
        super.destroy();
    }
}
exports.Bot = Bot;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCenterBody = void 0;
const components_1 = __webpack_require__(2);
const getCenterBody = (width, height, scale, bodyWidth, offset = { x: 0, y: 0 }) => {
    const x = width / scale / 2 - bodyWidth + offset.x;
    const y = height / scale / 2 - bodyWidth + offset.y;
    return new components_1.Vector(x, y);
};
exports.getCenterBody = getCenterBody;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = void 0;
const getRandomInt = (from, to) => {
    return Math.round(from + Math.random() * (to - from));
};
exports.getRandomInt = getRandomInt;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
function plural(num) {
    if (num % 10 === 1 && num % 100 !== 11) {
        return 0;
    }
    if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
        return 1;
    }
    return 2;
}
/* возвращает одну из строк в массиве в соответствии с остатком от деления
0 товар[ов]
1 товар
2 товар[а]
*/
function pluralize(num, strings) {
    switch (plural(num)) {
        case 0: return strings[0];
        case 1: return strings[1];
        default: return strings[2];
    }
}
exports.pluralize = pluralize;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneName = exports.EnemyName = exports.GameMode = exports.Owner = void 0;
var Owner;
(function (Owner) {
    Owner["player"] = "player";
    Owner["enemy"] = "enemy";
})(Owner = exports.Owner || (exports.Owner = {}));
var GameMode;
(function (GameMode) {
    GameMode["totalKills"] = "totalKills";
    GameMode["enemyKills"] = "enemyKill";
    GameMode["time"] = "time";
    GameMode["waves"] = "waves";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
var EnemyName;
(function (EnemyName) {
    EnemyName["bot"] = "bot";
    EnemyName["ufo"] = "ufo";
    EnemyName["hunter"] = "hunter";
    EnemyName["flyer"] = "flyer";
})(EnemyName = exports.EnemyName || (exports.EnemyName = {}));
var SceneName;
(function (SceneName) {
    SceneName["menu"] = "MenuScene";
    SceneName["preview"] = "PreviewScene";
    SceneName["game"] = "GameScene";
    SceneName["fail"] = "FailScene";
    SceneName["win"] = "WinScene";
})(SceneName = exports.SceneName || (exports.SceneName = {}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
const components_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const helpers_1 = __webpack_require__(3);
const effects_1 = __webpack_require__(15);
const Bullet_1 = __webpack_require__(18);
const DEFAULT_PARAMS = {
    scale: 1,
    bodySize: 6,
};
class Sphere extends Bullet_1.Bullet {
    constructor(scene, pos, owner, params) {
        super(scene, pos, owner, params.damage);
        this.depth = 10;
        this.body = scene.physics.add.image(pos.x, pos.y, params.sprite);
        this.params = Object.assign(Object.assign({}, DEFAULT_PARAMS), params);
        this.init();
    }
    init() {
        const { body, scene, params, depth } = this;
        const { angle, scale } = params;
        body.setAngle(helpers_1.angleToDegrees(angle) + 90);
        body.setDepth(depth);
        body.setOrigin(0.5, 0.5);
        body.setScale(scale);
        this.initBody();
        this.initCollisions();
        scene.add.existing(this.body);
    }
    initBody() {
        const { params } = this;
        const { angle, scale, bodySize } = params;
        const offset = helpers_1.getOffsetToAngle(angle, this.body.displayHeight / scale / 3);
        const pos = helpers_1.getCenterBody(this.body.displayWidth, this.body.displayHeight, scale, bodySize, offset);
        this.body.setCircle(bodySize, pos.x, pos.y);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    draw() { }
    explode() {
        const { body, scene, params } = this;
        scene.effects.push(new effects_1.Explode(scene, new components_1.Vector(body.x, body.y), {
            sprite: params.explodeSprite,
        }));
        this.destroy();
    }
    update(time, delta) {
        const { body } = this;
        const { speed } = this.params;
        body.x += speed.x * (delta / config_1.CONFIG.scene.delta);
        body.y += speed.y * (delta / config_1.CONFIG.scene.delta);
        super.update(time, delta);
    }
}
exports.Sphere = Sphere;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Explode = void 0;
const Effect_1 = __webpack_require__(11);
class Explode extends Effect_1.Effect {
    constructor(scene, pos, params) {
        super(scene);
        this.body = new Phaser.GameObjects.Sprite(scene, pos.x, pos.y, params.sprite);
        this.params = params;
        this.startTime = scene.gameTime;
        this.body.setScale(0);
        this.body.setDepth(115);
        scene.add.existing(this.body);
    }
    act() {
        this.update();
    }
    update() {
        const { scene, startTime } = this;
        const diff = scene.gameTime - startTime;
        const coef = Math.sin(diff / 150);
        const scale = coef;
        this.body.angle += 3;
        this.body.setScale(scale, scale);
        this.body.setAlpha(coef);
        if (coef < 0.06 && diff > 100) {
            this.destroy();
        }
    }
}
exports.Explode = Explode;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Fire = void 0;
const angle_1 = __webpack_require__(14);
const Effect_1 = __webpack_require__(11);
class Fire extends Effect_1.Effect {
    constructor(scene, pos, params) {
        super(scene);
        this.speed = 1.7;
        this.body = new Phaser.GameObjects.Sprite(scene, pos.x, pos.y, "fire");
        this.params = params;
        this.body.setDepth(5);
        this.body.setAngle(angle_1.angleToDegrees(params.angle) + 90);
        this.startTime = scene.gameTime;
        this.params = params;
        scene.add.existing(this.body);
    }
    act() {
        this.update();
    }
    update() {
        const { scene, body, speed, startTime, params } = this;
        const timeDiff = scene.gameTime - startTime;
        body.alpha = 1 - timeDiff / 150;
        body.x += speed * Math.cos(params.angle);
        body.y += speed * Math.sin(params.angle);
        if (body.alpha <= 0) {
            this.destroy();
        }
    }
}
exports.Fire = Fire;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shadow = void 0;
const Effect_1 = __webpack_require__(11);
class Shadow extends Effect_1.Effect {
    constructor(scene, pos, params) {
        super(scene);
        this.params = params;
        this.body = new Phaser.GameObjects.Sprite(scene, pos.x, pos.y, params.sprite);
        this.body.setScale(params.scale);
        this.body.setAngle(params.angle);
        this.body.setAlpha(params.alpha);
        this.body.setDepth(0);
        this.destroyTime = params.lifeTime + scene.gameTime;
        scene.add.existing(this.body);
    }
    act() {
        this.update();
    }
    update() {
        const { scene, body, destroyTime, params } = this;
        const { gameTime } = scene;
        const alpha = ((destroyTime - gameTime) * params.alpha) / params.lifeTime;
        body.setAlpha(alpha);
        if (gameTime > this.destroyTime) {
            this.destroy();
        }
    }
}
exports.Shadow = Shadow;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hunter = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(3);
const types_1 = __webpack_require__(1);
const Enemy_1 = __webpack_require__(6);
const bullets_1 = __webpack_require__(7);
var Behavior;
(function (Behavior) {
    Behavior["moving"] = "moving";
    Behavior["stop"] = "stop";
    Behavior["rotate"] = "rotate";
    Behavior["attack"] = "attack";
})(Behavior || (Behavior = {}));
class Hunter extends Enemy_1.Enemy {
    constructor(scene, params) {
        super(scene, types_1.EnemyName.hunter);
        // shooting
        this.weaponDamage = 10;
        this.chanceToShoot = 0.25;
        this.lastShootTime = 0;
        this.shootIntervalTime = 1200;
        // attack
        this.attackEndTime = 0;
        this.attackIntervalTime = 3000;
        this.attackShootIntervalTime = 325;
        this.attackSpreadRange = 15;
        this.attackHunting = true;
        // direction
        this.lastChangeTargetTime = 0;
        this.changeTargetInterval = 1000;
        this.changeTargetIntervalRange = 2000;
        this.rotateSpeed = 2;
        this.currentRotateSpeed = this.rotateSpeed;
        this.rotateTimer = 0;
        this.rotateIntervalTimer = 3000;
        // speed
        this.maxSpeed = 2;
        this.speed = 2;
        this.speedIncrease = 0.05;
        this.stopEndTime = 0;
        this.stopIntervalTime = 3000;
        this.stopIntervalRangeTime = 1000;
        // base
        this.coinChance = 0.9;
        this.bodySize = 36;
        this.depth = 50;
        this.scale = 0.7;
        this.hp = 70;
        this.bulletSpeed = 7;
        this.behavior = Behavior.moving;
        this.body = scene.physics.add.image(params.x, params.y, "enemy-hunter-ship");
        this.init();
        this.defineTarget = this.defineTarget.bind(this);
        this.defineTarget();
    }
    init() {
        const { scale, depth, body, bodySize } = this;
        body.setScale(scale);
        body.setImmovable(true);
        body.setDepth(depth);
        const centerPos = helpers_1.getCenterBody(body.displayWidth, body.displayHeight, scale, bodySize);
        body.setCircle(bodySize, centerPos.x, centerPos.y);
        this.setStopEndTime(true);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(_, delta) {
        const { scene, body, lastShootTime, shootIntervalTime, chanceToShoot, behavior, speedIncrease, stopEndTime, attackHunting, attackIntervalTime, } = this;
        const playerBody = scene.player.body;
        const time = scene.gameTime;
        this.updateBase(time, delta);
        switch (behavior) {
            case Behavior.moving: {
                if (this.speed < this.maxSpeed) {
                    this.speed += speedIncrease;
                }
                if (time > lastShootTime) {
                    if (Math.random() > 1 - chanceToShoot) {
                        this.shoot(helpers_1.getAngleBetween(new components_1.Vector(playerBody.x, playerBody.y), new components_1.Vector(body.x, body.y)));
                    }
                    this.lastShootTime = time + shootIntervalTime;
                }
                if (time > this.lastChangeTargetTime) {
                    this.updateTarget();
                }
                if (time > stopEndTime) {
                    this.behavior = Behavior.stop;
                }
                break;
            }
            case Behavior.stop: {
                if (this.speed > 0) {
                    this.speed -= speedIncrease;
                }
                else {
                    this.setRotateBehavior();
                }
                break;
            }
            case Behavior.rotate: {
                this.setTarget(new components_1.Vector(playerBody.x, playerBody.y));
                if (time > lastShootTime) {
                    this.shoot(helpers_1.angleToRadians(this.angle), this.attackSpreadRange);
                    this.lastShootTime = time + this.attackShootIntervalTime;
                }
                if (helpers_1.getAngleDiff(this.targetAngle, this.angle) <= 4) {
                    this.setAttackBehavior();
                }
                else if (time > this.rotateTimer) {
                    this.setMovingBehavior();
                }
                break;
            }
            case Behavior.attack: {
                if (attackHunting || time > this.attackEndTime - attackIntervalTime / 3) {
                    this.setTarget(new components_1.Vector(playerBody.x, playerBody.y));
                }
                if (this.speed < this.maxSpeed) {
                    this.speed += speedIncrease;
                }
                if (time > lastShootTime) {
                    this.shoot(helpers_1.angleToRadians(this.angle), this.attackSpreadRange);
                    this.lastShootTime = time + this.attackShootIntervalTime;
                }
                if (attackHunting && time > this.attackEndTime - attackIntervalTime / 1.5) {
                    this.attackHunting = false;
                    this.updateTarget();
                }
                if (time > this.attackEndTime) {
                    this.setMovingBehavior();
                }
                break;
            }
        }
    }
    updateBase(time, delta) {
        const { body, angle, targetAngle, currentRotateSpeed } = this;
        this.body.angle = angle - 90;
        const angleInRadians = helpers_1.angleToRadians(angle);
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        body.x += this.speed * Math.cos(angleInRadians) * deltaSpeed;
        body.y += this.speed * Math.sin(angleInRadians) * deltaSpeed;
        this.angle = helpers_1.getNearestAngle(angle, targetAngle, currentRotateSpeed);
        if (body.x < 100 || body.y < 100 || body.x > config_1.CONFIG.width - 100 || body.y > config_1.CONFIG.height - 100) {
            // need fix
            this.setTarget(new components_1.Vector(config_1.CONFIG.width / 2, config_1.CONFIG.height / 2));
        }
    }
    updateTarget() {
        const { scene, changeTargetInterval, changeTargetIntervalRange } = this;
        const time = scene.gameTime;
        this.defineTarget();
        const intervalTime = changeTargetInterval + Math.random() * changeTargetIntervalRange;
        this.lastChangeTargetTime = time + intervalTime;
    }
    defineTarget() {
        const target = new components_1.Vector(Math.random() * config_1.CONFIG.width, Math.random() * config_1.CONFIG.height);
        this.setTarget(target);
    }
    setTarget(target) {
        const { body } = this;
        this.setTargetAngle(helpers_1.angleToDegrees(helpers_1.getAngleBetween(target, body)));
    }
    setTargetAngle(angle) {
        this.targetAngle = angle;
    }
    setAttackBehavior() {
        const { scene, rotateSpeed } = this;
        const time = scene.gameTime;
        this.attackEndTime = time + this.attackIntervalTime;
        this.currentRotateSpeed = rotateSpeed;
        this.attackHunting = true;
        this.behavior = Behavior.attack;
    }
    setStopEndTime(init = false) {
        const { scene, stopIntervalTime, stopIntervalRangeTime } = this;
        const time = scene.gameTime;
        if (init) {
            this.stopEndTime = time + 1000 + helpers_1.getRandomInt(0, stopIntervalTime);
        }
        else {
            this.stopEndTime = time + stopIntervalTime + helpers_1.getRandomInt(0, stopIntervalRangeTime);
        }
    }
    setMovingBehavior() {
        const { scene, changeTargetInterval, shootIntervalTime } = this;
        const time = scene.gameTime;
        this.setStopEndTime();
        this.lastChangeTargetTime = time + changeTargetInterval;
        this.lastShootTime = time + shootIntervalTime;
        this.behavior = Behavior.moving;
    }
    setRotateBehavior() {
        const { scene, rotateIntervalTimer, rotateSpeed } = this;
        const time = scene.gameTime;
        this.speed = 0;
        this.rotateTimer = time + rotateIntervalTimer;
        this.currentRotateSpeed = rotateSpeed + 1;
        this.behavior = Behavior.rotate;
    }
    shoot(radians, spreadRange = 0) {
        const { body, bulletSpeed, weaponDamage } = this;
        const angle = helpers_1.spreadRadians(radians, spreadRange);
        this.scene.bullets.push(new bullets_1.SphereBullet(this.scene, new components_1.Vector(body.x, body.y), types_1.Owner.enemy, {
            speed: helpers_1.getOffsetToAngle(angle, bulletSpeed),
            angle,
            sprite: "laser-red",
            explodeSprite: "red-explode",
            damage: weaponDamage,
        }));
    }
    destroy() {
        const { scene, body } = this;
        scene.utils.tripleExplode(body.x, body.y);
        super.destroy();
    }
}
exports.Hunter = Hunter;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UFO = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(3);
const types_1 = __webpack_require__(1);
const Enemy_1 = __webpack_require__(6);
const bullets_1 = __webpack_require__(7);
var Behavior;
(function (Behavior) {
    Behavior["moving"] = "moving";
    Behavior["stop"] = "stop";
    Behavior["attack"] = "attack";
})(Behavior || (Behavior = {}));
class UFO extends Enemy_1.Enemy {
    constructor(scene, params) {
        super(scene, types_1.EnemyName.ufo);
        // shooting
        this.weaponDamage = 10;
        this.chanceToShoot = 0.25;
        this.lastShootTime = 0;
        this.shootIntervalTime = 1200;
        // attack
        this.attackEndTime = 0;
        this.attackIntervalTime = 1000;
        // direction
        this.lastChangeTargetTime = 0;
        this.changeTargetInterval = 1000;
        this.changeTargetIntervalRange = 2000;
        this.rotateSpeed = 0.5;
        // speed
        this.maxSpeed = 1;
        this.speed = 1;
        this.speedIncrease = 0.02;
        this.stopEndTime = 0;
        this.stopIntervalTime = 1500;
        this.stopIntervalRangeTime = 2500;
        // base
        this.coinChance = 0.9;
        this.bodySize = 36;
        this.depth = 50;
        this.scale = 0.7;
        this.hp = 70;
        this.bulletSpeed = 7;
        this.behavior = Behavior.moving;
        this.body = scene.physics.add.image(params.x, params.y, "enemy-ufo");
        this.init();
        this.defineTarget = this.defineTarget.bind(this);
        this.defineTarget();
    }
    init() {
        const { scale, depth, body, bodySize } = this;
        body.setScale(scale);
        body.setImmovable(true);
        body.setDepth(depth);
        const centerPos = helpers_1.getCenterBody(body.displayWidth, body.displayHeight, scale, bodySize);
        body.setCircle(bodySize, centerPos.x, centerPos.y);
        this.setStopEndTime(true);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(_, delta) {
        const { scene, body, lastShootTime, shootIntervalTime, chanceToShoot, behavior, speedIncrease, changeTargetInterval, changeTargetIntervalRange, stopEndTime, } = this;
        const playerBody = scene.player.body;
        const time = scene.gameTime;
        this.updateBase(time, delta);
        switch (behavior) {
            case Behavior.moving: {
                if (this.speed < this.maxSpeed) {
                    this.speed += speedIncrease;
                }
                if (time > lastShootTime) {
                    if (Math.random() > 1 - chanceToShoot) {
                        this.shoot(helpers_1.getAngleBetween(new components_1.Vector(playerBody.x, playerBody.y), new components_1.Vector(body.x, body.y)), false);
                    }
                    this.lastShootTime = time + shootIntervalTime;
                }
                if (time > this.lastChangeTargetTime) {
                    this.defineTarget();
                    const intervalTime = changeTargetInterval + Math.random() * changeTargetIntervalRange;
                    this.lastChangeTargetTime = time + intervalTime;
                }
                if (time > stopEndTime && !this.isOutsideScene()) {
                    this.behavior = Behavior.stop;
                }
                break;
            }
            case Behavior.stop: {
                if (this.speed > 0) {
                    this.speed -= speedIncrease;
                }
                else {
                    this.attackEndTime = time + this.attackIntervalTime;
                    this.behavior = Behavior.attack;
                }
                break;
            }
            case Behavior.attack: {
                if (time > this.attackEndTime) {
                    this.circleAttack();
                    this.setMovingBehavior();
                }
                break;
            }
        }
    }
    updateBase(time, delta) {
        const { body, angle, targetAngle, rotateSpeed } = this;
        this.body.angle += this.speed;
        const angleInRadians = helpers_1.angleToRadians(angle);
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        body.x += this.speed * Math.cos(angleInRadians) * deltaSpeed;
        body.y += this.speed * Math.sin(angleInRadians) * deltaSpeed;
        this.angle = helpers_1.getNearestAngle(angle, targetAngle, rotateSpeed);
        if (body.x < 100 || body.y < 100 || body.x > config_1.CONFIG.width - 100 || body.y > config_1.CONFIG.height - 100) {
            // need fix
            this.setTarget(new components_1.Vector(config_1.CONFIG.width / 2, config_1.CONFIG.height / 2));
        }
    }
    defineTarget() {
        const target = new components_1.Vector(Math.random() * config_1.CONFIG.width, Math.random() * config_1.CONFIG.height);
        this.setTarget(target);
    }
    setTarget(target) {
        const { body } = this;
        this.targetPos = target;
        this.targetAngle = helpers_1.angleToDegrees(helpers_1.getAngleBetween(this.targetPos, body));
    }
    setStopEndTime(init = false) {
        const { scene, stopIntervalTime, stopIntervalRangeTime } = this;
        const time = scene.gameTime;
        this.stopEndTime = time + stopIntervalTime + helpers_1.getRandomInt(0, stopIntervalRangeTime);
    }
    setMovingBehavior() {
        const { scene, changeTargetInterval, shootIntervalTime } = this;
        const time = scene.gameTime;
        this.setStopEndTime();
        this.lastChangeTargetTime = time + changeTargetInterval;
        this.lastShootTime = time + shootIntervalTime;
        this.behavior = Behavior.moving;
    }
    circleAttack() {
        const angle = 360 / 8;
        const offset = Math.random() * angle;
        for (let i = 0; i < 8; i++) {
            this.shoot(helpers_1.angleToRadians(offset + i * angle), true);
        }
    }
    shoot(radians, isSphere = true) {
        const { body, bulletSpeed, weaponDamage } = this;
        this.scene.bullets.push(new bullets_1.SphereBullet(this.scene, new components_1.Vector(body.x, body.y), types_1.Owner.enemy, {
            speed: helpers_1.getOffsetToAngle(radians, bulletSpeed),
            angle: radians,
            sprite: isSphere ? "sphere-bullet" : "laser-red",
            explodeSprite: "red-explode",
            damage: weaponDamage,
            scale: isSphere ? 0.35 : 1,
            bodySize: isSphere ? 32 : 12,
        }));
    }
    destroy() {
        const { scene, body } = this;
        scene.utils.tripleExplode(body.x, body.y);
        this.circleAttack();
        super.destroy();
    }
}
exports.UFO = UFO;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Flyer = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const helpers_1 = __webpack_require__(3);
const effects_1 = __webpack_require__(15);
const types_1 = __webpack_require__(1);
const Enemy_1 = __webpack_require__(6);
const bullets_1 = __webpack_require__(7);
class Flyer extends Enemy_1.Enemy {
    constructor(scene, params) {
        super(scene, types_1.EnemyName.flyer);
        // move
        this.maxSpeed = 4;
        this.minSpeed = 1;
        this.speed = 2;
        this.speedChange = 0.1;
        this.rotateSpeed = 2;
        // attack
        this.bulletSpeed = 7;
        this.lastShootTime = 0;
        this.shootTime = 1200;
        this.shootTimeInterval = 200;
        this.weaponDamage = 10;
        // shadow
        this.lastShadowTime = 0;
        this.shadowTime = 50;
        // base
        this.hp = 50;
        this.coinChance = 0.9;
        this.bodySize = 32;
        this.depth = 50;
        this.scale = 0.6;
        this.body = scene.physics.add.image(params.x, params.y, "enemy-flyer");
        this.init();
        this.defineRandomTargetPoint = this.defineRandomTargetPoint.bind(this);
        this.defineRandomTargetPoint();
    }
    init() {
        const { scale, depth, body, bodySize } = this;
        body.setScale(scale);
        body.setImmovable(true);
        body.setDepth(depth);
        const centerPos = helpers_1.getCenterBody(body.displayWidth, body.displayHeight, scale, bodySize);
        body.setCircle(bodySize, centerPos.x, centerPos.y);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        this.updateWorldCollisions(time, delta);
        this.updateBase(time, delta);
        this.updateMovement(time, delta);
        this.updateAttack(time, delta);
        this.updateShadows();
    }
    updateBase(time, delta) {
        const { body, angle, targetAngle, rotateSpeed } = this;
        this.body.angle = angle - 90;
        const angleInRadians = helpers_1.angleToRadians(angle);
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        body.x += this.speed * Math.cos(angleInRadians) * deltaSpeed;
        body.y += this.speed * Math.sin(angleInRadians) * deltaSpeed;
        this.angle = helpers_1.getNearestAngle(angle, targetAngle, rotateSpeed);
    }
    updateMovement(time, delta) {
        const { speedChange, angle, targetAngle } = this;
        if (helpers_1.getAngleDiff(angle, targetAngle) < 3) {
            if (this.speed < this.maxSpeed) {
                this.speed += speedChange;
            }
        }
        else {
            if (this.speed > this.minSpeed) {
                this.speed -= speedChange;
            }
        }
    }
    updateAttack(time, delta) {
        const { scene, body, shootTime, shootTimeInterval } = this;
        const gameTime = scene.gameTime;
        if (gameTime > this.lastShootTime) {
            const playerBody = scene.player.body;
            const playerPos = new components_1.Vector(playerBody.x, playerBody.y);
            const angleToPlayer = helpers_1.getAngleBetween(playerPos, new components_1.Vector(body.x, body.y));
            if (Math.random() > 0.1) {
                const spreadRange = 0.25 + Math.random() * 0.3;
                this.shoot(angleToPlayer + spreadRange);
                this.shoot(angleToPlayer - spreadRange);
            }
            else {
                this.shoot(angleToPlayer);
            }
            this.lastShootTime = gameTime + shootTime + Math.random() * shootTimeInterval;
        }
    }
    updateShadows() {
        const { scene, lastShadowTime, shadowTime } = this;
        const gameTime = scene.gameTime;
        if (gameTime > lastShadowTime) {
            this.lastShadowTime = gameTime + shadowTime;
            this.createShadow();
        }
    }
    createShadow() {
        const { scene, body, scale, angle } = this;
        const speedTime = Math.max(this.maxSpeed - this.speed, 0) * 0.25;
        scene.effects.push(new effects_1.Shadow(scene, new components_1.Vector(body.x, body.y), {
            sprite: "enemy-flyer",
            lifeTime: 250,
            scale,
            angle: angle - 90,
            alpha: 0.4 - speedTime,
        }));
    }
    defineRandomTargetPoint() {
        const target = new components_1.Vector(Math.random() * config_1.CONFIG.width, Math.random() * config_1.CONFIG.height);
        this.setTarget(target);
    }
    setTarget(target) {
        this.targetAngle = helpers_1.angleToDegrees(helpers_1.getAngleBetween(target, this.body));
    }
    shoot(angle) {
        const { body, bulletSpeed, weaponDamage } = this;
        this.scene.bullets.push(new bullets_1.SphereBullet(this.scene, new components_1.Vector(body.x, body.y), types_1.Owner.enemy, {
            speed: helpers_1.getOffsetToAngle(angle, bulletSpeed),
            angle,
            sprite: "laser-red",
            explodeSprite: "red-explode",
            damage: weaponDamage,
        }));
    }
    onOutOfWorld(nextTarget) {
        this.setTarget(nextTarget);
    }
    destroy() {
        const { scene, body } = this;
        scene.utils.tripleExplode(body.x, body.y);
        super.destroy();
    }
}
exports.Flyer = Flyer;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLevelConfig = void 0;
const enemies_1 = __webpack_require__(19);
const types_1 = __webpack_require__(1);
const helpers_1 = __webpack_require__(3);
const getMissionText = (levelMode) => {
    switch (levelMode.type) {
        case types_1.GameMode.totalKills: {
            const targetCount = levelMode.target;
            return `Mission: kill ${targetCount} ${helpers_1.pluralize(targetCount, ["invader", "invaders", "invaders"])}`;
        }
        case types_1.GameMode.enemyKills: {
            const targets = levelMode.target;
            const text = Object.keys(targets)
                .map((targetName) => {
                const targetCount = targets[targetName];
                return `${targetCount} ${helpers_1.pluralize(targetCount, enemies_1.ENEMIES_CONFIG[targetName].pluralName)}`;
            })
                .join(" / ");
            return `Mission: kill ${text}`;
        }
        case types_1.GameMode.time: {
            const seconds = levelMode.target;
            return `Mission: stay alive for ${seconds} ${helpers_1.pluralize(seconds, ["second", "seconds", "seconds"])}`;
        }
        case types_1.GameMode.waves: {
            const wavesCount = levelMode.target.length;
            return `Mission: Defeat ${wavesCount} waves of enemies`;
        }
    }
};
const getLevelConfig = (levelConfig) => (Object.assign(Object.assign({}, levelConfig), { mission: getMissionText(levelConfig.mode) }));
exports.getLevelConfig = getLevelConfig;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = void 0;
var Game_1 = __webpack_require__(38);
Object.defineProperty(exports, "GameScene", { enumerable: true, get: function () { return Game_1.GameScene; } });


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = void 0;
const config_1 = __webpack_require__(0);
const services_1 = __webpack_require__(39);
const Scene_1 = __webpack_require__(9);
const Player_1 = __webpack_require__(57);
const types_1 = __webpack_require__(1);
const preload_1 = __webpack_require__(58);
const Utils_1 = __webpack_require__(59);
const helpers_1 = __webpack_require__(62);
let graphics;
class GameScene extends Scene_1.Scene {
    constructor() {
        super({
            key: types_1.SceneName.game,
        });
        this.enemies = [];
        this.bullets = [];
        this.effects = [];
        this.bonuses = [];
        this.score = 0;
        this.services = [];
        this.stats = helpers_1.getInitialGameData();
        this.isWon = false;
        this.isFail = false;
        this.gameTime = 0;
    }
    preload() { }
    init(params) {
        this.params = params;
    }
    create() {
        this.resetState();
        this.physics.world.setBounds(0, 0, config_1.CONFIG.width, config_1.CONFIG.height);
        // this.add.tileSprite(CONFIG.width / 2, CONFIG.height / 2, CONFIG.width, CONFIG.height, "background");
        this.background = this.add.image(0, 0, "background").setOrigin(0, 0).setAlpha(0.2);
        graphics = this.add.graphics({
            lineStyle: { width: 2, color: 0x00ff00 },
            fillStyle: { color: 0xff0000 },
        });
        this.player = new Player_1.Player(this);
        this.utils = new Utils_1.Utils(this);
        this.initListeners();
        this.initServices();
        this.initTimer();
        this.shakeCamera = this.cameras.add(0, 0, config_1.CONFIG.width, config_1.CONFIG.height);
    }
    initTimer() {
        this.time.addEvent({ delay: 10, callback: this.onClockEvent, callbackScope: this, loop: true });
    }
    onClockEvent() {
        this.gameTime += 15;
    }
    initListeners() {
        const keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyM.on("down", () => {
            if (this.player.body.active) {
                this.scene.start(types_1.SceneName.menu);
            }
        });
    }
    initServices() {
        // P.S interesting generic type detection
        this.addService(services_1.StarsService, { count: 20 }); // ok 200ms
        this.addService(services_1.MeteorsService, {}); // ok 300ms
        // this.addService(LoggerService, {}); // ok 170ms
        this.addService(services_1.InterfaceService, {});
        this.addService(services_1.LevelService, {});
        this.addService(services_1.CometsService, {});
    }
    addService(ServiceConstructor, params) {
        this.services.push(new ServiceConstructor(this, params));
    }
    update(time, delta) {
        graphics.clear();
        this.enemies.forEach((enemy) => {
            enemy.act(time, delta);
        });
        this.bullets.forEach((bullet) => {
            bullet.act(time, delta);
        });
        this.effects.forEach((effect) => {
            effect.act();
        });
        this.services.forEach((service) => {
            service.act(time, delta);
        });
        this.bonuses.forEach((bonus) => {
            bonus.act();
        });
        this.player.act(time, delta);
    }
    resetState() {
        this.bullets = [];
        this.enemies = [];
        this.effects = [];
        this.bonuses = [];
        this.score = 0;
        this.text = "";
        this.services = [];
        this.stats = helpers_1.getInitialGameData();
        this.isWon = false;
        this.isFail = false;
        this.gameTime = 0;
    }
    onFail() {
        this.isFail = true;
        setTimeout(() => {
            this.scene.start(types_1.SceneName.fail);
        }, config_1.CONFIG.scene.failTimeoutTime);
    }
    onWin() {
        if (!this.isWon && !this.isFail) {
            this.isWon = true;
            setTimeout(() => {
                if (!this.isFail) {
                    this.scene.start(types_1.SceneName.win, {
                        score: this.score,
                        isFlawlessVictory: this.player.hp === this.player.maxHp,
                    });
                }
            }, config_1.CONFIG.scene.winTimeoutTime);
        }
    }
    shakeScreen() {
        this.shakeCamera.shake(500, 0.003);
    }
    getStats() {
        return this.stats;
    }
}
exports.GameScene = GameScene;
GameScene.prototype.preload = preload_1.preload;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.CometsService = exports.LevelService = exports.InterfaceService = exports.LoggerService = exports.MeteorsService = exports.StarsService = void 0;
var StarsService_1 = __webpack_require__(40);
Object.defineProperty(exports, "StarsService", { enumerable: true, get: function () { return StarsService_1.StarsService; } });
var MeteorsService_1 = __webpack_require__(42);
Object.defineProperty(exports, "MeteorsService", { enumerable: true, get: function () { return MeteorsService_1.MeteorsService; } });
var LoggerService_1 = __webpack_require__(44);
Object.defineProperty(exports, "LoggerService", { enumerable: true, get: function () { return LoggerService_1.LoggerService; } });
var InterfaceService_1 = __webpack_require__(45);
Object.defineProperty(exports, "InterfaceService", { enumerable: true, get: function () { return InterfaceService_1.InterfaceService; } });
var LevelService_1 = __webpack_require__(49);
Object.defineProperty(exports, "LevelService", { enumerable: true, get: function () { return LevelService_1.LevelService; } });
var CometsService_1 = __webpack_require__(55);
Object.defineProperty(exports, "CometsService", { enumerable: true, get: function () { return CometsService_1.CometsService; } });
var Service_1 = __webpack_require__(4);
Object.defineProperty(exports, "Service", { enumerable: true, get: function () { return Service_1.Service; } });


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StarsService = void 0;
const Star_1 = __webpack_require__(41);
const Service_1 = __webpack_require__(4);
class StarsService extends Service_1.Service {
    constructor(scene, params) {
        super(scene);
        this.stars = [];
        this.params = params;
        this.init();
    }
    init() {
        const { scene } = this;
        const { count } = this.params;
        for (let i = 0; i < count; i++) {
            this.stars.push(new Star_1.Star(scene, {
                initialAlphaCoef: i * 500,
            }));
        }
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        this.stars.forEach((star) => {
            star.act(time, delta);
        });
    }
}
exports.StarsService = StarsService;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = void 0;
const config_1 = __webpack_require__(0);
class Star {
    constructor(scene, params) {
        this.scene = scene;
        this.body = scene.add.sprite(Math.random() * config_1.CONFIG.width, Math.random() * config_1.CONFIG.height, "star");
        this.initialCoef = params.initialAlphaCoef;
        this.body.setDepth(0);
        this.body.setScale(0.25 + Math.random() * 0.25);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        const { scene, body, initialCoef, lastRelocationTime } = this;
        const gameTime = scene.gameTime;
        body.angle += 4;
        body.alpha = Math.sin((gameTime + initialCoef) / 1500);
        if (gameTime > lastRelocationTime && body.alpha <= 0.5) {
            body.x = Math.random() * config_1.CONFIG.width;
            body.y = Math.random() * config_1.CONFIG.height;
            this.lastRelocationTime = gameTime + 1000;
        }
    }
}
exports.Star = Star;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MeteorsService = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const Meteor_1 = __webpack_require__(43);
const angle_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(3);
const Service_1 = __webpack_require__(4);
class MeteorsService extends Service_1.Service {
    constructor(scene, params) {
        super(scene);
        this.meteors = [];
        this.meteorIntervalTime = 1000;
        this.meteorIntervalTimeRange = 1000;
        this.lastMeteorTime = 0;
        this.maxCount = 25;
        this.params = params;
        this.init();
    }
    init() {
        for (let i = 0; i < helpers_1.getRandomInt(5, 8); i++) {
            this.spawnMeteor({
                outside: false,
            });
        }
        for (let i = 0; i < helpers_1.getRandomInt(3, 5); i++) {
            this.spawnMeteor({
                outside: true,
            });
        }
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        const { scene, maxCount } = this;
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        const gameTime = scene.gameTime;
        if (gameTime > this.lastMeteorTime && this.meteors.length < maxCount) {
            this.spawnMeteor({
                outside: true,
            });
        }
        this.meteors.forEach((meteor) => {
            const { body, speed } = meteor;
            body.angle += speed.x * 0.5 * deltaSpeed;
            body.x += speed.x * deltaSpeed;
            body.y += speed.y * deltaSpeed;
            if (body.x > config_1.CONFIG.width + 200 || body.y > config_1.CONFIG.height + 200) {
                this.meteors = this.meteors.filter((m) => m !== meteor);
                body.destroy();
            }
        });
    }
    spawnMeteor({ outside }) {
        const { scene } = this;
        const time = scene.gameTime;
        const { meteorIntervalTime, meteorIntervalTimeRange } = this;
        const scale = 0.5 + Math.random() * 1;
        const startOffset = 200;
        const angle = angle_1.angleToRadians(45);
        const speedValue = 0.25 + Math.random() * 2.5;
        const speed = new components_1.Vector(speedValue * Math.cos(angle), speedValue * Math.sin(angle));
        const axis = Math.random() > 0.5 ? "x" : "y";
        const spawnPoint = outside
            ? {
                x: axis === "x" ? -startOffset + Math.random() * (config_1.CONFIG.width * 0.75) : -startOffset,
                y: axis === "y" ? -startOffset + Math.random() * (config_1.CONFIG.height * 0.75) : -startOffset,
            }
            : {
                x: config_1.CONFIG.width * Math.random(),
                y: config_1.CONFIG.height * Math.random(),
            };
        this.meteors.push(new Meteor_1.Meteor(scene, spawnPoint, speed, {
            spriteIndex: 1 + Math.floor(Math.random() * 4),
            alpha: 0.25 + Math.random() * 0.4,
            scale,
        }));
        this.lastMeteorTime = Math.random() * meteorIntervalTimeRange + time + meteorIntervalTime * scale;
    }
}
exports.MeteorsService = MeteorsService;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Meteor = void 0;
class Meteor {
    constructor(scene, pos, speed, params) {
        this.scene = scene;
        this.body = scene.add.sprite(pos.x, pos.y, `meteor-${params.spriteIndex}`);
        this.speed = speed;
        this.body.setAlpha(params.alpha);
        this.body.setDepth(5);
        this.body.setScale(params.scale, params.scale);
    }
}
exports.Meteor = Meteor;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const Service_1 = __webpack_require__(4);
class LoggerService extends Service_1.Service {
    constructor(scene, params) {
        super(scene);
        this.lastLogTime = 0;
        this.params = params;
        this.init();
    }
    init() {
    }
    act() {
        this.update();
    }
    update() {
        const scene = this.scene;
        const time = scene.gameTime;
        if (time > this.lastLogTime) {
            console.group("Stats");
            console.log(`effects: ${scene.effects.length}`);
            console.log(`enemies: ${scene.enemies.length}`);
            console.log(`bullets: ${scene.bullets.length}`);
            console.groupEnd();
            this.lastLogTime = time + 2000;
        }
    }
}
exports.LoggerService = LoggerService;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceService = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const colors_1 = __webpack_require__(5);
const ui_1 = __webpack_require__(8);
const Service_1 = __webpack_require__(4);
const HEALTHBAR_WIDTH = 200;
const GRAPHICS_DEPTH = 500;
class InterfaceService extends Service_1.Service {
    constructor(scene, params) {
        super(scene);
        this.backgroundInitialAlpha = 0;
        this.backgroundChangeTime = 15000;
        this.params = params;
        this.init();
    }
    init() {
        const { scene } = this;
        const moneyStartPosX = HEALTHBAR_WIDTH + 15;
        const textPosY = 27;
        this.graphics = scene.add.graphics({
            lineStyle: { width: 2, color: 0x00ff00 },
            fillStyle: { color: 0xff0000 },
        });
        this.counterText = scene.add
            .bitmapText(config_1.CONFIG.width - 17, textPosY, "atari", "0", 24)
            .setOrigin(1, 0.5)
            .setDepth(GRAPHICS_DEPTH);
        this.scoreText = new ui_1.UICosmons(scene, {
            pos: new components_1.Vector(moneyStartPosX + 28, textPosY),
            value: 0,
            isCentered: false,
            depth: 100,
        });
        this.playerHealthbar = new Phaser.Geom.Rectangle(20, 24, config_1.CONFIG.width, 11);
        this.graphics.setDepth(GRAPHICS_DEPTH);
        this.backgroundInitialAlpha = Math.random() * (this.backgroundChangeTime * 5);
    }
    act() {
        this.draw();
        this.update();
    }
    draw() {
        this.drawHealthbar();
        this.drawScore();
    }
    update() {
        const { scene, backgroundInitialAlpha, backgroundChangeTime } = this;
        const alpha = (1 + Math.sin((backgroundInitialAlpha + scene.gameTime) / backgroundChangeTime)) * 0.25;
        scene.background.setAlpha(alpha);
    }
    drawHealthbar() {
        const { graphics, scene, playerHealthbar } = this;
        const { player } = scene;
        graphics.clear();
        graphics.fillStyle(colors_1.COLORS.red);
        playerHealthbar.width = HEALTHBAR_WIDTH;
        graphics.fillRectShape(playerHealthbar);
        graphics.fillStyle(colors_1.COLORS.green);
        playerHealthbar.width = Math.max(HEALTHBAR_WIDTH * (player.hp / player.maxHp), 0);
        graphics.fillRectShape(playerHealthbar);
        graphics.lineStyle(2, colors_1.COLORS.white);
        playerHealthbar.width = HEALTHBAR_WIDTH;
        graphics.strokeRectShape(playerHealthbar);
    }
    drawScore() {
        const { scene, counterText, scoreText } = this;
        counterText.setText(scene.text);
        scoreText.updateValue(scene.score);
    }
}
exports.InterfaceService = InterfaceService;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIButton = void 0;
const colors_1 = __webpack_require__(5);
class UIButton extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, params) {
        super(scene, x, y, texture);
        this.graphics = scene.add.graphics({
            lineStyle: { width: 2, color: colors_1.COLORS.white },
            fillStyle: { color: colors_1.COLORS.white },
        });
        this.params = params;
        this.init();
    }
    init() {
        const { scene, graphics, x, y } = this;
        const { width, height, text, disabled } = this.params;
        this.width = width;
        this.height = height;
        this.setOrigin(0.5, 0);
        const alpha = disabled ? 0.5 : 1;
        if (!disabled) {
            this.setInteractive({ cursor: "pointer" });
        }
        else {
            graphics.alpha = alpha;
        }
        const rect = new Phaser.Geom.Rectangle(x - width / 2, y, width, height);
        graphics.strokeRectShape(rect);
        const buttonText = scene.add
            .bitmapText(x, y + Math.floor(height / 2), "atari", "", 16)
            .setOrigin(0.5)
            .setAlpha(alpha)
            .setCenterAlign();
        buttonText.setText(text);
        this.on("pointerover", () => {
            graphics.alpha = alpha;
            graphics.lineStyle(2, colors_1.COLORS.green);
            buttonText.tint = colors_1.COLORS.green;
            document.body.style.cursor = "pointer";
            graphics.strokeRectShape(rect);
        });
        this.on("pointerout", () => {
            graphics.alpha = alpha;
            graphics.lineStyle(2, colors_1.COLORS.white);
            buttonText.tint = colors_1.COLORS.white;
            document.body.style.cursor = "default";
            graphics.strokeRectShape(rect);
        });
        this.on("pointerdown", () => {
            document.body.style.cursor = "default";
        });
    }
}
exports.UIButton = UIButton;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UICosmons = void 0;
const Component_1 = __webpack_require__(20);
const VALUES_OFFSET_X = 12;
const VALUES_OFFSET_Y = 4;
class UICosmons extends Component_1.UIComponent {
    constructor(scene, params) {
        super(scene);
        this.params = params;
        this.init();
    }
    init() {
        const { scene, params } = this;
        const { pos, value, isCentered, depth, prefix } = params;
        const valueTextOffset = prefix ? 12 : 0;
        const starImage = scene.add.image(pos.x, pos.y, "coin-gold").setOrigin(0, 0.5).setDepth(depth);
        const prefixBitmapText = new Phaser.GameObjects.BitmapText(scene, pos.x + starImage.width + VALUES_OFFSET_X - 4, pos.y + VALUES_OFFSET_Y + 1, "atari", prefix, 22)
            .setOrigin(0, 0.5)
            .setDepth(depth);
        if (prefix) {
            scene.add.existing(prefixBitmapText);
        }
        this.valueText = scene.add
            .bitmapText(pos.x + starImage.width + VALUES_OFFSET_X + valueTextOffset, pos.y + VALUES_OFFSET_Y, "atari", value.toString(), 22)
            .setOrigin(0, 0.5)
            .setDepth(depth);
        if (isCentered) {
            const halfComponentWidth = (starImage.width + VALUES_OFFSET_X + this.valueText.width + valueTextOffset) / 2;
            starImage.x -= halfComponentWidth;
            this.valueText.x -= halfComponentWidth;
            prefixBitmapText.x -= halfComponentWidth;
        }
    }
    updateValue(value) {
        this.valueText.setText(value.toString());
    }
}
exports.UICosmons = UICosmons;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIRainbowText = void 0;
const colors_1 = __webpack_require__(5);
const Component_1 = __webpack_require__(20);
const DEFAULT_PARAMS = {
    fontSize: 23,
    color: colors_1.COLORS.green,
};
class UIRainbowText extends Component_1.UIComponent {
    constructor(scene, params) {
        super(scene);
        this.rainbowColorIdx = 0;
        this.rainbowColorOffset = 0;
        this.delay = 0;
        this.rainbowWave = 0;
        this.params = Object.assign(Object.assign({}, DEFAULT_PARAMS), params);
        this.init();
    }
    init() {
        const { scene } = this;
        const { text, pos, color } = this.params;
        this.rainbowCallback = this.rainbowCallback.bind(this);
        const rainbowText = scene.add
            .dynamicBitmapText(pos.x, pos.y, "atari", text, 23)
            .setOrigin(0.5)
            .setCenterAlign();
        rainbowText.setDisplayCallback(this.rainbowCallback);
        rainbowText.tint = color;
    }
    update() {
        this.updateRainbow();
    }
    updateRainbow() {
        this.rainbowColorIdx = 0;
        if (this.delay++ === 6) {
            this.rainbowColorOffset = (this.rainbowColorOffset + 1) % 4;
            this.delay = 0;
        }
    }
    rainbowCallback(data) {
        const { color } = this.params;
        data.color = color;
        this.rainbowColorIdx = (this.rainbowColorIdx + 1) % 4;
        data.y = Math.cos(this.rainbowWave + this.rainbowColorIdx) * 2;
        this.rainbowWave += 0.005;
        return data;
    }
}
exports.UIRainbowText = UIRainbowText;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelService = void 0;
const levels_1 = __webpack_require__(50);
const Service_1 = __webpack_require__(4);
class LevelService extends Service_1.Service {
    constructor(scene, params) {
        super(scene);
        this.params = params;
        this.init();
    }
    init() {
        const { scene } = this;
        const currentLevelNumber = scene.params.level;
        this.currentLevel = new levels_1.levels[currentLevelNumber](scene);
    }
    act() {
        this.update();
    }
    update() {
        const { scene, currentLevel } = this;
        const isWin = currentLevel.checkForWin();
        scene.text = currentLevel.getTextByMode();
        currentLevel.update();
        if (isWin) {
            scene.onWin();
        }
    }
}
exports.LevelService = LevelService;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.levels = void 0;
const Level1_1 = __webpack_require__(51);
const Level2_1 = __webpack_require__(52);
const Level3_1 = __webpack_require__(53);
const Level4_1 = __webpack_require__(54);
exports.levels = [Level1_1.Level1, Level2_1.Level2, Level3_1.Level3, Level4_1.Level4];
/*
1. 3-5 easy
2. 2-4 easy 0-2 medium
3. 2-4 easy 2+ medium
4.
*/ 


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level1 = void 0;
const enemies_1 = __webpack_require__(10);
const Level_1 = __webpack_require__(12);
const MAX_ENEMIES_COUNT = 5;
const CHANCE_TO_MAX_COUNT = 0.8;
const COUNT_FOR_INCREMENT_MAX = 0.66;
class Level1 extends Level_1.Level {
    constructor(scene) {
        super(scene);
        this.nextAttemptTimeInterval = 1500;
    }
    makeAttempt() {
        const { scene } = this;
        const { enemies } = scene;
        const stats = scene.getStats();
        const mode = this.mode;
        const maxCount = stats.totalKills > Math.ceil(mode.target * COUNT_FOR_INCREMENT_MAX)
            ? MAX_ENEMIES_COUNT
            : MAX_ENEMIES_COUNT - 1;
        if (enemies.length < MAX_ENEMIES_COUNT - 2) {
            this.createEnemy(enemies_1.Bot);
        }
        else if (enemies.length < maxCount) {
            if (Math.random() > CHANCE_TO_MAX_COUNT) {
                this.createEnemy(enemies_1.Bot);
            }
        }
    }
}
exports.Level1 = Level1;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level2 = void 0;
const enemies_1 = __webpack_require__(10);
const types_1 = __webpack_require__(1);
const Level_1 = __webpack_require__(12);
const MAX_ENEMIES_COUNT = 4;
class Level2 extends Level_1.Level {
    constructor(scene) {
        super(scene);
        this.nextAttemptTimeInterval = 1500;
    }
    makeAttempt() {
        const { scene } = this;
        const { enemies } = scene;
        const stats = scene.getStats();
        const mode = this.mode;
        const chanceToMax = stats.kills.hunter > Math.ceil(mode.target.hunter / 2) ? 0.4 : 0;
        if (enemies.length < MAX_ENEMIES_COUNT - 1) {
            this.spawnEnemy();
        }
        else if (enemies.length < MAX_ENEMIES_COUNT) {
            if (Math.random() > 0.75 - chanceToMax) {
                this.spawnEnemy();
            }
        }
    }
    spawnEnemy() {
        const { scene } = this;
        const stats = scene.getStats();
        const huntersAlive = scene.enemies.filter((e) => e.name === types_1.EnemyName.hunter).length;
        const isHunter = Math.floor(stats.kills.bot / 3) > stats.kills.hunter + huntersAlive;
        if ((Math.random() > 0.3 && !isHunter) || huntersAlive >= 2) {
            this.createEnemy(enemies_1.Bot);
        }
        else {
            this.createEnemy(enemies_1.Hunter);
        }
    }
}
exports.Level2 = Level2;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level3 = void 0;
const enemies_1 = __webpack_require__(10);
const types_1 = __webpack_require__(1);
const Level_1 = __webpack_require__(12);
const MAX_ENEMIES_COUNT = 4;
class Level3 extends Level_1.Level {
    constructor(scene) {
        super(scene);
        this.nextAttemptTimeInterval = 1500;
        this.additionalTime = 0;
        this.additionalTimeInterval = 10000;
        this.additionalTime = scene.gameTime + this.additionalTimeInterval;
    }
    update() {
        const { scene, additionalTime, additionalTimeInterval } = this;
        const time = scene.gameTime;
        if (time > additionalTime) {
            this.spawnEnemy(true);
            this.additionalTime = scene.gameTime + additionalTimeInterval;
        }
        super.update();
    }
    makeAttempt() {
        const { scene } = this;
        const { enemies } = scene;
        if (enemies.length < MAX_ENEMIES_COUNT) {
            this.spawnEnemy();
        }
    }
    spawnEnemy(isAdditionalSpawn = false) {
        const { scene } = this;
        const rand = Math.random();
        const huntersAliveCount = scene.enemies.filter((e) => e.name === types_1.EnemyName.hunter).length;
        const ufoAliveCount = scene.enemies.filter((e) => e.name === types_1.EnemyName.ufo).length;
        const totalHeavyEnemiesCount = huntersAliveCount + ufoAliveCount;
        if (rand > 0.7 && (totalHeavyEnemiesCount < 2 || isAdditionalSpawn)) {
            this.createEnemy(enemies_1.UFO);
        }
        else if (rand > 0.3 && (totalHeavyEnemiesCount < 2 || isAdditionalSpawn)) {
            this.createEnemy(enemies_1.Hunter);
        }
        else {
            this.createEnemy(enemies_1.Bot);
        }
    }
}
exports.Level3 = Level3;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level4 = void 0;
const Level_1 = __webpack_require__(12);
class Level4 extends Level_1.Level {
    constructor(scene) {
        super(scene);
        this.nextAttemptTimeInterval = 1500;
    }
    update() {
        super.update();
    }
}
exports.Level4 = Level4;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CometsService = void 0;
const config_1 = __webpack_require__(0);
const Comet_1 = __webpack_require__(56);
const Service_1 = __webpack_require__(4);
class CometsService extends Service_1.Service {
    constructor(scene, params) {
        super(scene);
        this.comets = [];
        this.count = 15;
        this.params = params;
        this.init();
    }
    init() {
        const { scene, count } = this;
        for (let i = 0; i < count; i++) {
            this.comets.push(new Comet_1.Comet(scene, {}));
        }
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        this.comets.forEach((comet) => {
            const { body } = comet;
            body.y += comet.speed * deltaSpeed;
            if (body.y > config_1.CONFIG.height + 100) {
                comet.updateParams();
                comet.refreshPosition();
            }
        });
    }
}
exports.CometsService = CometsService;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Comet = void 0;
const config_1 = __webpack_require__(0);
const helpers_1 = __webpack_require__(3);
class Comet {
    constructor(scene, params) {
        this.speed = 3;
        this.scene = scene;
        this.body = this.scene.add.image(helpers_1.getRandomInt(0, config_1.CONFIG.width), helpers_1.getRandomInt(0, config_1.CONFIG.height), "comet");
        this.updateParams();
    }
    updateParams() {
        const { body } = this;
        body.setAlpha(0.03 + Math.random() * 0.1);
        body.setScale(0.2, 0.75 + Math.random() * 0.5);
        this.speed = helpers_1.getRandomInt(3, 7);
    }
    refreshPosition() {
        const { body } = this;
        body.x = helpers_1.getRandomInt(0, config_1.CONFIG.width);
        body.y = -100;
    }
}
exports.Comet = Comet;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const config_1 = __webpack_require__(0);
const components_1 = __webpack_require__(2);
const types_1 = __webpack_require__(1);
const helpers_1 = __webpack_require__(3);
const bullets_1 = __webpack_require__(7);
class Player {
    constructor(scene) {
        // config
        this.scale = 0.6;
        this.bodySize = 26;
        this.speed = 5;
        this.bulletSpeed = 10;
        this.lastShootTime = 0;
        this.shootTime = 320;
        this.hp = 100;
        this.maxHp = 100;
        this.weaponDamage = 10;
        this.angle = 0;
        this.scene = scene;
        this.body = this.scene.physics.add.image(300, 300, "player-ship");
        this.lastShootTime = scene.gameTime + 100;
        // this.laserSound = scene.sound.add("laser-2");
        this.init();
    }
    init() {
        const { scene, scale } = this;
        this.body.setScale(scale);
        this.body.setDepth(100);
        this.body.setImmovable(true);
        scene.add.existing(this.body);
    }
    act(time, delta) {
        this.update(time, delta);
    }
    update(time, delta) {
        if (!this.body.active)
            return;
        this.updateBody(time, delta);
        this.updateShooting(time, delta);
        this.updateMovement(time, delta);
        this.updateAngle(time, delta);
    }
    updateBody(time, delta) {
        const { scale, bodySize } = this;
        const offset = helpers_1.getOffsetToAngle(this.angle + Math.PI, 10);
        const pos = helpers_1.getCenterBody(this.body.displayWidth, this.body.displayHeight, scale, bodySize, offset);
        this.body.setCircle(bodySize, pos.x, pos.y);
    }
    updateShooting(time, delta) {
        const { scene } = this;
        const pointer = scene.input.activePointer;
        if (pointer.isDown) {
            this.shoot(new components_1.Vector(pointer.x, pointer.y));
        }
    }
    updateMovement(time, delta) {
        const { scene, body } = this;
        const cursorKeys = scene.input.keyboard.createCursorKeys();
        const deltaSpeed = delta / config_1.CONFIG.scene.delta;
        let spd = this.speed * deltaSpeed;
        if ((cursorKeys.up.isDown || cursorKeys.down.isDown) && (cursorKeys.right.isDown || cursorKeys.left.isDown)) {
            spd *= 0.8;
        }
        if (cursorKeys.up.isDown) {
            body.y -= spd;
        }
        else if (cursorKeys.down.isDown) {
            body.y += spd;
        }
        if (cursorKeys.right.isDown) {
            body.x += spd;
        }
        else if (cursorKeys.left.isDown) {
            body.x -= spd;
        }
        if (body.x < 0)
            body.x = 0;
        if (body.y < config_1.CONFIG.scene.minYPos)
            body.y = config_1.CONFIG.scene.minYPos;
        if (body.x > config_1.CONFIG.width) {
            body.x = config_1.CONFIG.width;
        }
        if (body.y > config_1.CONFIG.height) {
            body.y = config_1.CONFIG.height;
        }
    }
    updateAngle(time, delta) {
        const { scene, body } = this;
        const pointer = scene.input.activePointer;
        this.angle = helpers_1.getAngleBetween(new components_1.Vector(pointer.x, pointer.y), new components_1.Vector(body.x, body.y));
        this.body.angle = helpers_1.angleToDegrees(this.angle) + 90;
    }
    shoot(target) {
        const { scene, body, bulletSpeed, weaponDamage } = this;
        const time = scene.gameTime;
        if (time > this.lastShootTime) {
            // this.laserSound.play();
            const rotation = helpers_1.getAngleBetween(target, new components_1.Vector(body.x, body.y));
            this.scene.bullets.push(new bullets_1.SphereBullet(this.scene, new components_1.Vector(body.x, body.y), types_1.Owner.player, {
                speed: helpers_1.getOffsetToAngle(rotation, bulletSpeed),
                angle: rotation,
                sprite: "laser-green",
                explodeSprite: "green-explode",
                damage: weaponDamage,
            }));
            this.lastShootTime = time + this.shootTime;
        }
    }
    damage(value) {
        this.hp -= value;
        if (this.hp <= 0) {
            this.destroy();
        }
    }
    destroy() {
        const { scene, body } = this;
        scene.utils.tripleExplode(body.x, body.y);
        body.destroy();
        scene.onFail();
        scene.shakeScreen();
    }
}
exports.Player = Player;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.preload = void 0;
function preload() {
    // this.load.image("background", "assets/images/background/black-tile.png");
    this.load.image("background", "assets/images/background/gray.jpg");
    this.load.image("player-ship", "assets/images/ships/player-ship.png");
    this.load.image("enemy-bot-ship", "assets/images/ships/enemy-ship-2.png");
    this.load.image("enemy-hunter-ship", "assets/images/ships/enemy-hunter.png");
    this.load.image("enemy-ufo", "assets/images/ships/enemy-ufo.png");
    this.load.image("enemy-flyer", "assets/images/ships/enemy-flyer.png");
    this.load.image("laser-green", "assets/images/bullets/laser-green-3.png");
    this.load.image("laser-red", "assets/images/bullets/laser-red-2.png");
    this.load.image("sphere-bullet", "assets/images/bullets/sphere-bullet.png");
    this.load.image("green-explode", "assets/images/effects/green-explode.png");
    this.load.image("red-explode", "assets/images/effects/red-explode.png");
    this.load.image("orange-explode", "assets/images/effects/orange-explode.png");
    this.load.image("star", "assets/images/effects/star-4.png");
    this.load.image("fire", "assets/images/effects/fire-3.png");
    this.load.image("comet", "assets/images/effects/comet.png");
    this.load.image("meteor-1", "assets/images/effects/meteor-gray-1.png");
    this.load.image("meteor-2", "assets/images/effects/meteor-gray-2.png");
    this.load.image("meteor-3", "assets/images/effects/meteor-gray-3.png");
    this.load.image("meteor-4", "assets/images/effects/meteor-gray-4.png");
    // audio
    this.load.audio("laser-1", ["assets/audio/sfx_laser1.ogg"]);
    this.load.audio("laser-2", ["assets/audio/sfx_laser2.ogg"]);
    // bonus
    this.load.image("coin-bronze", "assets/images/bonus/star-bronze.png");
    this.load.image("coin-silver", "assets/images/bonus/star-silver.png");
}
exports.preload = preload;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const components_1 = __webpack_require__(2);
const Coin_1 = __webpack_require__(60);
const helpers_1 = __webpack_require__(3);
const effects_1 = __webpack_require__(15);
class Utils {
    constructor(scene) {
        this.scene = scene;
    }
    explode(x, y) {
        const { scene } = this;
        scene.effects.push(new effects_1.Explode(scene, new components_1.Vector(x, y), {
            sprite: "orange-explode",
        }));
    }
    tripleExplode(x, y) {
        const fullCircleRange = 360;
        const range = 30;
        const initialAngle = (Math.random() * fullCircleRange) / 3;
        for (let i = 0; i < 3; i++) {
            const angle = helpers_1.angleToRadians(i * (fullCircleRange / 3) + initialAngle);
            this.explode(x + Math.cos(angle) * range, y + Math.sin(angle) * range);
        }
    }
    createBonus(x, y) {
        const { scene } = this;
        scene.bonuses.push(new Coin_1.Coin(scene, new components_1.Vector(x, y)));
    }
}
exports.Utils = Utils;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin = void 0;
const Bonus_1 = __webpack_require__(61);
const COIN_MAP = {
    0: {
        sprite: "coin-bronze",
        cost: 5,
    },
    1: {
        sprite: "coin-silver",
        cost: 7,
    },
    2: {
        sprite: "coin-gold",
        cost: 10,
    },
};
const getCoinType = () => {
    const value = Math.random();
    if (value > 0.5)
        return 0;
    if (value > 0.2)
        return 1;
    return 2;
};
class Coin extends Bonus_1.Bonus {
    constructor(scene, pos) {
        super(scene);
        this.lifeTime = 5000;
        const coinParams = COIN_MAP[getCoinType()];
        this.cost = coinParams.cost;
        this.body = this.scene.physics.add.image(pos.x, pos.y, coinParams.sprite);
        this.creationTime = scene.gameTime;
        this.init();
    }
    init() {
        this.body.setDepth(10);
        this.body.setCircle(16);
        this.initCollisions();
    }
    initCollisions() {
        const { scene } = this;
        scene.physics.add.collider(this.body, scene.player.body, () => {
            scene.score += this.cost;
            this.destroy();
        });
    }
    act() {
        this.update();
    }
    update() {
        const { scene, body } = this;
        const time = scene.gameTime;
        body.angle += Math.sin(time * 0.003) * 3;
        if (time > this.creationTime + this.lifeTime) {
            this.destroy();
        }
    }
}
exports.Coin = Coin;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bonus = void 0;
class Bonus {
    constructor(scene) {
        this.scene = scene;
    }
    act() { }
    destroy() {
        const { body } = this;
        this.scene.bonuses = this.scene.bonuses.filter((b) => b !== this);
        body.destroy();
    }
}
exports.Bonus = Bonus;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialGameData = void 0;
const getInitialGameData = () => ({
    totalKills: 0,
    kills: {
        bot: 0,
        hunter: 0,
        flyer: 0,
        ufo: 0,
    },
});
exports.getInitialGameData = getInitialGameData;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuScene = void 0;
const colors_1 = __webpack_require__(5);
const components_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const ui_1 = __webpack_require__(8);
const types_1 = __webpack_require__(1);
const Scene_1 = __webpack_require__(9);
let globalAssetsLoaded = false;
const CENTER_POS_X = config_1.CONFIG.width / 2;
class MenuScene extends Scene_1.Scene {
    constructor() {
        super({
            key: types_1.SceneName.menu,
        });
    }
    preload() {
        this.load.image("coin-gold", "assets/images/bonus/star-gold.png");
        if (!globalAssetsLoaded) {
            this.load.bitmapFont("atari", "assets/fonts/atari/bitmap/gem.png", "assets/fonts/atari/bitmap/gem.xml");
            globalAssetsLoaded = true;
        }
    }
    create() {
        const startPosY = 145;
        this.graphics = this.add.graphics({
            lineStyle: { width: 2, color: colors_1.COLORS.white },
            fillStyle: { color: colors_1.COLORS.white },
        });
        this.createTitle(CENTER_POS_X, startPosY);
        this.createSubtitle(CENTER_POS_X, startPosY + 45);
        new ui_1.UICosmons(this, {
            pos: new components_1.Vector(CENTER_POS_X, startPosY + 90),
            value: this.getData().score,
            isCentered: true,
            depth: 100,
        });
        this.createLevelText(CENTER_POS_X, startPosY + 90 + 75);
        this.createStartButton(CENTER_POS_X, startPosY + 200);
        this.createLabButton(CENTER_POS_X, startPosY + 200 + 65);
        this.createLastUpdatedText(CENTER_POS_X, config_1.CONFIG.height - 30);
    }
    update() {
        this.rainbowText.update();
    }
    createTitle(posX, posY) {
        this.add.bitmapText(posX, posY, "atari", config_1.CONFIG.title, 32).setOrigin(0.5);
    }
    createSubtitle(posX, posY) {
        this.rainbowText = new ui_1.UIRainbowText(this, {
            pos: new components_1.Vector(posX, posY),
            text: config_1.CONFIG.subtitle,
        });
    }
    createLevelText(posX, posY) {
        const currentLevel = this.getData().level;
        const text = `Next level: ${currentLevel + 1}. ${config_1.LEVELS_CONFIG[currentLevel].title}`;
        this.add.dynamicBitmapText(posX, posY, "atari", text, 19).setOrigin(0.5);
    }
    createStartButton(posX, posY) {
        const startButton = new ui_1.UIButton(this, posX, posY, "", {
            width: 180,
            height: 46,
            text: "Start game",
        });
        startButton.on("pointerdown", () => {
            this.scene.start(types_1.SceneName.preview, {
                level: this.getData().level,
            });
        });
    }
    createLabButton(posX, posY) {
        const labButton = new ui_1.UIButton(this, posX, posY, "", {
            width: 180,
            height: 46,
            text: "Lab",
            disabled: true,
        });
        labButton.on("pointerdown", () => {
            console.log("lab");
        });
    }
    createLastUpdatedText(posX, posY) {
        const text = `Last updated: ${new Date({"ACLOCAL_PATH":"C:\\Git\\mingw64\\share\\aclocal;C:\\Git\\usr\\share\\aclocal","ALLUSERSPROFILE":"C:\\ProgramData","ANDROID_HOME":"E:\\Android_SDK","ANDROID_SDK_HOME":"E:\\Android_SDK","ANDROID_SDK_ROOT":"E:\\Android_SDK","ANDROID_SWT":"E:\\Android_SDK\\tools\\lib\\x86_64","APPDATA":"C:\\Users\\temah\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132206360822587475","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"DESKTOP-EOHH5JG","COMSPEC":"C:\\WINDOWS\\system32\\cmd.exe","CONFIG_SITE":"C:/Git/etc/config.site","DISPLAY":"needs-to-be-defined","dp0":"E:\\apps\\2021\\space-game-v2\\node_modules\\.bin\\","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EGPL_GeoLibrarian_Drive":"L","EXEPATH":"C:\\Git","FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer","FPS_BROWSER_USER_PROFILE_STRING":"Default","Gradle":"C:\\Gradle\\bin","HOME":"C:\\Users\\temah","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\temah","HOSTNAME":"DESKTOP-EOHH5JG","INFOPATH":"C:\\Git\\usr\\local\\info;C:\\Git\\usr\\share\\info;C:\\Git\\usr\\info;C:\\Git\\share\\info","INIT_CWD":"E:\\apps\\2021\\space-game-v2","JAVA_HOME":"C:\\Program Files\\Java\\jdk1.8.0_231","LC_CTYPE":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\temah\\AppData\\Local","LOGONSERVER":"\\\\DESKTOP-EOHH5JG","MANPATH":"C:\\Git\\mingw64\\local\\man;C:\\Git\\mingw64\\share\\man;C:\\Git\\usr\\local\\man;C:\\Git\\usr\\share\\man;C:\\Git\\usr\\man;C:\\Git\\share\\man","MINGW_CHOST":"x86_64-w64-mingw32","MINGW_PACKAGE_PREFIX":"mingw-w64-x86_64","MINGW_PREFIX":"C:/Git/mingw64","MSYSTEM":"MINGW64","MSYSTEM_CARCH":"x86_64","MSYSTEM_CHOST":"x86_64-w64-mingw32","MSYSTEM_PREFIX":"C:/Git/mingw64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","NODE_EXE":"C:\\Program Files\\nodejs\\\\node.exe","NPM_CLI_JS":"C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js","npm_config_access":"","npm_config_allow_same_version":"","npm_config_also":"","npm_config_always_auth":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_config_audit":"true","npm_config_audit_level":"low","npm_config_auth_type":"legacy","npm_config_before":"","npm_config_bin_links":"true","npm_config_browser":"","npm_config_ca":"","npm_config_cache":"C:\\Users\\temah\\AppData\\Roaming\\npm-cache","npm_config_cache_lock_retries":"10","npm_config_cache_lock_stale":"60000","npm_config_cache_lock_wait":"10000","npm_config_cache_max":"Infinity","npm_config_cache_min":"10","npm_config_cafile":"","npm_config_cert":"","npm_config_cidr":"","npm_config_color":"true","npm_config_commit_hooks":"true","npm_config_depth":"Infinity","npm_config_description":"true","npm_config_dev":"","npm_config_dry_run":"","npm_config_editor":"notepad.exe","npm_config_engine_strict":"","npm_config_fetch_retries":"2","npm_config_fetch_retry_factor":"10","npm_config_fetch_retry_maxtimeout":"60000","npm_config_fetch_retry_mintimeout":"10000","npm_config_force":"","npm_config_format_package_lock":"true","npm_config_git":"git","npm_config_git_tag_version":"true","npm_config_global":"","npm_config_globalconfig":"C:\\Users\\temah\\AppData\\Roaming\\npm\\etc\\npmrc","npm_config_globalignorefile":"C:\\Users\\temah\\AppData\\Roaming\\npm\\etc\\npmignore","npm_config_global_style":"","npm_config_group":"","npm_config_ham_it_up":"","npm_config_heading":"npm","npm_config_https_proxy":"","npm_config_if_present":"","npm_config_ignore_prepublish":"","npm_config_ignore_scripts":"","npm_config_init_author_email":"","npm_config_init_author_name":"","npm_config_init_author_url":"","npm_config_init_license":"ISC","npm_config_init_module":"C:\\Users\\temah\\.npm-init.js","npm_config_init_version":"1.0.0","npm_config_json":"","npm_config_key":"","npm_config_legacy_bundling":"","npm_config_link":"","npm_config_local_address":"","npm_config_loglevel":"notice","npm_config_logs_max":"10","npm_config_long":"","npm_config_maxsockets":"50","npm_config_message":"%s","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_node_gyp":"C:\\Users\\temah\\AppData\\Roaming\\nvm\\v12.13.0\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js","npm_config_node_options":"","npm_config_node_version":"12.13.0","npm_config_noproxy":"","npm_config_offline":"","npm_config_onload_script":"","npm_config_only":"","npm_config_optional":"true","npm_config_otp":"","npm_config_package_lock":"true","npm_config_package_lock_only":"","npm_config_parseable":"","npm_config_prefer_offline":"","npm_config_prefer_online":"","npm_config_prefix":"C:\\Users\\temah\\AppData\\Roaming\\npm","npm_config_preid":"","npm_config_production":"","npm_config_progress":"true","npm_config_proxy":"","npm_config_read_only":"","npm_config_rebuild_bundle":"true","npm_config_registry":"https://registry.npmjs.org/","npm_config_rollback":"true","npm_config_save":"true","npm_config_save_bundle":"","npm_config_save_dev":"","npm_config_save_exact":"","npm_config_save_optional":"","npm_config_save_prefix":"^","npm_config_save_prod":"","npm_config_scope":"","npm_config_scripts_prepend_node_path":"warn-only","npm_config_script_shell":"","npm_config_searchexclude":"","npm_config_searchlimit":"20","npm_config_searchopts":"","npm_config_searchstaleness":"900","npm_config_send_metrics":"","npm_config_shell":"C:\\WINDOWS\\system32\\cmd.exe","npm_config_shrinkwrap":"true","npm_config_sign_git_commit":"","npm_config_sign_git_tag":"","npm_config_sso_poll_frequency":"500","npm_config_sso_type":"oauth","npm_config_strict_ssl":"","npm_config_tag":"latest","npm_config_tag_version_prefix":"v","npm_config_timing":"","npm_config_tmp":"C:\\Users\\temah\\AppData\\Local\\Temp","npm_config_umask":"0000","npm_config_unicode":"","npm_config_unsafe_perm":"true","npm_config_update_notifier":"true","npm_config_usage":"","npm_config_user":"","npm_config_userconfig":"C:\\Users\\temah\\.npmrc","npm_config_user_agent":"npm/6.12.0 node/v12.13.0 win32 x64","npm_config_version":"","npm_config_versions":"","npm_config_viewer":"browser","npm_execpath":"C:\\Users\\temah\\AppData\\Roaming\\nvm\\v12.13.0\\node_modules\\npm\\bin\\npm-cli.js","npm_lifecycle_event":"build","npm_lifecycle_script":"cross-env NODE_ENV=production webpack","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author":"","npm_package_dependencies_phaser":"^3.55.2","npm_package_description":"","npm_package_devDependencies_copy_webpack_plugin":"^6.0.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_expose_loader":"1.0.3","npm_package_devDependencies_gh_pages":"^3.2.3","npm_package_devDependencies_ts_loader":"8.0.14","npm_package_devDependencies_typescript":"^4.3.5","npm_package_devDependencies_webpack":"^4.43.0","npm_package_devDependencies_webpack_cli":"^3.3.11","npm_package_devDependencies_webpack_dev_server":"^3.11.0","npm_package_gitHead":"15615ef751be71f4815d3775a50e33b2efc885ce","npm_package_license":"ISC","npm_package_main":"index.js","npm_package_name":"space-invaders","npm_package_scripts_build":"cross-env NODE_ENV=production webpack","npm_package_scripts_deploy":"npm run build && gh-pages -d dist","npm_package_scripts_dev":"cross-env NODE_ENV=development webpack-dev-server --mode development","npm_package_version":"1.0.0","NPM_PREFIX_NPM_CLI_JS":"C:\\Users\\temah\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js","NUMBER_OF_PROCESSORS":"16","NVM_HOME":"C:\\Users\\temah\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\temah\\OneDrive","OneDriveConsumer":"C:\\Users\\temah\\OneDrive","ORIGINAL_PATH":"C:\\Git\\mingw64\\bin;C:\\Git\\usr\\bin;C:\\Users\\temah\\bin;C:\\Gradle\\bin;C:\\ProgramData\\ComposerSetup\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\dotnet;C:\\Git\\cmd;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Users\\temah\\AppData\\Local\\Programs\\Python\\Python38-32\\Scripts;C:\\Users\\temah\\AppData\\Local\\Programs\\Python\\Python38-32;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Ruby26-x64\\bin;C:\\Users\\temah\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\temah\\AppData\\Roaming\\npm;C:\\Program Files\\Java\\jdk1.8.0_231;C:\\Users\\temah\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\php7;C:\\Users\\temah\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Program Files (x86)\\GnuWin32\\bin;C:\\Gradle\\bin;C:\\Windows\\System32\\wbem;E:\\Android_SDK\\emulator;E:\\Android_SDK\\platform-tools;E:\\Fiddler;C:\\Program Files\\Java\\jdk1.8.0_231\\bin;C:\\Windows\\System32;C:\\Program Files\\PostgreSQL\\12\\bin;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Users\\temah\\AppData\\Local\\Microsoft\\WindowsApps;E:\\Microsoft VS Code\\bin;C:\\Users\\temah\\.dotnet\\tools;C:\\Program Files\\Docker\\Docker\\resources\\bin","ORIGINAL_TEMP":"C:/Users/temah/AppData/Local/Temp","ORIGINAL_TMP":"C:/Users/temah/AppData/Local/Temp","OS":"Windows_NT","Path":"C:\\Users\\temah\\AppData\\Roaming\\nvm\\v12.13.0\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;E:\\apps\\2021\\space-game-v2\\node_modules\\.bin;C:\\Users\\temah\\AppData\\Roaming\\nvm\\v12.13.0\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;E:\\apps\\2021\\space-game-v2\\node_modules\\.bin;C:\\Users\\temah\\bin;C:\\Git\\mingw64\\bin;C:\\Git\\usr\\local\\bin;C:\\Git\\usr\\bin;C:\\Git\\usr\\bin;C:\\Git\\mingw64\\bin;C:\\Git\\usr\\bin;C:\\Users\\temah\\bin;C:\\Gradle\\bin;C:\\ProgramData\\ComposerSetup\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\dotnet;C:\\Git\\cmd;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Users\\temah\\AppData\\Local\\Programs\\Python\\Python38-32\\Scripts;C:\\Users\\temah\\AppData\\Local\\Programs\\Python\\Python38-32;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Ruby26-x64\\bin;C:\\Users\\temah\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\temah\\AppData\\Roaming\\npm;C:\\Program Files\\Java\\jdk1.8.0_231;C:\\Users\\temah\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\php7;C:\\Users\\temah\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Program Files (x86)\\GnuWin32\\bin;C:\\Gradle\\bin;C:\\Windows\\System32\\wbem;E:\\Android_SDK\\emulator;E:\\Android_SDK\\platform-tools;E:\\Fiddler;C:\\Program Files\\Java\\jdk1.8.0_231\\bin;C:\\Windows\\System32;C:\\Program Files\\PostgreSQL\\12\\bin;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Users\\temah\\AppData\\Local\\Microsoft\\WindowsApps;E:\\Microsoft VS Code\\bin;C:\\Users\\temah\\.dotnet\\tools;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Git\\usr\\bin\\vendor_perl;C:\\Git\\usr\\bin\\core_perl","PATH":"C:\\Users\\temah\\AppData\\Roaming\\nvm\\v12.13.0\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;E:\\apps\\2021\\space-game-v2\\node_modules\\.bin;C:\\Users\\temah\\AppData\\Roaming\\nvm\\v12.13.0\\node_modules\\npm\\node_modules\\npm-lifecycle\\node-gyp-bin;E:\\apps\\2021\\space-game-v2\\node_modules\\.bin;C:\\Users\\temah\\bin;C:\\Git\\mingw64\\bin;C:\\Git\\usr\\local\\bin;C:\\Git\\usr\\bin;C:\\Git\\usr\\bin;C:\\Git\\mingw64\\bin;C:\\Git\\usr\\bin;C:\\Users\\temah\\bin;C:\\Gradle\\bin;C:\\ProgramData\\ComposerSetup\\bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0;C:\\WINDOWS\\System32\\OpenSSH;C:\\Program Files\\dotnet;C:\\Git\\cmd;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Users\\temah\\AppData\\Local\\Programs\\Python\\Python38-32\\Scripts;C:\\Users\\temah\\AppData\\Local\\Programs\\Python\\Python38-32;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Ruby26-x64\\bin;C:\\Users\\temah\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\temah\\AppData\\Roaming\\npm;C:\\Program Files\\Java\\jdk1.8.0_231;C:\\Users\\temah\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\php7;C:\\Users\\temah\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Program Files (x86)\\GnuWin32\\bin;C:\\Gradle\\bin;C:\\Windows\\System32\\wbem;E:\\Android_SDK\\emulator;E:\\Android_SDK\\platform-tools;E:\\Fiddler;C:\\Program Files\\Java\\jdk1.8.0_231\\bin;C:\\Windows\\System32;C:\\Program Files\\PostgreSQL\\12\\bin;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Users\\temah\\AppData\\Local\\Microsoft\\WindowsApps;E:\\Microsoft VS Code\\bin;C:\\Users\\temah\\.dotnet\\tools;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\Git\\usr\\bin\\vendor_perl;C:\\Git\\usr\\bin\\core_perl","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.RB;.RBW","PKG_CONFIG_PATH":"C:\\Git\\mingw64\\lib\\pkgconfig;C:\\Git\\mingw64\\share\\pkgconfig","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"AMD64 Family 23 Model 113 Stepping 0, AuthenticAMD","PROCESSOR_LEVEL":"23","PROCESSOR_REVISION":"7100","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\Wired Networking\\","PUBLIC":"C:\\Users\\Public","PWD":"E:/apps/2021/space-game-v2","SESSIONNAME":"Console","SHELL":"C:\\Git\\usr\\bin\\bash.exe","SHLVL":"2","SSH_ASKPASS":"C:/Git/mingw64/libexec/git-core/git-gui--askpass","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\WINDOWS","TEMP":"C:\\Users\\temah\\AppData\\Local\\Temp","TERM":"xterm","TERM_PROGRAM":"mintty","TERM_PROGRAM_VERSION":"3.4.7","TMP":"C:\\Users\\temah\\AppData\\Local\\Temp","TMPDIR":"C:\\Users\\temah\\AppData\\Local\\Temp","USERDOMAIN":"DESKTOP-EOHH5JG","USERDOMAIN_ROAMINGPROFILE":"DESKTOP-EOHH5JG","USERNAME":"temah","USERPROFILE":"C:\\Users\\temah","VBOX_HWVIRTEX_IGNORE_SVM_IN_USE":"1","VBOX_MSI_INSTALL_PATH":"C:\\Program Files\\Oracle\\VirtualBox\\","WINDIR":"C:\\WINDOWS","_":"C:/Program Files/nodejs/node.exe","_prog":"node","buildTime":1632779462258}.buildTime).toLocaleString()}`;
        this.add.dynamicBitmapText(posX, posY, "atari", text, 16).setOrigin(0.5);
    }
}
exports.MenuScene = MenuScene;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailScene = void 0;
const colors_1 = __webpack_require__(5);
const components_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const ui_1 = __webpack_require__(8);
const types_1 = __webpack_require__(1);
const Scene_1 = __webpack_require__(9);
class FailScene extends Scene_1.Scene {
    constructor() {
        super({
            key: types_1.SceneName.fail,
        });
    }
    preload() {
        // code
    }
    init(data) {
        this.params = data;
    }
    create() {
        let currentPosY = config_1.CONFIG.height / 2 - 90;
        this.rainbowTitle = new ui_1.UIRainbowText(this, {
            pos: new components_1.Vector(config_1.CONFIG.width / 2, currentPosY),
            text: config_1.CONFIG.scene.failTitleText,
            fontSize: 28,
            color: colors_1.COLORS.red,
        });
        currentPosY += 20;
        const subtitleText = new Phaser.GameObjects.BitmapText(this, config_1.CONFIG.width / 2, currentPosY, "atari", config_1.CONFIG.scene.failSubtitleText, 19);
        subtitleText.setOrigin(0.5, 0).setCenterAlign().setTint(colors_1.COLORS.white);
        this.add.existing(subtitleText);
        currentPosY += 67;
        this.createTryAgainButton(currentPosY);
        currentPosY += 65;
        this.createMenuButton(currentPosY);
    }
    update() {
        this.rainbowTitle.update();
    }
    createMenuButton(posY) {
        const menuButton = new ui_1.UIButton(this, config_1.CONFIG.width / 2, posY, "", {
            width: 160,
            height: 46,
            text: "Go to menu",
        });
        menuButton.on("pointerdown", () => {
            this.scene.start(types_1.SceneName.menu);
        });
    }
    createTryAgainButton(posY) {
        const tryAgainButton = new ui_1.UIButton(this, config_1.CONFIG.width / 2, posY, "", {
            width: 160,
            height: 46,
            text: "Try again",
        });
        const gameParams = {
            level: this.getData().level,
        };
        tryAgainButton.on("pointerdown", () => {
            this.scene.start(types_1.SceneName.game, gameParams);
        });
    }
}
exports.FailScene = FailScene;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WinScene = void 0;
const components_1 = __webpack_require__(2);
const config_1 = __webpack_require__(0);
const ui_1 = __webpack_require__(8);
const types_1 = __webpack_require__(1);
const Scene_1 = __webpack_require__(9);
class WinScene extends Scene_1.Scene {
    constructor() {
        super({
            key: types_1.SceneName.win,
        });
    }
    preload() {
        // code
    }
    init(data) {
        this.params = data;
    }
    create() {
        var _a;
        const centerPosX = config_1.CONFIG.width / 2;
        let currentPosY = config_1.CONFIG.height / 2 - 180;
        const globalData = this.getData();
        const { score, isFlawlessVictory } = this.params;
        const bestLevelScore = ((_a = globalData.levels[globalData.level]) === null || _a === void 0 ? void 0 : _a.score) || 0;
        const flawlessVictoryScores = isFlawlessVictory ? Math.ceil(score * 0.25) : 0;
        const totalScore = score + flawlessVictoryScores;
        const plusScore = bestLevelScore < totalScore ? totalScore - bestLevelScore : 0;
        const scoreParams = {
            currentLevel: globalData.level,
            score,
            totalScore,
            bestLevelScore,
            flawlessVictoryScores,
            plusScore,
        };
        this.createTitle(centerPosX, currentPosY);
        currentPosY += 35;
        this.createScores(centerPosX, currentPosY, scoreParams);
        currentPosY += 170;
        this.createNextButton(currentPosY);
        currentPosY += 65;
        this.createTryAgainButton(currentPosY);
        currentPosY += 65;
        this.createMenuButton(currentPosY);
        this.updateGlobalData(scoreParams);
    }
    update() {
        this.rainbowTitle.update();
    }
    createTitle(posX, posY) {
        this.rainbowTitle = new ui_1.UIRainbowText(this, {
            pos: new components_1.Vector(posX, posY),
            text: config_1.CONFIG.scene.winTitleText,
            fontSize: 28,
        });
    }
    createScores(posX, posY, params) {
        const scoresText = `Score: ${params.score}\nFlawless victory: ${params.flawlessVictoryScores}\nBest score: ${params.bestLevelScore}\nTotal score: ${params.totalScore}`;
        const scoresBitmapText = new Phaser.GameObjects.BitmapText(this, posX, posY, "atari", scoresText, 18)
            .setOrigin(0.5, 0)
            .setCenterAlign();
        this.add.existing(scoresBitmapText);
        new ui_1.UICosmons(this, {
            pos: new components_1.Vector(posX, posY + 120),
            isCentered: true,
            value: params.plusScore,
            prefix: "+",
            depth: 100,
        });
    }
    createNextButton(posY) {
        const currentLevel = this.getData().level;
        const nextLevelButton = new ui_1.UIButton(this, config_1.CONFIG.width / 2, posY, "", {
            width: 160,
            height: 46,
            text: "Next level",
            disabled: config_1.CONFIG.levelsCount <= currentLevel + 1,
        });
        nextLevelButton.on("pointerdown", () => {
            this.setData("level", currentLevel + 1);
            const gameParams = {
                level: this.getData().level,
            };
            this.scene.start(types_1.SceneName.preview, gameParams);
        });
    }
    createTryAgainButton(posY) {
        const tryAgainButton = new ui_1.UIButton(this, config_1.CONFIG.width / 2, posY, "", {
            width: 160,
            height: 46,
            text: "Try again",
        });
        const gameParams = {
            level: this.getData().level,
        };
        tryAgainButton.on("pointerdown", () => {
            this.scene.start(types_1.SceneName.game, gameParams);
        });
    }
    createMenuButton(posY) {
        const globalData = this.getData();
        const { level: currentLevel, levels } = globalData;
        const menuButton = new ui_1.UIButton(this, config_1.CONFIG.width / 2, posY, "", {
            width: 160,
            height: 46,
            text: "Go to menu",
        });
        menuButton.on("pointerdown", () => {
            if (currentLevel + 1 < config_1.CONFIG.levelsCount) {
                this.setData("level", currentLevel + 1);
            }
            this.scene.start(types_1.SceneName.menu);
        });
    }
    updateGlobalData(params) {
        const globalData = this.getData();
        if (params.bestLevelScore < params.totalScore) {
            this.setData("levels", Object.assign(Object.assign({}, globalData.levels), { [params.currentLevel]: {
                    score: params.totalScore,
                } }));
            this.setData("score", globalData.score + params.plusScore);
        }
    }
}
exports.WinScene = WinScene;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewScene = void 0;
const colors_1 = __webpack_require__(5);
const config_1 = __webpack_require__(0);
const ui_1 = __webpack_require__(8);
const types_1 = __webpack_require__(1);
const Scene_1 = __webpack_require__(9);
class PreviewScene extends Scene_1.Scene {
    constructor() {
        super({
            key: types_1.SceneName.preview,
        });
    }
    init(data) {
        this.params = data;
    }
    create() {
        const { params } = this;
        const { level } = params;
        const { title, text, mission } = config_1.LEVELS_CONFIG[level];
        const centerY = config_1.CONFIG.height / 2;
        const titleText = new Phaser.GameObjects.BitmapText(this, config_1.CONFIG.width / 2, 0, "atari", `${level + 1}. ${title}`, 32);
        titleText.setOrigin(0.5, 0).setCenterAlign();
        const descriptionText = new Phaser.GameObjects.BitmapText(this, config_1.CONFIG.width / 2, 0, "atari", text, 18);
        descriptionText.setMaxWidth(400).setOrigin(0.5, 0).setCenterAlign();
        const missionText = new Phaser.GameObjects.BitmapText(this, config_1.CONFIG.width / 2, 0, "atari", mission, 18);
        missionText.setMaxWidth(400).setOrigin(0.5, 0).setCenterAlign().setTint(colors_1.COLORS.green);
        const totalContentHeight = titleText.height + descriptionText.height + missionText.height + 100;
        const startY = centerY - totalContentHeight / 2 + 5;
        titleText.y = startY - 25;
        descriptionText.y = titleText.y + 65;
        missionText.y = descriptionText.y + descriptionText.height + 25;
        this.add.existing(titleText);
        this.add.existing(descriptionText);
        this.add.existing(missionText);
        this.drawButton(missionText.y + missionText.height + 45);
    }
    drawButton(posY) {
        const goButton = new ui_1.UIButton(this, config_1.CONFIG.width / 2, posY, "", {
            width: 120,
            height: 46,
            text: "Go",
        });
        const gameParams = {
            level: this.params.level,
        };
        goButton.on("pointerdown", () => {
            this.scene.start(types_1.SceneName.game, gameParams);
        });
    }
}
exports.PreviewScene = PreviewScene;


/***/ })
/******/ ]);