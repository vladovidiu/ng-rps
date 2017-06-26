describe('Game Header Component', () => {
    beforeEach(module('components.game'));

    let scope, element;

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<game-header title="title"></game-header>');
        element = $compile(element)(scope);
        scope.title = 'Game Page';
        scope.$apply();
    }));

    it('should render the text', function() {
        var h1 = element.find('h1');
        expect(h1.text()).toBe('Game Page');
    });
});
