var currentPage = 0;

function select() {

  clearLetter();
  var type = document.getElementById('type').value;
  hideInputs();
  document.getElementById('terms-submit').style.display = type === 'choose' ? 'none' : 'block';

  if (type !== 'choose') {
    var infoEl = document.getElementById(type);

    if (infoEl !== null) {
      infoEl.style.display = 'block';
    }
  }
}

function hideInputs() {
  var inputs = document.getElementsByClassName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.display = 'none';
  }
}

function newLetter() {
  currentPage = 0;
  clearLetter();
  hideInputs();
  document.getElementById('terms-submit').style.display = 'none';
  document.getElementById('type').value = 'choose';
  document.getElementById('page-turn').style.display = 'none';
  window.scroll(0, 0);
}

function clearLetter() {

  var letterEl = document.getElementById('letterContent');

  while (letterEl.hasChildNodes()) {
    letterEl.removeChild(letterEl.lastChild);
  }
}

function scrollLetterIntoView() {
  var header = document.getElementById('header').clientHeight;
  var intro = document.getElementById('intro').clientHeight;
  var info = document.getElementById('info').clientHeight;
  window.scroll(0, 100 + header + intro + info);
}

function positionPencil() {
  var header = document.getElementById('header').clientHeight;
  var intro = document.getElementById('intro').clientHeight;
  var info = document.getElementById('info').clientHeight;
  document.getElementById('pencil').style.top = header + intro + info + 250 + 'px';
}

function submit() {
  var letterEl = document.getElementById('letterContent');
  letterEl.style.visibility = 'hidden';
  var pencilEl = document.getElementById('pencil');
  pencilEl.style.visibility = 'visible';
  positionPencil();
  currentPage = 0;
  buildLetter(document.getElementById('type').value, 0);
  updatePageTurnOpacity();
  scrollLetterIntoView();

  setTimeout(function(){
    pencilEl.style.visibility = 'hidden';
    letterEl.style.visibility = 'visible';
  }, 2000);

}

function buildLetter(type, pageIndex) {

  clearLetter();
  var pages = getLetterPages(type);
  var paragraphs = pages[pageIndex];

  var letterEl = document.getElementById('letterContent');

  for (var i = 0; i < paragraphs.length; i++) {
    var p = document.createElement('p');
    p.innerHTML = paragraphs[i];
    letterEl.appendChild(p);
  }
}

function previousPage() {

  currentPage = currentPage <= 0 ? 0 : currentPage - 1;
  buildLetter(document.getElementById('type').value, currentPage);
  updatePageTurnOpacity();
  scrollLetterIntoView();
}

function nextPage() {
  var type = document.getElementById('type').value;
  var pages = getLetterPages(type);
  currentPage = currentPage >= pages.length - 1 ? currentPage : currentPage + 1;
  buildLetter(type, currentPage);
  updatePageTurnOpacity();
  scrollLetterIntoView();
}

function updatePageTurnOpacity() {

  var pages = getLetterPages(document.getElementById('type').value);

  if (pages.length <= 1) {
    document.getElementById('page-turn').style.display = 'none';
  } else {
    document.getElementById('page-turn').style.display = 'block';

    var prevEl = document.getElementById('page-previous');
    var nextEl = document.getElementById('page-next');

    if (currentPage === 0) {
      prevEl.classList.add('disabled');
      nextEl.classList.remove('disabled');
    } else {
      prevEl.classList.remove('disabled');

      if (currentPage >= pages.length - 1) {
        nextEl.classList.add('disabled');
      } else {
        nextEl.classList.remove('disabled');
      }
    }
  }
}

