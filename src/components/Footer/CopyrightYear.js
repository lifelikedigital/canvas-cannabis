const footerCopyrightEl = document.getElementById('copyright-year');
const currentDate = new Date();
// let currentYear = currentDate.getFullYear();
let currentYear = 'Doodoo';

const CopyrightYear = () => {
  footerCopyrightEl.innerHTML = currentYear;
};

export default CopyrightYear;
