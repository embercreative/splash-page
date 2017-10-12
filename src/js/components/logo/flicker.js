module.exports = () => {
  var ember = document.getElementById('ember');
  var creativeagency = document.getElementById('creativeagency');

  var styles = {};

  styles.hide = { opacity: 0 };
  styles.show = { opacity: 0.6 };

  var count = 0;

  setInterval(function() {

    count++;

    if(count > 100) {
      count = 0;
    }

    // ember hide/show
    if (count === 3 || count === 6) {
      ember.style.opacity = styles.hide.opacity;
      ember.style.marginLeft = 0;
      creativeagency.style.fontStyle = 'initial';
      ember.style.fontStyle = 'initial';
    }
    if (count === 5 || count === 9) {
      ember.style.opacity = styles.show.opacity;
      ember.style.marginLeft = '-20px';
      creativeagency.style.marginLeft = '-40px';
      creativeagency.style.fontStyle = 'italic';
      ember.style.fontStyle = 'italic';
    }
    if (count === 12) {
      ember.style.marginLeft = 0;
      ember.style.fontStyle = 'initial';
    }

    // creativeagency hide/show
    if (count === 9) { creativeagency.style.marginLeft = '20px'; }
    if (count === 12) { creativeagency.style.marginLeft = '-20px'; }
    if (count === 13) { creativeagency.style.marginLeft = 0; }
    if (count === 14) { creativeagency.style.opacity = styles.hide.opacity; }
    if (count === 15) {
      creativeagency.style.opacity = styles.show.opacity;
      creativeagency.style.fontStyle = 'initial';
    }

    // creativeagency hide/show
    if (count === 9) {
      creativeagency.style.opacity = styles.hide.opacity;
    }
    if (count === 10) {
      creativeagency.style.opacity = styles.show.opacity;
    }

  }, 10);
}
