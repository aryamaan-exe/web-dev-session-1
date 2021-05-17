function store() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let age = document.querySelector('#age').value;

    let obj = {
        'Name': name,
        'Email': email,
        'Age': age
    }

    // Here we could use PHP, Node etc. to store the data. We can use SQL, Mongo or for a simple webpage like this, JSON.
    
    console.log(obj);   
}
