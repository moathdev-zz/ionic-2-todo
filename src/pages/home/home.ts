import {Component} from '@angular/core';

import {AlertController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    tasks: any[];

    constructor(private alertCtrl: AlertController) {
        this.tasks = [
            {task: 'task1', priority: 'low', status: 'pending'},
            {task: 'task2', priority: 'high', status: 'pending'},
            {task: 'task3', priority: 'medium', status: 'priority'},
            {task: 'task4', priority: 'done', status: 'done'},
        ];
    }

    createTask() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'task name'
                },
                {
                    name: 'details',
                    placeholder: 'task details'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Create',
                    handler: data => {
                        console.log('Create clicked');
                    }
                }
            ]
        });
        alert.present();
    }

    editTask(task) {
        // edit task
    }

    deleteTask(task) {
        // delete task
    }


}
