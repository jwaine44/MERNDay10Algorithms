/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  
  const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
  /* expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ]; */
  
  // This object contains inherited key value pairs from the above proto obj.
  const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });
  
  
  
  
  /* expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];*/
  
  /**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */

// check if certain key exists. -- hasOwnProperty
// console.log(pet.hasOwnProperty("eyecolor"))

// const proto = { eyecolor: "green", keyOnProto: "val from proto" };

// const petWithProto = Object.assign(Object.create(proto), pet);

// console.log(pet.hasOwnProperty("eyecolor"))


// // get all the keys and make it an array -- Object.keys
// console.log(Object.keys(petWithProto))

// // get all the values and make it an array -- Object.values
// console.log(Object.values(petWithProto))

// // Object.entries [ [key1, val2], [key2, val2]]
// console.log(Object.entries(petWithProto))

// // loop through an object (for ...in)
// for(const eachKey in petWithProto){
//   console.log(`${eachKey} : ${petWithProto[eachKey]}` )
// }

function entries(obj){
    let expected = [];
    for(const key in obj){
        expected.push([key, obj[key]])
        }
    return expected
    }

    console.log(entries(obj1));
    console.log(entries(obj2));