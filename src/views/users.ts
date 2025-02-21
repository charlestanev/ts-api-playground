import UserService from "../services/UsersService";
import { UserCard } from "../components/UserCard";

export function userPage(): string {
    return `
        <div>
            <h1>Users</h1>
            <div id="user-list">Loading...</div>
        </div>
    `;
}

export function loadUsers() {
    const userService = new UserService('https://jsonplaceholder.typicode.com');

    userService.getAll().then(users => {
        const userList = document.getElementById('user-list');
        if (userList) {
            userList.innerHTML = users.map(user => UserCard(user)).join('');
        }
    });
}
