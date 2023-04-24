import { teamIds }  from '/src/js/modal_team/footer-modal-team.js';
import Siema from 'siema';

export const refs = {
  workerList: document.querySelector('.worker__list'),
}

const setting = {
    selector: '.siema_one',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
}

const refsModal = {
    openModalBtn: document.querySelector('.footer-text__command'),
    closeModalBtn: document.querySelector('[data-modal-close-footer]'),
  modal: document.querySelector('[data-modal-footer]'),
    
  body: document.querySelector('body'),
  sliderBody: document.querySelector('.js-worker__list'),
    
  };
  
refsModal.openModalBtn.addEventListener('click', onOpenModal);
refsModal.closeModalBtn.addEventListener('click', onCloseModal);


function renderTeamMember(teamIds) {
  const markup = teamIds.reduce((html, member) => {
    const { name, position, github, linkedin, img, text} = member;
    
     return html +=
        ` <div class="worker__item">
          <div class="worker-image-wrapp">
          <img src="${img}" alt="member image" class="worker__img"/>
          </div>
                <h2 class="worker-title">${name}</h2>
                <p class ="worker-position">${position}</p> 
                <div class="worker__icons">
                  <a class="worker__icon-link" href="${github}">
                    <svg class="worker__icon worker__icon--git" width="32px" height="32px">
                    ${iconGitSvgCode}
                    </svg>
                  </a>
                  <a class="worker__icon-link" href="${linkedin}">
                    <svg class="worker__icon worker__icon--inst" width="32px" height="32px">
                    ${iconLinkSvgCode}
                    </svg>
                  </a> 
                </div>
                <p class="worker-text">${text}</p> 
              </div>`
    }, "");
    return refs.workerList.insertAdjacentHTML('beforeend', markup);
    
}

function onOpenModal(e) {
e.preventDefault();
  const team = teamIds;
  if (refsModal.sliderBody.innerHTML === "") {
    renderTeamMember(team);
    const mySiema = new Siema(setting);
    document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
    document.querySelector('.next').addEventListener('click', () => mySiema.next());
}
  refsModal.body.addEventListener('keydown', onEscCloseModal);
  refsModal.modal.addEventListener('click', onBackdropCloseModal);
  refsModal.modal.classList.add('shown');
  lockBodyScroll();

  removeButtonToTop()
}

function onCloseModal ()  {
    refsModal.modal.classList.remove('shown');
    refsModal.body.removeEventListener('Keydown', onEscCloseModal);
    refsModal.modal.removeEventListener('click', onBackdropCloseModal);
    lockBodyScroll();

    createButtonToTop()
}

function onEscCloseModal(e) {
    if (e.keyCode === 27) {
        onCloseModal();
    }
}

function onBackdropCloseModal(e) {
    const isBackdrop = e.target === refsModal.modal;

    if (isBackdrop) {
        onCloseModal();
    }
}



    const iconLinkSvgCode = `
    <path fill="none" stroke="#24292f" style="stroke: var(--color1, #24292f)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="22.93" stroke-width="1.73" d="M26.705 5.297c5.911 5.911 5.911 15.495 0 21.406s-15.495 5.911-21.406 0c-5.911-5.911-5.911-15.495 0-21.406s15.495-5.911 21.406 0z"></path>
<path d="M26.984 16.012c0-6.066-4.918-10.984-10.984-10.984s-10.984 4.918-10.984 10.984c0 6.066 4.918 10.984 10.984 10.984v0c6.066 0 10.984-4.918 10.984-10.984v0zM9.822 22.191v-9.611h2.746v9.611zM19.088 12.58c2.731 0 3.091 2.059 3.091 4.806v4.806h-2.746v-5.492c0-0.9-0.506-1.373-1.373-1.373s-1.373 0.482-1.373 1.373v5.492h-2.746v-9.611h2.746v1.373c0.156-0.674 0.485-1.373 2.401-1.373zM12.564 10.52c0 0.758-0.615 1.373-1.373 1.373s-1.373-0.615-1.373-1.373c0-0.758 0.615-1.373 1.373-1.373 0.001 0 0.002 0 0.003 0h-0c0.757 0.002 1.37 0.616 1.37 1.373 0 0 0 0 0 0v0z"></path>`;
    
    const iconGitSvgCode = `
    <path d="M16.009 5.028c-6.186 0.054-11.179 5.080-11.179 11.273 0 4.927 3.16 9.115 7.564 10.649l0.079 0.024c0.555 0.113 0.76-0.241 0.76-0.54s-0.018-1.156-0.018-2.090c-3.112 0.671-3.759-1.343-3.759-1.343-0.5-1.306-1.239-1.638-1.239-1.638-1.019-0.693 0.073-0.693 0.073-0.693 1.129 0.076 1.721 1.156 1.721 1.156 1.001 1.718 2.609 1.22 3.259 0.934 0.050-0.594 0.308-1.12 0.702-1.51l0-0c-2.481-0.262-5.089-1.22-5.089-5.556-0-0.016-0-0.035-0-0.054 0-1.144 0.436-2.187 1.151-2.97l-0.003 0.003c-0.144-0.402-0.228-0.865-0.228-1.348 0-0.592 0.125-1.154 0.351-1.662l-0.010 0.026s0.943-0.305 3.069 1.156c0.838-0.238 1.801-0.375 2.796-0.375s1.958 0.137 2.871 0.393l-0.075-0.018c2.136-1.455 3.072-1.156 3.072-1.156 0.214 0.481 0.338 1.042 0.338 1.633 0 0.484-0.084 0.949-0.238 1.38l0.009-0.029c0.712 0.767 1.148 1.797 1.148 2.929 0 0.032-0 0.064-0.001 0.096l0-0.005c0 4.323-2.609 5.275-5.108 5.556 0.406 0.354 0.76 1.025 0.76 2.087 0 1.51-0.018 2.725-0.018 3.097 0 0.305 0.201 0.653 0.757 0.54 4.483-1.558 7.644-5.747 7.644-10.673 0-6.186-4.982-11.208-11.152-11.273l-0.006-0z"></path>
    <path fill="none" stroke="#24292f" style="stroke: var(--color1, #24292f)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="22.93" stroke-width="1.73" d="M26.705 5.297c5.911 5.911 5.911 15.495 0 21.406s-15.495 5.911-21.406 0c-5.911-5.911-5.911-15.495 0-21.406s15.495-5.911 21.406 0z"></path>`;