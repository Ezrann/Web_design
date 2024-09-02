document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body
        groupBody.classList.toggle('open');

        // Close other open FAQ body
        const otherGroups = faqContainer.querySelector('.faq-group')

        otherGroups.forEach ((otherGroup) =>{
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body')
                const otherIcon = otherGroup.querySelector('.faq-group-header i')

                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('fa-minus')
                otherIcon.classList.remove('fa-plus')
            }
        })
    });
});
//  Mobile Menu

document.getEventListener('DOMContentLoaded', () => {
    const hamburgarButton = document.querySelector ('.hamburgar-button');
    const mobileMenu = document.querySelector ('.mobile-menu');

    hamburgarNutton.addEventListener('click' , () => 
    mobileMenu.classList.toggle('active'))
})