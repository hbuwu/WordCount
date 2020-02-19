var quill = new Quill('#editor', {
  theme: 'snow'
});

let length = 21;
let picture = document.querySelector(".pic");
let para = document.querySelector(".changeText");

quill.on('text-change', function(delta, oldDelta, source) {
  length = quill.getLength() - 1;

  console.log(length);

  if (length >= 0 && length <= 19) {
    picture.style.backgroundImage = "url('src/1.png')";
    para.innerHTML = "Kind prenten boek - 500 tot 1000 woorden";
  }
  else if (length >= 20 && length <= 39) {
    picture.style.backgroundImage = "url('src/2.png')";
    para.innerHTML = "Opstel - 1500 tot 6000 woorden";
  }

  else if (length >= 40 && length <= 59) {
    picture.style.backgroundImage = "url('src/3.png')";
    para.innerHTML = "Hamlet - Ongeveer 30557 woorden";
  }

  else if (length >= 60 && length <= 79) {
    picture.style.backgroundImage = "url('src/4.png')";
    para.innerHTML = "Harry Potter en de vuurbeker - Ongeveer 190637 woorden";
  }

  else if (length >= 80 && length <= 99) {
    picture.style.backgroundImage = "url('src/5.png')";
    para.innerHTML = "De Bijbel - Gemiddeld ongeveer 783137 woorden";
  }

  else if (length >= 100) {
    picture.style.backgroundImage = "url('src/6.png')";
    para.innerHTML = "Encyclopædia Britannica - Ongeveer 44 miljoen woorden";
  }

  if (length >= 120) {
    quill.deleteText(120, quill.getLength());
  }
});
 

