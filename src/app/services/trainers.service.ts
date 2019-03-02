import { Injectable } from '@angular/core';
import { AbstractApiService } from './abstract-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_FETCHTRAINERS = '/api/admin/trainer/list';
const API_FETCHTRAINER = '/api/admin/trainer/';
const API_UPDATETRAINER = '/api/admin/trainer/update';
const API_CREATETRAINER = '/api/admin/trainer/create';
// const API_DELETETRAINER = '/api/admin/trainer/delete';

export interface ITrainer {
  access: string;
  area: string;
  belonging: string;
  comment: string;
  fee: string;
  hobby: string;
  imagePath: string;
  introduction: string;
  reason: string;
  salesPoint: string;
  trainerId: number;
  trainerName: string;
  trainerNameEn: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrainersService extends AbstractApiService {

  constructor(
    public http: HttpClient
  ) {
    super(http);
  }

  fetchTrainers(): Observable<ITrainer[]> {
    return this.fetch(API_FETCHTRAINERS);
  }

  fetchTrainer(id: number): Observable<ITrainer> {
    return this.fetch(API_FETCHTRAINER);
  }

  updateTrainer(param: ITrainer): Observable<ITrainer> {
    return this.post(API_UPDATETRAINER, param);
  }

  createTrainer(param: ITrainer): Observable<ITrainer> {
    return this.post(API_CREATETRAINER, param);
  }

  // deleteTrainers(ids: number[]): Observable<any> {
  //   return this.delete(API_DELETETRAINER, ids);
  // }
}
