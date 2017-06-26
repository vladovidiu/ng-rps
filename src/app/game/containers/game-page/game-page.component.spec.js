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
        expect(ctrl.title).toEqual('Rock, Paper, Scissors');
    });

    it('should not contain undefined var', () => {
        expect(ctrl.und).toBeUndefined();
    });

    it('should return tie', () => {
        ctrl.compareChoices('Rock', 'Rock');
        expect(ctrl.winner).toEqual(`It's a tie`);
    });

    it('should return tie', () => {
        ctrl.compareChoices('Paper', 'Paper');
        expect(ctrl.winner).toEqual(`It's a tie`);
    });

    it('should return tie', () => {
        ctrl.compareChoices('Scissors', 'Scissors');
        expect(ctrl.winner).toEqual(`It's a tie`);
    });

    it('should return your win', () => {
        ctrl.compareChoices('Rock', 'Scissors');
        expect(ctrl.winner).toEqual(`You win`);
    });

    it('should return cpu win', () => {
        ctrl.compareChoices('Rock', 'Paper');
        expect(ctrl.winner).toEqual(`CPU wins`);
    });

    it('should return you win', () => {
        ctrl.compareChoices('Paper', 'Rock');
        expect(ctrl.winner).toEqual(`You win`);
    });

    it('should return cpu win', () => {
        ctrl.compareChoices('Paper', 'Scissors');
        expect(ctrl.winner).toEqual(`CPU wins`);
    });
});
