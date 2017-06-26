describe('Game Option Component', () => {
    beforeEach(module('components.game'));

    let scope, element;

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<game-option options="options" on-choice-selected="onChoiceSelected()"></game-option>');
        element = $compile(element)(scope);
        scope.options = ['one', 'two', 'three'];
        scope.onChoiceSelected = () => {
            return scope.options[0];
        };
        scope.$apply();
    }));

    let ctrl;

    beforeEach(function() {
        ctrl = element.controller('gameOptions');
    });

    it('should have the list of options passed', () => {
        expect(scope.options).toEqual(['one', 'two', 'three']);
    });

    it('should return a selected choice', () => {
        let localOption = scope.onChoiceSelected();
        expect(localOption).toEqual('one');
    });
});
