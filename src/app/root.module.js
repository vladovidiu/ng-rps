import '../sass/style.scss';

import angular from 'angular';
import RootComponent from './root.component';
import GameModule from './game/game.module';


/**
 * @ngdoc module
 * @name root
 *
 * @description
 *
 * This is the root module
 *
 **/
const RootModule = angular
    .module('root', [
        GameModule.name
    ])
    .component('root', RootComponent);

export default RootModule;
