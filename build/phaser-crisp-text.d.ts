declare module Fabrique {
    class CrispText extends Phaser.Text {
    }
}
declare module Fabrique {
    module Plugins {
        interface CrispTextObjectFactory extends Phaser.GameObjectFactory {
            crispText: (x: number, y: number, text: string, style: any, group?: Phaser.Group) => Fabrique.CrispText;
        }
        interface CrispTextObjectCreator extends Phaser.GameObjectCreator {
            crispText: (x: number, y: number, text?: string, style?: any) => Fabrique.CrispText;
        }
        interface CrispTextGame extends Phaser.Game {
            add: CrispTextObjectFactory;
            make: CrispTextObjectCreator;
        }
        class CrispText extends Phaser.Plugin {
            constructor(game: Phaser.Game, parent: PIXI.DisplayObject);
            /**
             * Extends the GameObjectFactory prototype with the support of adding InputField. this allows us to add InputField methods to the game just like any other object:
             * game.add.InputField();
             */
            private addCrispTextFactory();
        }
    }
}
