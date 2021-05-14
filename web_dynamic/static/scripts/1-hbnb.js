// Input checkbox tuning
const adict = {};
const alist = [];
$('.amenities-list').change(function (event) {
  const IDofamen = this.getattribute('data-id');
  const Nameofamen = this.getattribute('data-name');

  if (event.target.checked) {
    adict[IDofamen] = Nameofamen;
    alist.push(Nameofamen);
  } else {
    delete adict[IDofamen];
    alist.splice(alist.indexOf(Nameofamen), 1);
  }
  $('.amenities h4').text(alist);
});
