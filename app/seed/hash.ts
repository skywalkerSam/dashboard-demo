// db population.)

import bcrypt from "bcrypt";

const p: string = "";
const h: string = "";

const hashedPassword: string = await bcrypt.hash(p, 10);

// console.log(typeof hashedPassword);
console.log(hashedPassword);

const c: boolean = await bcrypt.compare(p, h);

// console.log(typeof c)
console.log(c);

// insert into users(name,email,password) values('','','');
