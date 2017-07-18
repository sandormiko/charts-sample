import * as chart from 'highcharts';
import * as angular from 'angular';
import {PersonService} from './PersonService';
import {PersonDTO} from './Person.types';

export class PersonGraphController {

    static NAME = 'PersonGraphController';
    static $inject = ["personService", "$translate"];
    constructor(private personService: PersonService, private $translate: ng.translate.ITranslateService) {

    }

    $onInit() {
        this.initChart();
    }


    private initChart(): void {
        let personList: Array<PersonDTO>;
        let chartData: Array<number>;
        this.personService.getPersons().then((data: Array<PersonDTO>) => {
            personList = data;
            let maxAge: number = Math.max(...personList.filter((person) => person.age >= 0).map(p => p.age));
            let categories: string[] = this.initCategories(maxAge);
            chartData = this.initChartData(categories.length);
            personList.forEach((person: PersonDTO) => {

                if (person.age >= 0) {
                    let ageDividedByTen: number = person.age / 10;
                    let index: number = Math.floor(ageDividedByTen);
                    let sum = chartData[index] || 0;
                    chartData[index] = sum + 1;

                }

            });


            angular.element(document).ready(() => {

                chart.chart('container', {
                    title: {
                        text: this.$translate.instant('persons.chart.title')
                    },
                    credits: {
                        position: {
                            align: 'right'
                        }
                    },
                    xAxis: {
                        title: {
                            text: this.$translate.instant('persons.chart.xAxis.title')
                        },
                        categories: categories,
                        labels: {
                            x: 40
                        }


                    },
                    yAxis: {
                        title: {
                            text: this.$translate.instant('persons.chart.yAxis.title')
                        }
                    },

                    series: [{
                        data: chartData,
                        type: 'column',
                        name: 'Distribution'
                    }]
                });
            });

        });

    }

    private initCategories(maxAge: number): string[] {
        let categories: string[] = [];
        let index: number = Math.floor(maxAge / 10);
        for (let i: number = 0; i <= index; i++) {
            categories[i] = ((i + 1) * 10).toString();
        }

        return categories;
    }

    private initChartData(index: number): number[] {
        let chartData: number[] = [];
        for (let i: number = 0; i < index; i++) {
            chartData[i] = 0;
        }

        return chartData;
    }
}
