'use strict';

describe('Controller: GroupCtrl', function() {
  // load the controller's module
  beforeEach( module('simpleGroupsApp') );

  var GroupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupCtrl = $controller('GroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a student', function () {
    expect( scope.students ).toBeDefined();
  });

  // it('should have a student name', function(){
  //   var name = 'Miles R';
  //   expect( scope.student.name ).toBeDefined();
  //   expect( scope.student.nameHash ).toBeDefined();
  //   expect( scope.student.name ).toBe( name );
  //   expect( scope.student.nameHash ).toBe( name.toLowerCase().replace( /\s/g, '' ) );
  // });
  //
  // it('should have a student groupID', function(){
  //   var groupID = 100;
  //   expect( scope.student.groupID ).toBeDefined();
  //   expect( scope.student.groupID ).toBe( groupID );
  // });
  //
  // it('should have a student avoids list', function(){
  //   expect( scope.student.avoids ).toBeDefined();
  //   expect( scope.student.avoids.length ).toBeGreaterThan( 0 );
  // });

  it('should have a groupSize that is 4', function(){
    expect( scope.groupSize ).toBeDefined();
    expect( scope.groupSize ).toBe( 4 );
  });
});
