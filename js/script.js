const openRedirectWarningModal = (drivePage) => {
  const PAGES = {
    GA: 'https://drive.google.com/drive/folders/1puEKt76dPB7yJ0i1a8JMJkcVjf3mQ6HJ?usp=sharing',
    ninthGrade:
      'https://drive.google.com/drive/folders/1s4s79e5KvAmqVx7lrZ4l4fBufOcgHfoy?usp=sharing',
    eighthGrade:
      'https://drive.google.com/drive/folders/1hs-Wwi2RWUjXRPzwgtRZjmdsV2YwrBz0?usp=sharing',
    seventhGrade:
      'https://drive.google.com/drive/folders/1Plik9CyIjkJlsscqOEh-nMy0BRBSF4jJ?usp=sharing',
    sixthGrade:
      'https://drive.google.com/drive/folders/1J9c2nXmlEsFlOqFh7vQI7WZjUBAu8VQN?usp=sharing',
  };

  try {
    UIkit.modal('#modal-center').show();
    counter();
    setTimeout(() => {
      window.location.assign(PAGES[drivePage]);
    }, 5000);
  } catch (e) {
    console.error(e);
  }
};

const counter = () => {
  let secondsLabel = document.getElementById('seconds');
  let totalSeconds = 5;
  setInterval(setTime, 1000);

  function setTime() {
    --totalSeconds;
    secondsLabel.innerHTML = `${totalSeconds}s`;
    if (totalSeconds < 0) {
      totalSeconds = 5;
      secondsLabel.innerHTML = '5s';
    }
  }
};
