function mySearch() {
  var box = document.getElementById("sear");

  switch (box.value) {
    case 'Hilary Clinton':
      window.open("http://www.google.com",'_blank','resizable=yes')
    case 'Women and Children':
      window.open("http://www.apple.com",'_blank','resizable=yes')
    default :
      return;
  }

  if (box.value == 'Hilary Clinton') {
    window.open("http://www.google.com",'_blank','resizable=yes')
  }
}

function OpenPersonalPage() {
  window.open("ElecBoardPerson.html",'_blank','resizable=yes')
}

function mySignUp(){
  alert('Coming Soon !');
}

function myLogin(){
  alert('Coming Soon !');
}
