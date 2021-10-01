const faders = document.querySelectorAll('.animate__fadeIn')


function workPlace(evt, industryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(industryName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target)
      }
    });
  }, appearOptions)

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });