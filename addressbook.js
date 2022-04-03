console.log("Welcome to address book program");
// UC1-Create Address book contact
class AddressBook{
    //properties
    firstName
    lastName;
    city;
    address;
    state;
    zip;
    mobnum;
    email;

    //Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.mobnum = params[6];
        this.email = params[7];
}
    //method
    toString() {
        return "firstName: "+this.firstName+","+"lastName: "+this.lastName+","+"city: "
        +this.city+","+"address: "+this.address+","+"state: "+this.state+","+"zip: "+this.zip
        +","+"mobnum: "+this.mobnum+","+"email: "+this.email;
    }
}
let addressbook = new AddressBook("varsha","sree","hyderabad","shankar nagar","telangana",500013,9946582187,"varshasree8@gmail.com")
console.log(addressbook.toString());