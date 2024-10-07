// Validación de formulario de login
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    return true;
}

// Validación de formulario de solicitud de becas
function validateBecaForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dni = document.getElementById('dni').value;
    var income = document.getElementById('income').value;
    var documents = document.getElementById('documents').files;
    
    if (name === '' || email === '' || dni === '' || income === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    
    if (documents.length === 0) {
        alert('Debes subir al menos un documento.');
        return false;
    }
    
    return true;
}
