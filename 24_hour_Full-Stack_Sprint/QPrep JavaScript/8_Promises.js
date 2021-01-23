function getLastNames(firstName, people) {

var arre=new Array();

return new Promise(function (Resolve, Reject) {
      for (let i = 0; i < people.length; i++) {
          if (people.find(()=>people[i].firstName == firstName) ) {  
              arre[i]=people[i].lastName;
              Resolve(arre.sort());     
          }

              Reject("Invalid");
              
      }
      
  });


}


module.exports = getLastNames;
