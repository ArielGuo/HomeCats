function mySearch() {
  var box = document.getElementById("sear");

  switch (box.value) {
    case 'Hillary Clinton':
      window.open("Search_Result_Hillary.htm",'_blank','resizable=yes')
    case 'Women and Children':
      window.open("Search_Result_News.htm",'_blank','resizable=yes')
    default :
      return;
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
