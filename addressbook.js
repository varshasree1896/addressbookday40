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


getfirstName()
{ 
    return this._firstName
}

setfirstName(firstName) 
{
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
    if(nameRegex.test(firstName))
        this._firstName = firstName;
    else throw "Incorrect First Name";
}
getlastName()
{ return this._lastName}
setlastName(lastName)
{
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
    if(nameRegex.test(lastName))
        this._lastName = lastName
    else throw "Incorrect Last Name"
}
getaddress()
{ return this._address}
setaddress(address)
{
    let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
    if(regex.test(address))
        this._address = address
    else throw "Incorrect Address"
}
getcity()
 { return this._city}
setcity(city)
{
    let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
    if(regex.test(city))
        this._city = city
    else throw "Incorrect City"
}
getstate()
{ return this._state}
setstate(state)
{
    let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
    if(regex.test(state))
        this._state = state
    else throw "Incorrect State"
}
getzip()
{ return this._zip}
setzip(zip)
{

    let pinRegex = RegExp('^[0-9]{3}[\\s]{0,1}[0-9]{3}$')
    if( pinRegex.test(zip)){

        this._zip = zip
    }
    else throw "Incorrect Zip"
}
getphoneNo()
{ return this._phoneNo}
setphoneNo(phoneNo)
{
    let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
    if(regex.test(phoneNo))
        this._phoneNo = phoneNo
    else throw "Incorrect Phone Number"
}
getemail()
{ return this._email}
setemail(email)
{
    let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
    if(regex.test(email))
        this._email = email
    else throw "Incorrect Email"
}

}

try{
let addressbook = new AddressBook("varsha","sree","shankarnager","hyderabad","telangana",500013,9946582187,"varshasree8@gmail.com")
console.log(addressbook.toString());
}
catch(e){
console.log(e)
}