import {bootstrap} from 'angular2/platform/browser';
import {MyAppComponent} from './app.component';

bootstrap(MyAppComponent)
.catch(err => console.log(err))
