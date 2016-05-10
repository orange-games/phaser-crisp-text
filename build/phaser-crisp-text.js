/*!
 * phaser-crisp-text - version 0.0.1 
 * Phaser plugin that makes text look crisp all the time, regardless of the scale on the Text object
 *
 * OrangeGames
 * Build at 09-05-2016
 * Released under MIT License 
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Fabrique;
(function (Fabrique) {
    var CrispText = (function (_super) {
        __extends(CrispText, _super);
        function CrispText() {
            _super.apply(this, arguments);
        }
        return CrispText;
    })(Phaser.Text);
    Fabrique.CrispText = CrispText;
})(Fabrique || (Fabrique = {}));
var Fabrique;
(function (Fabrique) {
    var Plugins;
    (function (Plugins) {
        var CrispText = (function (_super) {
            __extends(CrispText, _super);
            function CrispText(game, parent) {
                _super.call(this, game, parent);
                this.addCrispTextFactory();
            }
            /**
             * Extends the GameObjectFactory prototype with the support of adding InputField. this allows us to add InputField methods to the game just like any other object:
             * game.add.InputField();
             */
            CrispText.prototype.addCrispTextFactory = function () {
                Phaser.GameObjectFactory.prototype.crispText = function (x, y, text, style, group) {
                    if (group === undefined) {
                        group = this.world;
                    }
                    var nineSliceObject = new Fabrique.CrispText(this.game, x, y, text, style);
                    return group.add(nineSliceObject);
                };
                Phaser.GameObjectCreator.prototype.crispText = function (x, y, text, style) {
                    return new Fabrique.CrispText(this.game, x, y, text, style);
                };
            };
            return CrispText;
        })(Phaser.Plugin);
        Plugins.CrispText = CrispText;
    })(Plugins = Fabrique.Plugins || (Fabrique.Plugins = {}));
})(Fabrique || (Fabrique = {}));
//# sourceMappingURL=phaser-crisp-text.js.map