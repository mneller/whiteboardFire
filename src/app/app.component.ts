import {Component, OnInit} from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    getHugo () {
        const x = 1763;
        return 'Hugo was here' + x;
    };

    ngOnInit () {
        console.log("hugo2");
    }
}