function getLetterPages(type) {

  var pages = [];

  if (type === 'ticket-for-travel') {

    var firstName = document.getElementById('first-name-ticket').value;
    var middleInitial = document.getElementById('middle-initial-ticket').value;
    var lastName = document.getElementById('last-name-ticket').value;
    var fullName = lastName.toLowerCase() + ' ' + firstName.toLowerCase() + ' ' + middleInitial.toUpperCase();
    var destination = document.getElementById('destination').value;

    pages = paginate([
      'Hello and God bless.',
      'How bout those saints, huh? But I digress. End small talk here.',
      'Name ' + fullName + '. Ticket ' + destination.toLowerCase().replace(',','') + ' round trip. That’s a lovely blouse sir or ma’am or however you might identify. Name ' + fullName + ' Looks like it may snow. What you think about that topic sir or ma’am or however you might identify? Value opinion others.'
    ]);

  } else if (type === 'get-job-short') {

    var company = document.getElementById('company-job-short').value;
    var companyPerson = document.getElementById('company-person').value;
    var jobPosition = document.getElementById('job-position').value;

    pages = paginate([
      'Dear ' + companyPerson,
      'I’m so horny I could fuck the gap in my employment history. But seriously folks. I was excited to see your advertisement for ' + jobPosition + ' at ' + company + '.'
    ]);

  } else if (type === 'get-job-long') {

    var firstName = document.getElementById('first-name-job').value;
    var middleInitial = document.getElementById('middle-initial-job').value;
    var lastName = document.getElementById('last-name-job').value;
    fullName = lastName+ ', ' + firstName + ' ' + middleInitial + '.';
    var company = document.getElementById('company-job-long').value;

    pages = paginate([
      'Mrs. Gert Himmelfarb<br>C/o the ' + company + '<br>1223 Walla Walla Washington',
      'Dear sir or sirs,',
      'But I digress. I was very pleased to see the advertisement for chief risk officer at your esteemed company. Good fit I thinks I am. Name ' + fullName + ' Like to start with a quote. “Life is what happens when you are busy making other plans.” - Wyatt Earp. End intro.',
      'The esteemed Cornhole university with BS and MA in psychologist from esteemed Harvard law academy. Much learn. ',
      fullName + ' Is name, risk management is game. Punctilious, detail oriented and meticulous individual who hates redundancy and imperfection in all flaccid of life and work.',
      'Great leader. Enjoy reading, getting baked at theaters and write play and rubbing one out. Name ' + fullName.replace(',','') + ' Do you use quantitative method at ' + company + '? I can help with transition you stupid fucking asshole cunt.',
      'End with a joke. Knock knock! Who’s there? Yogurt. Yogurt who? Yo-Gert, it’s me ' + firstName + '.',
      'Would love the opportunity to further discuss my qualifications.',
      'Kind regards,<br>Name ' + fullName.replace(',','')
    ]);

  } else if (type === 'quit-job') {

    pages = paginate([
      'Fuck you. Job bad. Need like hole in head. Do better I.'
    ]);

  } else if (type === 'best-man') {

    var bride = document.getElementById('bride').value;
    var groom = document.getElementById('groom').value;

    pages = paginate([
      groom + ' meet ' + bride + '. Love first site. Prior ' + bride + ', ' + groom + ' dip wick many unsavory female. There this one time, oh ' + groom.toLowerCase() + ' blush so I digress. But seriously folks, ' + bride + ' make ' + groom.toLowerCase()  + ' more happy ever see. She part of family. To ' + bride + ' and ' + groom.toLowerCase() + '. Here here!'
    ]);
  }

  return pages;
}

function paginate(paragraphs) {

  var letterEl = document.getElementById('letter');
  var contentEl = document.getElementById('paginationTest');
  var maxHeight = letterEl.clientHeight * 0.8;

  var doParagraphsFit = function(ps) {

    for (var i = 0; i < ps.length; i++) {
      var p = document.createElement('p');
      p.innerHTML = ps[i];
      contentEl.appendChild(p);
    }

    var fits = contentEl.clientHeight < maxHeight;

    while (contentEl.hasChildNodes()) {
      contentEl.removeChild(contentEl.lastChild);
    }

    return fits;
  };

  var getIndexOfPageBreak = function(ps) {

    while (!doParagraphsFit(ps)) {
      var lastIndex = ps[ps.length-1].lastIndexOf(" ");
      ps[ps.length-1] = ps[ps.length-1].substring(0, lastIndex);
    }

    return ps[ps.length-1].length;
  };

  var pages = [];
  var page = [];

  for (var i = 0; i < paragraphs.length; i++) {

    page.push(paragraphs[i]);

    if (!doParagraphsFit(page)) {
      var pageBreakIndex = getIndexOfPageBreak(page.slice());
      var pBeforeBreak = paragraphs[i].slice(0, pageBreakIndex);
      var pAfterBreak = paragraphs[i].slice(pageBreakIndex);
      page.pop();
      page.push(pBeforeBreak);
      pages.push(page.slice());
      page = [];
      paragraphs[i] = pAfterBreak;
      i--;
    } else if (i === paragraphs.length - 1) {
      pages.push(page.slice());
    }
  }

  return pages;
}
