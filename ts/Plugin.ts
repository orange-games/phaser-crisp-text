module Fabrique {
    export module Plugins {
        export interface CrispTextObjectFactory extends Phaser.GameObjectFactory {
            crispText: (x: number, y: number, text: string, style: any, group?: Phaser.Group) => Fabrique.CrispText;
        }

        export interface CrispTextObjectCreator extends Phaser.GameObjectCreator {
            crispText: (x: number, y: number, text?: string, style?: any) => Fabrique.CrispText;
        }

        export interface CrispTextGame extends Phaser.Game {
            add: CrispTextObjectFactory;
            make: CrispTextObjectCreator;
        }

        export class CrispText extends Phaser.Plugin {
            constructor(game:Phaser.Game, parent:PIXI.DisplayObject) {
                super(game, parent);

                this.addCrispTextFactory();
            }

            /**
             * Extends the GameObjectFactory prototype with the support of adding InputField. this allows us to add InputField methods to the game just like any other object:
             * game.add.InputField();
             */
            private addCrispTextFactory() {
                (<Fabrique.Plugins.CrispTextObjectFactory>Phaser.GameObjectFactory.prototype).crispText = function (x: number, y: number, text: string, style: any, group?: Phaser.Group): Fabrique.CrispText {
                    if (group === undefined) {
                        group = this.world;
                    }

                    var nineSliceObject = new Fabrique.CrispText(this.game, x, y, text, style);

                    return group.add(nineSliceObject);
                };

                (<Fabrique.Plugins.CrispTextObjectCreator>Phaser.GameObjectCreator.prototype).crispText = function (x: number, y: number, text?: string, style?: any): Fabrique.CrispText {
                    return new Fabrique.CrispText(this.game, x, y, text, style);
                };
            }

        }
    }
}
