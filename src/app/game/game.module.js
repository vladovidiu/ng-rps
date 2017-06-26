import angular from 'angular';
import uiRouter from 'angular-ui-router';

import GamePageComponent from './containers/game-page/game-page.component';

const GameModule =
    angular
        .module('components.game', [
            uiRouter
        ])
        .config(/*@ngInject*/ $stateProvider => {
            $stateProvider
                .state('game', {
                    url: '',
                    component: 'gamePage'
                });
        })
        .component('gamePage', GamePageComponent);

export default GameModule;
