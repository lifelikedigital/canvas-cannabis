import './buttonsWaiting.css';

// Button Selectors
const $footerSubmit = $('#newsletter-subscribe'); // #newsletter-subscribe
// const $ageGateSubmit // #confirm-age
// const $segmentationSubmit // #go-to-menu
// const $jobApplicationSubmit // .main-button.main-button--fixed.is--job-application

// Replacement HTML
const footerSubmitReplacement = `
  <button class="main-button main-button--fixed" id="newsletter-subscribe">Subscribe</button>
`;
// const ageGateSubmitReplacement
// const segmentationSubmitReplacement
// const jobApplicationSubmitReplacement

// on form submit animate inside the button
const buttonsWaiting = () => {
  $footerSubmit.replaceWith(footerSubmitReplacement);
};

export default buttonsWaiting;
