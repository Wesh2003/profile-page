document.getElementById("light-mode-toggle-btn").addEventListener('click', darkmodefunc)

function darkmodefunc(){
    document.body.classList.toggle("dark-mode");
}

document.getElementById("hidden-nav-button").addEventListener('click', dropdownfunc)

function dropdownfunc(){
    document.body.classList.toggle("hidden-nav");
}

//-------------------------------------------------------------
//-------------------------------------------------------------

function createForm() {
    
    const container = document.getElementById('form');

    
    const form = document.createElement('form');
    form.setAttribute('id', 'contactForm');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '#');

    
    const firstNameLabel = document.createElement('label');
    firstNameLabel.setAttribute('for', 'firstname');
    firstNameLabel.textContent = 'First Name: ';
    firstNameLabel.setAttribute('class', 'form-labels');

    const firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('id', 'firstname');
    firstNameInput.setAttribute('name', 'firstname');
    firstNameInput.setAttribute('class', 'form-inputs');
    firstNameInput.required = true;

   
    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'lastname');
    lastNameLabel.textContent = 'Last Name: ';
    lastNameLabel.setAttribute('class', 'form-labels');

    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('id', 'lastname');
    lastNameInput.setAttribute('name', 'lastname');
    lastNameInput.setAttribute('class', 'form-inputs');
    lastNameInput.required = true;

    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email: ';
    emailLabel.setAttribute('class', 'form-labels');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('class', 'form-inputs');
    emailInput.required = true;

    
    const commentLabel = document.createElement('label');
    commentLabel.setAttribute('for', 'comment');
    commentLabel.setAttribute('id', 'comment-label');
    commentLabel.textContent = 'Comment: ';
    commentLabel.setAttribute('class', 'form-labels');

    const commentSection = document.createElement('textarea');
    commentSection.setAttribute('id', 'comment');
    commentSection.setAttribute('name', 'comment');
    commentSection.required = true;


    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'form-button');
    submitButton.textContent = 'Submit Contact request';

  
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(lastNameLabel);
    form.appendChild(lastNameInput);
    form.appendChild(document.createElement('br')); 
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br')); 
    form.appendChild(commentLabel);
    form.appendChild(commentSection);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);


    container.appendChild(form);
}

createForm();


const reloadPage = document.getElementById('form-button');
reloadPage.onclick = function() {
    location.reload();
};