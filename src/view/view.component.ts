import {Component, inject} from '@angular/core';
import {TopicService} from '../Service/topic.service';
import {TableModule} from 'primeng/table';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {Topic} from '../Model/topic';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-view',
  imports: [
    TableModule,
    IconField,
    InputIcon,
    Button
  ],
  templateUrl: './view.component.html',
  standalone: true,
  styleUrl: './view.component.css'
})
export class ViewComponent {

  topiclist:Array<Topic>=[];

  topicservice:TopicService=inject(TopicService);



  loaddata() {

    this.topicservice.getAllTopics().subscribe(result=>{
         this.topiclist=result;
    })

  }
}
