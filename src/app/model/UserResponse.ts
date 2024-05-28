export class UserResponse{
  profilePicture: string;
  firstName: string;
  lastName: string;
  rank: string;
  prefix: string;
  ongoingExp: number;
  completedExp: number;
  phoneNumber: string;
  country: string;
  city: string;
  email: string;
  constructor(data: any)
  {
    this.profilePicture = data.profilePicture;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.rank = data.rank;
    this.ongoingExp = data.ongoingExp;
    this.completedExp = data.completedExp;
    this.email = data.email;
    this.prefix = data.prefix;
    this.phoneNumber = data.phoneNumber;
    this.country = data.country;
    this.city = data.city;
  }
}
