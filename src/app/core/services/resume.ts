import {Injectable, inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResumeData } from '../models/resume-data';

@Injectable({
    /*Singletone */
    providedIn: 'root'
}) 
export class ResumeService{
    /*Dependensy injection*/
    private http = inject(HttpClient);
    
    /*Path to json */
    private readonly dataUrl = '/resume.json';

    /*Private signal for data - change only by service*/
    private resumeState = signal<ResumeData | null>(null);

    /*public signal for read only - component can only watch*/
    public readonly resumeData = this.resumeState.asReadonly();

    //signal for indicator downloading
    public readonly isLoading = signal<boolean>(false);

    // downloading method
    public loadResumeData(): void{
        //if data is already has
        if(this.resumeState() !== null){
            return;
        }

        this.isLoading.set(true);

        this.http.get<ResumeData>(this.dataUrl).subscribe({
            next: (data) => {
                this.resumeState.set(data); //save data to cash
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Downloading error: ', err);
                this.isLoading.set(false);
            }
        });
    }
}