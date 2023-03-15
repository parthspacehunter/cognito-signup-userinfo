import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/userInfo.component';
import { LambdaService } from '../services/lambda.service';
import { CognitoService, IUser } from '../services/cognito.service';
import { DynamoDbRequest } from '../models/userInfo.component';
@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  loading: boolean;
  userInfo: UserInfo;
  accessToken:string;
  user:IUser;

  constructor(private lamdaService: LambdaService,private cognitoService: CognitoService) {
    this.loading = false;
    this.userInfo = {} as UserInfo;
    this.accessToken = '';
    this.user = {} as IUser;
  }
  ngOnInit(): void {
    // this.cognitoService.getAuthToken().then((data:any) => { this.accessToken = data.getAccessToken().getJwtToken() });
    this.cognitoService.getAuthToken().then((data:any) => { this.accessToken = data.getIdToken().getJwtToken() });

    this.cognitoService.getUser()
    .then((user: any) => {
      this.user = user.attributes;
    });
  }

  submit(){
    this.loading = true;
    let request:any = {};
    console.log(this.userInfo)
    this.userInfo.name = this.user.name;
    this.userInfo.userId = this.user.sub;
    let hobbies = [];
    if(this.userInfo.hobbies.length > 0){
      for(let hobby of this.userInfo.hobbies){
        hobbies.push(hobby.value);
      }
      this.userInfo.hobbies = hobbies;
    }
    let dynamoBdRequest:DynamoDbRequest = new DynamoDbRequest();
    dynamoBdRequest.Item = this.userInfo;
    dynamoBdRequest.TableName = "UserInfo";
    request['body'] = dynamoBdRequest;
    request['httpMethod'] = 'POST';
    this.lamdaService.saveUserInfo(request,this.accessToken).subscribe((data:any) => {
      this.loading = false;
      console.log(data)
    });
    
  }



}
