export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website: string;
    company: UserCompany;
}

export class UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: AddressGeo;
}

export class AddressGeo {
    lat: number;
    lng: number;
}

export class UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

