

function select() {

  var type = document.getElementById('type').value;
  var inputs = document.getElementsByClassName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.display = 'none';
  }

  var termsSubmit = document.getElementById('terms-submit');
  termsSubmit.style.display = type === 'choose' ? 'none' : 'block';

  if (type !== 'choose') {
    document.getElementById(type).style.display = 'block';
  }
}

function submit() {

  var type = document.getElementById('type').value;

  var paragraphs = [];

  if (type === 'ticket-for-travel') {

    var firstName = document.getElementById('first-name-ticket').value;
    var middleInitial = document.getElementById('middle-initial-ticket').value;
    var lastName = document.getElementById('last-name-ticket').value;
    var fullName = lastName.toLowerCase() + ' ' + firstName.toLowerCase() + ' ' + middleInitial.toUpperCase();
    var destination = document.getElementById('destination').value;

    paragraphs = [
      'Hello and God bless.',
      'How bout those saints, huh? But I digress. End small talk here.',
      'Name ' + fullName + '. Ticket ' + destination.toLowerCase().replace(',','') + ' round trip. That’s a lovely blouse sir or ma’am or however you might identify. Name ' + fullName + ' Looks like it may snow. What you think about that topic sir or ma’am or however you might identify? Value opinion others.'
    ];

  } else if (type === 'get-job-short') {

    var company = document.getElementById('company-job-short').value;
    var companyPerson = document.getElementById('company-person').value;
    var jobPosition = document.getElementById('job-position').value;

    paragraphs = [
      'Dear ' + companyPerson,
      'I’m so horny I could fuck the gap in my employment history. But seriously folks. I was excited to see your advertisement for ' + jobPosition + ' at ' + company + '.'
    ];

  } else if (type === 'get-job-long') {

    var firstName = document.getElementById('first-name-job').value;
    var middleInitial = document.getElementById('middle-initial-job').value;
    var lastName = document.getElementById('last-name-job').value;
    fullName = lastName+ ', ' + firstName + ' ' + middleInitial + '.';
    var company = document.getElementById('company-job-long').value;

    paragraphs = [
      'Mrs. Gert Himmelfarb<br>C/o the ' + company + '<br>1223 Walla Walla Washington',
      'Dear sir or sirs,',
      'But I digress. I was very pleased to see the advertisement for chief risk officer at your esteemed company. Good fit I thinks I am. Name ' + fullName + ' Like to start with a quote. “Life is what happens when you are busy making other plans.” - Wyatt Earp. End intro.',
      'The esteemed Cornhole university with BS and MA in psychologist from esteemed Harvard law academy. Much learn. ' + fullName + ' Is name, risk management is game. Punctilious, detail oriented and meticulous individual who hates redundancy and imperfection in all flaccid of life and work.',
      'Great leader. Enjoy reading, getting baked at theaters and write play and rubbing one out. Name ' + fullName.replace(',','') + ' Do you use quantitative method at ' + company + '? I can help with transition you stupid fucking asshole cunt.',
      'End with a joke. Knock knock! Who’s there? Yogurt. Yogurt who? Yo-Gert, it’s me ' + firstName + '.',
      'Would love the opportunity to further discuss my qualifications.',
      'Kind regards,<br>Name ' + fullName.replace(',','')
    ];

  } else if (type === 'quit-job') {

    paragraphs = [
      'Fuck you. Job bad. Need like hole in head. Do better I.'
    ]
  } else if (type === 'best-man') {

    var bride = document.getElementById('bride').value;
    var groom = document.getElementById('groom').value;

    paragraphs = [
      groom + ' meet ' + bride + '. Love first site. Prior ' + bride + ', ' + groom + ' dip wick many unsavory female. There this one time, oh ' + groom.toLowerCase() + ' blush so I digress. But seriously folks, ' + bride + ' make ' + groom.toLowerCase()  + ' more happy ever see. She part of family. To ' + bride + ' and ' + groom.toLowerCase() + '. Here here!'
    ]
  }

  buildLetter(paragraphs);
}

function buildLetter(paragraphs) {

  var letterEl = document.getElementById('letter');

  while (letterEl.hasChildNodes()) {
    letterEl.removeChild(letterEl.lastChild);
  }

  for (var i = 0; i < paragraphs.length; i++) {
    var p = document.createElement('p');
    p.innerHTML = paragraphs[i];
    letterEl.appendChild(p);
  }
}
