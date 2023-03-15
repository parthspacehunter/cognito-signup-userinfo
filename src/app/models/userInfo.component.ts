export class UserInfo {
    age:string;
    favoritePlayer:string;
    hobbies:any[];
    favoriteSport:string;
    userId:string;
    name:string;
    
    constructor(){
        this.age = '';
        this.favoritePlayer = '';
        this.hobbies = [];
        this.favoriteSport = '';
        this.userId = '';
        this.name = '';
    }
}

export class DynamoDbRequest {
    Item:UserInfo;
    TableName:string
    
    constructor(){
       this.Item = new UserInfo();
       this.TableName = '';
    }
}