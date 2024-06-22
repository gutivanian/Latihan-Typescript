type Primitive = string | number | boolean;
const value: Exclude<Primitive,string>  = true;
// string tidak lagi dapat digunakan karena telah dibuang dary type