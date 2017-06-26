import template from './game-page.html';

const GamePageComponent = {
    bindings: {},
    templateUrl: template,
    controller: class GamePageComponent {
        /* @ngInject */
        constructor() {
            this.test = 'Test Unit Testing';
        }
    }
}

export default GamePageComponent;
