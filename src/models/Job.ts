import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import Result from './result';

@Table
export default class Job extends Model<Job> {

    @Column
    name: string;       //  e.g. Check the Oil Levels

    @Column
    type: string;       //  e.g. boolean / text

    @Column
    frequency: number;  //  e.g. 86400 (daily)

    @Column
    trigger: string;    //  e.g. time / devices

    @Column
    category: string;   //  e.g. maintainance / production / quality

    @Column
    condition: string;     //  e.g. {product: SKU00636} / {product: SKU00636, operator: techop}

    @HasMany(() => Result)
    results: Result[];
}