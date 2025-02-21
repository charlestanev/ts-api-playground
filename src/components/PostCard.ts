import { Post } from "../types/post";

export function PostCard(post: Post): string {
    return `
        <div class="card post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `;
}
