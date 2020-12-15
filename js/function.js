function jumlahVolumeDuaKubus(a,b){
  var volA, volB, total;

  volA = a * a * a;
  volB = b * b * b;

  total = volA + volB ;

  return total;
}

alert(jumlahVolumeDuaKubus(3,5));
