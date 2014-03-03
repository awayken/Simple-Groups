'use strict';

var simpleGroupApp = angular.module('simpleGroups', [
    'groupControllers'
]);

/*

var drawButton = $('#draw'),
    groupsSection = $('#groups');

function displayGroups( groups ) {
  var html,
      group,
      groupNumber = 0,
      name;
  
  html = '<ul>';
  for ( var i in groups ) {
    group = groups[ i ];
    groupNumber = parseInt( i, 10 ) + 1;
    html += '<li>Group ' + String( groupNumber );
    html += '<ul>';
    for ( var j in group ) {
      name = group[ j ];
      html += '<li>' + name + '</li>';
    }
    html += '</ul>';
    html += '</li>';
  }
  
  html += '</ul>';
  
  groupsSection.html( html );
}

drawButton.on('click', function( ev ) {
  var names = [],
      groupNumber = $('#group_number'),
      averageGroupSize = 0,
      groups = [],
      group = [],
      randomInt = 0,
      i = 0,
      j = 0;
  
  ev.preventDefault();
  
  names = $('#names').val().split('\n');
  groupNumber = groupNumber.val();
  averageGroupSize = Math.floor( names.length / groupNumber );
  averageGroupSizeLeft = names.length % groupNumber;
  
  console.log( names );
  
  for ( i = 0; i < groupNumber; i++ ) {
    group = [];
    
    if ( i === ( groupNumber - 1 ) ) {
      averageGroupSize += averageGroupSizeLeft;
    }
    
    for ( j = 0; j < averageGroupSize; j++ ) {
      randomInt = Math.floor( Math.random() * names.length );
      group.push( names.splice( randomInt, 1 ) );
    }
    
    groups.push( group );
  }
  
  displayGroups( groups );
});


*/
