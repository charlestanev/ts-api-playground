import { User } from "../types/user";

export function UserCard(user: User): string {
    return `
        <div class="card user-card">
            <h3>${user.name}</h3>
            <p>@${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Website: <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
    `;
}
