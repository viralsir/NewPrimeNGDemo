import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../Model/topic';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topicList: Array<Topic> = [];

  constructor(private httpclient :HttpClient) {

  }



  getAllTopics(): Observable<Topic[]>
  {
     return this.httpclient.get<Topic[]>("http://localhost:9090/topics");

  }

  saveTopic(topic:Topic): void
  {
       this.httpclient.post("http://localhost:9090/topics",topic).subscribe((result:any)=>{
       });
  }





}
