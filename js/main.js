document.addEventListener("DOMContentLoaded", () => {
    const userListElement = document.getElementById('userList');


    fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(users => {

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';


                listItem.innerHTML = `
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${user.avatar}" alt="Avatar" class="img-fluid rounded">
                        </div>
                        <div class="col-md-9">
                            <h4>${user.name}</h4>
                            <p>Email: ${user.email}</p>
                            <p>Password: ${user.password}</p>
                        </div>
                    </div>
                `;

                userListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
