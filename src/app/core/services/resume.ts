import {Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeData } from '../models/resume-data';

@Injectable({
    /*Singletone */
    providedIn: 'root'
}) 
export class ResumeService{
    /*Dependensy injection*/
    private http = inject(HttpClient);
    /*Path to json */
    private readonly dataUrl = '/assets/data/resume.json';

    getResumeData(): Observable<ResumeData> {
        /*Typifise obdervable by interface */
        return this.http.get<ResumeData>(this.dataUrl);
    }
}