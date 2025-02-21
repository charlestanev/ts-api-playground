import { UserList } from "../components/UserList";
import UserService from "../services/UsersService";

export const userPage = `
    <div>
        <h1>Users</h1>
        <div id="user-list">Loading...</div>
    </div>
`;

const userService = new UserService('https://jsonplaceholder.typicode.com');
userService.getAll().then(users => {
    document.getElementById('user-list')!.innerHTML = UserList(users);
});
