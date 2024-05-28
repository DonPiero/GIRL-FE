export class UserEditProfileRequest{
  profilePicture: string;
  firstName: string;
  lastName: string;
  password: string;
  prefix: string;
  phoneNumber: string;
  country: string;
  city: string;
  constructor(data: any)
  {
    this.profilePicture = data.profilePicture;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.password = data.password;
    this.prefix = data.prefix;
    this.phoneNumber = data.phoneNumber;
    this.country = data.country;
    this.city = data.city;
  }
}
