function groupController($scope){
  $scope.group = [];
  $scope.people = [];
  $scope.total = 0;


  $scope.addGroup = function () {
    $scope.group.push({
      name: "",
      price: 0,
      each: 0
    });
  };

  $scope.addPerson = function (){
    $scope.people.push({
      name: "",
      price: 0,
      groups: []
    });
  };

  $scope.removeGroup = function(index){
    $scope.group.splice(index,1);
    $scope.calculate();
  };

  $scope.removePerson = function(index){
    $scope.people.splice(index,1);
    $scope.calculate();
  };

  $scope.addGroup();
  $scope.addPerson();

  $scope.calculate = function(){
    var i=0;
    var group = $scope.group;
    var people = $scope.people;
    $scope.total = 0;
    for(var kg in group){
      var tmp = 0;
      for(var kp in people){
        if (people[kp].groups[i] === true){
          console.log(tmp);
          tmp++;
        }
      }
      group[kg].each = group[kg].price / tmp;
      $scope.total+=group[kg].price;
      console.log(group[kg].each);
      i++;
    }

    for(var kp1 in people){
      var groups = people[kp1].groups;
      people[kp1].price = 0;
      for(var k in groups){
        if (groups[k] === true){
          people[kp1].price += group[k].each;
        }
      }
    }
  };
}
