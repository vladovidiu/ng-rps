import template from './game-page.html';

const GamePageComponent = {
    bindings: {},
    templateUrl: template,
    controller: class GamePageComponent {
        /* @ngInject */
        constructor($timeout) {
            this.title = 'Rock, Paper, Scissors';

            this.waitForAi = false;

            this.cpuChoice = '';
            this.userWins = 0;
            this.cpuWins = 0;

            this.options = [
                {
                    choice: 0,
                    name: 'Rock'
                },
                {
                    choice: 1,
                    name: 'Paper'
                },
                {
                    choice: 2,
                    name: 'Scissors'
                }
            ];

            const getCpuChoice = () => {
                let rand = parseFloat(Math.random()).toFixed(2);
                return (rand <= 0.33) ? 'Rock' : (0.34 <= rand && rand <= 0.66) ? 'Paper' : 'Scissors';
            };

            this.compareChoices = (userChoice, cpuChoice) => {
                this.winner = '';
                if (Object.is(userChoice, cpuChoice)) {
                    this.winner = `It's a tie`;
                    return;
                }

                // TODO move this into a separate function
                switch (userChoice) {
                    case 'Rock':
                        if ((Object.is(cpuChoice, 'Paper'))) {
                            this.winner = 'CPU wins';
                            this.cpuWins ++;
                        } else {
                            this.winner = 'You win';
                            this.userWins ++;
                        }
                        break;
                    case 'Paper':
                        if ((Object.is(cpuChoice, 'Scissors'))) {
                            this.winner = 'CPU wins';
                            this.cpuWins ++;
                        } else {
                            this.winner = 'You win';
                            this.userWins ++;
                        }
                        break;
                    case 'Scissors':
                        if ((Object.is(cpuChoice, 'Rock'))) {
                            this.winner = 'CPU wins';
                            this.cpuWins ++;
                        } else {
                            this.winner = 'You win';
                            this.userWins ++;
                        }
                        break;
                }
            };

            this.selectOptions = $event => {
                this.waitForAi = true;
                this.makeUserWait = true;

                $timeout(() => {
                    this.cpuChoice = getCpuChoice();
                    this.compareChoices($event, this.cpuChoice);

                    this.waitForAi = false;
                    this.makeUserWait = false;
                }, 2000);

            };
        }
    }
};

export default GamePageComponent;
