export class Form {
  constructor(
    public firstName:string, 
    public lastName:string,
    public dateOfBirth: string,
    public framework: string,
    public frameworkVersion: string,
    public email: string,
    public hobby: Hobby[]){

    }

}

export class Hobby {
  constructor( public name:string, public duration: string) {

  }
}