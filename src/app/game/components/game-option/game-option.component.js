import template from './game-option.html';

const GameOptionComponent = {
    bindings: {
        option: '<',
        disable: '<',
        onChoiceSelected: '&'
    },
    templateUrl: template,
    controller: class GameOptionComponent {
        /* @ngInject */
        constructor() {

        }
    }
};

export default GameOptionComponent;
