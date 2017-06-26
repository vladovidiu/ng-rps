describe('Game Options Component', () => {
    beforeEach(module('components.game'));

    let scope, element;

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<game-options options="options"></game-options>');
        element = $compile(element)(scope);
        scope.options = ['one', 'two', 'three'];
        scope.$apply();
    }));

    let ctrl;

    beforeEach(function() {
        ctrl = element.controller('gameOptions');
    });

    it('should have the list of options passed', () => {
        expect(scope.options).toEqual(['one', 'two', 'three']);
    });
});
