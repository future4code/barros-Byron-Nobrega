enum Role{
    user="user",
    admin="admin"
}

type Users = {
    name:string,
    email:string,
    role:Role

}

const listUser:Array<Users> =  [
	{name: "Rogério", email: "roger@email.com", role: Role.user},
	{name: "Ademir", email: "ademir@email.com", role: Role.admin},
	{name: "Aline", email: "aline@email.com", role: Role.user},
	{name: "Jéssica", email: "jessica@email.com", role: Role.user},  
	{name: "Adilson", email: "adilson@email.com", role: Role.user},  
	{name: "Carina", email: "carina@email.com", role: Role.admin}      
] 

function emails(arr:Array<Users>):string[] {
    const listEmail = arr.filter((item)=> item.role ==="admin").map((item)=>item.email)
    return listEmail
}

console.log(emails(listUser));
