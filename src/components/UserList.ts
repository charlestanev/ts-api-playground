import { User } from "../types/user";

export function UserList(users: User[]): string {
    return `
        <ul>
            ${users.map(user => `<li>${user.name} - ${user.email}</li>`).join('')}
        </ul>
    `;
}
