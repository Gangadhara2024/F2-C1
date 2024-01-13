let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((dev) => {
    if (dev.profession === "developer") {
      console.log("employees with map:", dev);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((dev) => {
    if (dev.profession === "developer") {
      console.log("employees with forEach:", dev);
    }
  });
}

function addData() {
  let data4 = {id:4,name:"susan",age:"20",profession:"intern"};
  console.log("addData", arr.concat(data4));
   
}

function removeAdmin() {
  arr.filter((dev) =>{
    if(dev.profession !== "admin"){
      console.log("admin removel", dev);
    }
  })
}

function concatenateArray() {
  let arr1 = [
    { id: 4, name: "opps", age: "22", profession: "sde" },
    { id: 5, name: "jackin", age: "24", profession: "developer" },
    { id: 6, name: "karesh", age: "28", profession: "devops" },
  ];

  let concatingArr = arr.concat(arr1);
  console.log("concatinating array" ,concatingArr);
}
