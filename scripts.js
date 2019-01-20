function submit() {

  var firstName = document.getElementById('first-name').value;
  var middleInitial = document.getElementById('middle-initial').value;
  var lastName = document.getElementById('last-name').value;
  var type = document.getElementById('type').value;

  var paragraphs = [];

  if (type === 'travel-ticket') {

    var fullName = lastName.toLowerCase() + ' ' + firstName.toLowerCase() + ' ' + middleInitial.toUpperCase();

    paragraphs = [
      'Hello and God bless.',
      'How bout those saints, huh? But I digress. End small talk here.',
      'Name ' + fullName + '. Ticket new hope round trip. That’s a lovely blouse sir or ma’am or however you might identify. Name ' + fullName + ' Looks like it may snow. What you think about that topic sir or ma’am or however you might identify? Value opinion others.'
    ];
  } else if (type === 'job-short') {

    paragraphs = [
      'Dear Mr. Smith',
      'I’m so horny I could fuck the gap in my employment history. But seriously folks. I was excited to see your advertisement for senior Vice President of marketing at ACME industries.'
    ];
  } else if (type === 'quit-job') {

    paragraphs = [
      'Fuck you. Job bad. Need like hole in head. Do better I.'
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
    var t = document.createTextNode(paragraphs[i]);
    p.appendChild(t);
    letterEl.appendChild(p);
  }
}
