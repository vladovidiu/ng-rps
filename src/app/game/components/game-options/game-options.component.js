import template from './game-options.html';

const GameOptionsComponent = {
    bindings: {
        options: '<',
        disable: '<',
        onChoiceSelected: '&'
    },
    templateUrl: template,
    controller: class GameOptionsComponent {
        /* @ngInject */
        constructor() {

        }
    }
};

export default GameOptionsComponent;
