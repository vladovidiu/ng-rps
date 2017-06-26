describe('Game Page Component', () => {
    beforeEach(module('components.game'));

    let scope, element;

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<game-page test="{{ outside }}"></game-page>');
        element = $compile(element)(scope);
        scope.outside = 'vlaaaad';
        scope.$apply();
    }));

    let ctrl;

    beforeEach(function() {
        ctrl = element.controller('gamePage');
    });

    it('should expose test', () => {
        expect(ctrl.test).toEqual('Test Unit Testing');
    });

    it('should not contain undefined var', () => {
        expect(ctrl.und).toBeUndefined();
    });
});
