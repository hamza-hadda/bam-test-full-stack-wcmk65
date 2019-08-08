// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// Hamza HADDAA
// fonction qui compare deux entiers
function is_great(n1,n2){
  console.log(n1)
   console.log(n2)
  if(n1<=n2)
      return true;
  return false;
}
// c'est le fonction qui retourne true si le nombre est chaotique , sinon false
function is_chaotique(N){
  var i=1;
  while(N >= 10){
    var chiff2 = N%10
    var chiff1 =  Math.floor(N/10)%10
    if(is_great(chiff1,chiff2)){
      N= Math.floor(N/10);
    }
    else
      return false;
  }
  return true;
}

function solutionExercice1(N) {
    var res = "EXERCICE 1"
    //TAPE LE CODE DE L'EXERCICE 1 ICI!
    for(var res =N; res>=1; res--){
      if(is_chaotique(res))
      return res
    }
    
}

function search(N,L){
  for(var i=0; i< L.length; i++){
    if(L[i] == N){
      return true;
    }
  }
  return false;
}

function solutionExercice2(L) {
    var res = "EXERCICE 2"
    //TAPE LE CODE DE L'EXERCICE 2 ICI!
    for(var res=1;;res++){
        if(!search(res,L)){
          break;
        }
    }
    return res
}

function triFusion(tab) {
  var rep = [];
  var tabL = tab.length;
  if(tabL < 2) {
    return tab;
  } else {
    var q = Math.ceil(tabL / 2);
    var left = triFusion(tab.slice(0,q));
    console.log("left: " +left);
    var right = triFusion(tab.slice(q, tabL));
    return fusion(left, right); 
  }
}
 
function fusion(tabLeft, tabRight) {
  var ans = [];
  var tabLeftL = tabLeft.length;
  var tabRightL = tabRight.length;
  var cpteurL = 0;
  var cpteurR = 0;
 
  while((cpteurL < tabLeftL) && (cpteurR < tabRightL)) {
    if(tabLeft[cpteurL] > tabRight[cpteurR]) {
      ans.push(tabLeft[cpteurL]);
      cpteurL += 1;
 
    } else {
      ans.push(tabRight[cpteurR]);
      cpteurR +=1;
 
    }
  } 
  for(var i = cpteurL; i < tabLeftL; i++) {
    ans.push(tabLeft[i]);
  }
 
  for(var j = cpteurR; j < tabRightL; j++) {
    ans.push(tabRight[j]);
  }
 
  return ans;
}
 

function solutionExercice3(L) {
    var res = "EXERCICE 3"
    //TAPE LE CODE DE L'EXERCICE 3 ICI!
    L = triFusion(L)
    for(var i=0; i<L.length-1;i++){
      if(i==0){
        if(L[i]!=L[i+1]){
          return L[i]
        }
      }
      else if(L[i]!=L[i-1] && L[i+1]!=L[i]){
        return L[i];
      }
    }
    return L[L.length-1]
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')