import tippy from 'tippy.js';
import './socialShare.css';
import 'tippy.js/animations/scale.css';

// Global
const $body = $('body');
const $metaDesc = $('meta[name=description]');

// URL
const $currentPost = $(location).attr('href'); // for copying
const $currentPostEncoded = encodeURIComponent($(location).attr('href')); // for share links

// Metadata
const $currentPostTitle = $('title').text();
const $currentPostTitleEncoded = encodeURIComponent($('title').text());
const $currentPostSummary = $metaDesc.attr('content');
const $currentPostSummaryEncoded = encodeURIComponent($currentPostSummary);

// Emails
const emailSubject = `Canvas Cannabis Blog: ${$currentPostTitle}`;
const emailBody = `
  Hi, 
  
  I wanted to share this article with you on ${$currentPostTitle} from Canvas Cannabis.
  
  You can check it out right here: ${currentPost};
`;

// Share buttons
const $facebookShareBtn = $('.blog-post__share-link--facebook');
const $linkedInShareBtn = $('.blog-post__share-link--linkedin');
const $emailShareBtn = $('.blog-post__share-link--email');
const $copyShareBtn = $('.blog-post__share-link--copy');
const copyShareBtn = document.querySelector('.blog-post__share-link--copy');

// Share links
const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${$currentPostEncoded}`;
const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${$currentPostEncoded}&title=${$currentPostTitleEncoded}&source=https%3A%2F%2Fcanvascannabis.ca%2F&summary=${$currentPostSummaryEncoded}`;
const emailShareLink = `mailto:?subject=${emailSubject}&body=${emailBody}`; // gmail on ios is tricky with mailto in general + clean up body variable and subject

// Copy link related
const $temp = $('<input>');

// Functions
const copyLink = () => {
  $copyShareBtn.on('click', () => {
    $body.append($temp);
    $temp.val($currentPost).select();
    document.execCommand('copy');
    $temp.remove();
  });
  // Tooltip confirmation
  tippy(copyShareBtn, {
    theme: 'canvas',
    allowHTML: true,
    content:
      '<span class="share__link--content">Copied</span> <img src="https://uploads-ssl.webflow.com/60cfd1175523ac59337574a3/611590b5b841f0538ff7398a_share__link--copied.svg" class="share__link--copied" alt="link has been copied checkmark">',
    trigger: 'click',
    placement: 'right',
    offset: [0, 16], // skidding, distance
    animation: 'scale',
    duration: 250,
    inertia: 'true',
    arrow: false,
    hideOnClick: false,
    onShow(instance) {
      setTimeout(() => {
        instance.hide();
      }, 500);
    },
  });
};

const socialShare = () => {
  $facebookShareBtn.attr('href', facebookShareLink);
  $linkedInShareBtn.attr('href', linkedInShareLink);
  $emailShareBtn.attr('href', emailShareLink);
  copyLink();
};

export default socialShare;
