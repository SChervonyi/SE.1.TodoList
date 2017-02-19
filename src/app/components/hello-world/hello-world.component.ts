import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: 'hello-world.component.html',
    styles: [
        require('./hello-world.component.scss')
    ]
})
export class HelloWorldComponent {
    public name: string = 'Ches';
}
