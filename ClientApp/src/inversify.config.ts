import 'reflect-metadata';
import { Container } from 'inversify';
import { CounterService } from './services/CounterService';

let container = new Container();
// Mapping the CounterService to itself. You could map this somewhere else
//inSingletonScope mean only one instance of CounterService at time of running
container.bind(CounterService).toSelf().inSingletonScope();
export{container}