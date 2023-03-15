import { Component, OnInit } from '@angular/core';

import { IUser, CognitoService } from '../services/cognito.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;
  accessToken:string;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
    this.accessToken = '';
  }

  public ngOnInit(): void {
    this.cognitoService.getAuthToken().then((data:any) => { this.accessToken = data.getAccessToken().getJwtToken() });
    this.cognitoService.getUser()
    .then((user: any) => {
      this.user = user.attributes;
    });
  }

  public update(): void {
    this.loading = true;

    this.cognitoService.updateUser(this.user)
    .then(() => {
      this.loading = false;
    }).catch(() => {
      this.loading = false;
    });
  }

}
