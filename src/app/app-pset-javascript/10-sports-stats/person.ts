export class Person {
  public firstname = '';
  public lastname = '';
  public state = '';
  public discipline = '';
  public birthday: Date;

  constructor(firstname: string, lastname: string, state: string,
              category: string, birthday: Date) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.state = state;
    this.discipline = category;
    this.birthday = birthday;
  }
}
