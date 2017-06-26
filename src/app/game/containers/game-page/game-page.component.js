import template from './game-page.html';

const GamePageComponent = {
    bindings: {},
    templateUrl: template,
    controller: class GamePageComponent {
        /* @ngInject */
        constructor() {
            console.log('GamePage');
        }
    }
}

export default GamePageComponent;
