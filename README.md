# cognito-signup
Angular + Amazon Cognito Userpool Sign-in and Sign-up PART 1


Angular + Amazon Cognito Userpool Sign-in and Sign-up
This project includes following    
*	Configuration of AWS Cognito Userpool
*	Sign-in and Sing-up forms in angular integrated with Amazon Cognito Userpool
*	Using Amplify predefined authentication methods to communicate with Cognito Userpool.

Pre-requisites
*	Node.js
*	Angular cli
*	Aws account


*Note – At the end I have given the link to my GitHub project where you will get entire code for Angular app.

Let’s start with creating Cognito Userpool in AWS. Go to the search bar and type Cognito and select service. Click on Create user pool, on first step of configuration select Email as Sign in option.

![Step1](https://github.com/parthspacehunter/cognito-signup/blob/main/readmeimages/Step1.png)
 
On second step of configuration select the default password policy and select  MFA if you want to or select No MFA. You can read info here and select attributes according to your requirements.

![Step2](https://github.com/parthspacehunter/cognito-signup/blob/main/readmeimages/step2.png)


On step three of configuration don’t change any default selection. In required attributes configuration select the attributes that are needed for sign up. I have chosen name, please note that once selected they can’t be changed later.
 
![Step3](https://github.com/parthspacehunter/cognito-signup/blob/main/readmeimages/step3.png)

On step four you have to choose message delivery to you users i.e. the email service you are going to use to send email to the user, you can either select AWS SES (you need to configure it first) or Cognito email service for development which I have chosen for this demo project.
 
![Step4](https://github.com/parthspacehunter/cognito-signup/blob/main/readmeimages/step4.png)

On step five on configuration provide a user pool name. Don’t tick the Use Cognito hosted UI as we are going to use our own angular app for Sign on and Sign up. You can use the hosted UI if you don’t have any UI for Sign in and Sign up, you can customize the Cognito hosted UI by providing CSS file. For this project use Public client App by entering your App name it can be anything and don’t generate client secret.

![Step5](https://github.com/parthspacehunter/cognito-signup/blob/main/readmeimages/step5.png)
 
Last Step Review you Cognito Userpool Configuration and then click create user pool. Your Userpool is ready to use in your angular app for user authentication and sign up.

![Step6](https://github.com/parthspacehunter/cognito-signup/blob/main/readmeimages/step6.png)
 
Let’s create the application with the Angular base structure using the @angular/cli with the route file and the SCSS style format.

```shell
ng new cognito-signup --routing true --style scss
```

Now add your Cognito credentials to your environment.ts file so that it can be used by amplify for authentication and creating and authenticating users in Cognito Userpool. 

```java
cognito: {
    userPoolId: 'us-east-1_Zenw4BgsteG’,
    userPoolWebClientId: 'drlo0glk6viv04vbm98jsdfer4',
  }
```

userPoolId you will get after creating your userpool and then selecting it you can see the user pool id in the Userpool overview itself. userPoolWebClientid you will get by selecting the app which we created while configuring the Userpool under the App integration tab of you user pool.

Install Amplify into your angular project using the below command

```shell
npm install aws-amplify
```

Now generate a service in your angular app which will use amplify to communicate with your user pool service that you just created. You can use below command to generate a service in your services folder.

```shell
ng generate service cognito
```

Then you will have to use amplify in you service like below by importing amplify and AUTH from @aws-amplify. Configure Amplify using the Cognito credentials declared in the environment.ts file in the above step.

```java
import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';


constructor() {
    Amplify.configure({
      Auth: environment.cognito
    });
```

Change the src/polyfills.ts file. Add the global declaration as below. This configuration is required starting with Angular version 6

```shell
(window as any).global = window;
```
Now generate your Sign in and Sing Up components with below commands

```shell
ng generate component sign-up
ng generate component sign-in
```


This will generate ts and html files for you where we will implement the logic of user sign up and sign in using the cognito-service that we created. I won’t be giving the code here you can visit my GitHub repo and download the code for the same.

So far, we have got AWS Cognito Userpool, an angular app with Sign-in and Sign-up forms using amplify to connect with AWS Cognito.
In my next blog the part 2 I will use the same angular app to store some data in DynamoDB using a lambda. Where we will authenticate the user using the same Cognito User pool via AWS Api Gateway. Also, how to host angular app in S3 bucket and use Amazon Cloudfront to serev your web application.

You can find my angular project at my GitHub repo - 
