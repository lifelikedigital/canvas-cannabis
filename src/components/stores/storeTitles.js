const $storeTitleEl = $('h2.store-locations__heading');

const storeTitles = () => {
  for (let i = 0; i < $storeTitleEl.length; i++) {
    // const storeTitleSplit = $storeTitleEl[i].innerText.split(' ');
    console.log($storeTitleEl);
    // $storeTitleEl[i].html().replace('DISPENSARY', 'DATSPENSARY');
    // const storeTitleLength = storeTitleSplit.length;
    // const lastWord = storeTitleSplit[storeTitleLength - 1];
    // const lastWordBlock = `<span class="line-break">${lastWord}</span>`
  }
};

export default storeTitles;
