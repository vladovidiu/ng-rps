import angular from 'angular';
import uiRouter from 'angular-ui-router';

import GamePageComponent from './containers/game-page/game-page.component';
import GameHeaderComponent from './components/game-header/game-header.component';
import GameOptionsComponent from './components/game-options/game-options.component';
import GameOptionComponent from './components/game-option/game-option.component';

/**
 * @ngdoc module
 * @name components.game
 *
 * @description
 *
 * This is the components.game module containing the main component of the app
 *
 **/

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
        .component('gamePage', GamePageComponent)
        .component('gameHeader', GameHeaderComponent)
        .component('gameOptions', GameOptionsComponent)
        .component('gameOption', GameOptionComponent);

export default GameModule;
