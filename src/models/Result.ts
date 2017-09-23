import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey } from 'sequelize-typescript';
import Job from './Job';

@Table
export default class Result extends Model<Result> {
    @Column
    value: string;

    @Column
    downTime: string;

    @ForeignKey(() => Job)
    @Column
    jobId: number;

    @BelongsTo(() => Job)
    job: Job;
}

