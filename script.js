const plans = {
  '8-9 STUDENTS': {
    standard: {
      title: 'Discover',
      price: '5,500',
      items: [
        ['check', 'Psychometric assessment to measure your interests'],
        ['check', '1 career counselling session with Mentoria\'s expert career coaches'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Invites to live webinars by industry experts'],
        ['cross', 'Customised reports after each session with education pathways', true],
        ['cross', 'Guidance on studying abroad', true],
        ['cross', 'CV building during internships/graduation', true],
      ],
    },
    premium: {
      title: 'Discover plus+',
      price: '15,000',
      items: [
        ['check', 'Psychometric assessments to measure your interests, personality and abilities'],
        ['check', '8 career counselling sessions (1 every year) with Mentoria\'s expert career coaches until graduation'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Invites to live webinars by industry experts'],
        ['check', 'Customised reports after each session with education pathways'],
        ['check', 'Guidance on studying abroad'],
        ['check', 'CV building during internships/graduation'],
      ],
    },
  },
  '10-12 STUDENTS': {
    standard: {
      title: 'Achieve Online',
      price: '5,999',
      items: [
        ['check', 'Psychometric assessment to measure your interests, personality and abilities'],
        ['check', '1 career counselling session'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Pre-recorded webinars by industry experts'],
        ['cross', 'Customised reports after each session with education pathways', true],
        ['cross', 'Guidance on studying abroad', true],
        ['cross', 'CV reviews during internships/graduation', true],
      ],
    },
    premium: {
      title: 'Achieve Plus+',
      price: '10,599',
      items: [
        ['check', 'Psychometric assessment to measure your interests, personality and abilities'],
        ['check', '4 career counselling sessions'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Attend live webinars by industry experts'],
        ['check', 'Customised reports after each session with education pathways'],
        ['check', 'Guidance on studying abroad'],
        ['check', 'CV reviews during internships/graduation'],
      ],
    },
  },
  'COLLEGE GRADUATES': {
    standard: {
      title: 'Ascend Online',
      price: '6,499',
      items: [
        ['check', 'Psychometric assessment to measure your interests, personality and abilities'],
        ['check', '1 career counselling session'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Pre-recorded webinars by industry experts'],
        ['cross', 'Customised reports after each session with information on certificate/online courses', true],
        ['cross', 'Guidance on studying abroad', true],
        ['cross', 'CV reviews for job application', true],
      ],
    },
    premium: {
      title: 'Ascend Plus+',
      price: '10,599',
      items: [
        ['check', 'Psychometric assessment to measure your interests, personality and abilities'],
        ['check', '3 career counselling sessions'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Attend live webinars by industry experts'],
        ['check', 'Customised reports after each session with information on certificate/online courses'],
        ['check', 'Guidance on studying abroad'],
        ['check', 'CV reviews for job application'],
      ],
    },
  },
  'WORKING PROFESSIONALS': {
    standard: {
      title: 'Ascend Online',
      price: '6,499',
      items: [
        ['check', 'Psychometric assessment to measure your interests, personality and abilities'],
        ['check', '1 career counselling session'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Pre-recorded webinars by industry experts'],
        ['cross', 'Customised reports after each session with information on certificate/online courses', true],
        ['cross', 'Guidance on studying abroad', true],
        ['cross', 'CV reviews for job application', true],
      ],
    },
    premium: {
      title: 'Ascend Plus+',
      price: '10,599',
      items: [
        ['check', 'Psychometric assessment to measure your interests, personality and abilities'],
        ['check', '3 career counselling sessions'],
        ['check', 'Lifetime access to Knowledge Gateway'],
        ['check', 'Attend live webinars by industry experts'],
        ['check', 'Customised reports after each session with information on certificate/online courses'],
        ['check', 'Guidance on studying abroad'],
        ['check', 'CV reviews for job application'],
      ],
    },
  },
};

const customise = [
  ['CV Building', '2000', 'Is your CV making a great first impression on your behalf?'],
  ['LinkedIn Profile Building', '2000', 'Revamp your LinkedIn profile with recommendations from recruitment experts.'],
  ['LinkedIn Profile + CV Building', '3500', 'Get your CV and LinkedIn profile built by HR/Recruitment experts.'],
  ['Job Application Strategy', '4000', 'Build the right pipeline with a customised job application tracker.'],
  ['Career Report', '2500', 'Detailed psychometric report with analysis of interests, personality and abilities.'],
  ['Career Report + Career Counselling', '4000', 'Connect with career coaches and get a detailed action plan.'],
  ['Knowledge Gateway + Career Helpline Access', '250/month', 'Direct access to experts through a dedicated career helpline.'],
  ['One-to-One Session with a Career Expert', '3500 per interaction for 1 hour', 'Resolve career queries through one-on-one sessions.'],
  ['Overseas Admission Planner', '3000 for a planner with top 10 colleges in India OR any 1 country abroad', 'Structured admission options in one resourceful planner.'],
  ['Overseas Admission: SOP Brainstorm', '3000 for a one hour session', 'Improve admission chances by structuring your SOP.'],
  ['Overseas Admission: SOP Review', '2500', 'Review your SOP/essay with admissions experts.'],
  ['Interview Prep Session', '2000', 'Ace upcoming interviews with guidance from top HR experts.'],
];

const tabWrap = document.getElementById('segment-tabs');
const grid = document.getElementById('plan-grid');
const customGrid = document.getElementById('custom-grid');
let active = '8-9 STUDENTS';

Object.keys(plans).forEach((key) => {
  const b = document.createElement('button');
  b.className = `segment ${key === active ? 'active' : ''}`;
  b.textContent = key;
  b.onclick = () => {
    active = key;
    [...tabWrap.children].forEach((c) => c.classList.remove('active'));
    b.classList.add('active');
    renderPlans();
  };
  tabWrap.appendChild(b);
});

function planCard(kind, data) {
  return `
    <article class="plan-card">
      <small>${kind}</small>
      <h3>${data.title}<br/>₹ ${data.price}</h3>
      <ul>
        ${data.items
          .map(([state, text, strike]) => `<li><span class="${state}">${state === 'check' ? '✓' : '✕'}</span><span class="${strike ? 'strike' : ''}">${text}</span></li>`)
          .join('')}
      </ul>
      <a href="#contact" class="buy">BUY NOW</a>
    </article>`;
}

function renderPlans() {
  const current = plans[active];
  grid.innerHTML = planCard('STANDARD', current.standard) + planCard('PREMIUM', current.premium);
}

customGrid.innerHTML = customise
  .map(([title, price, desc]) => `
    <article class="custom-card">
      <h4>${title}</h4>
      <p class="price">₹${price}</p>
      <p>${desc}</p>
      <a href="#contact" class="buy">BUY NOW</a>
    </article>`)
  .join('');

renderPlans();
