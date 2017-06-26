import template from './game-header.html';

const GameHeaderComponent = {
    bindings: {
        title: '<'
    },
    templateUrl: template,
    controller: class GameHeaderComponent {
        constructor() {}
    }
};

export default GameHeaderComponent;
