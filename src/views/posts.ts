import PostService from "../services/PostsService";
import { PostCard } from "../components/PostCard";

export function postPage(): string {
    return `
        <div>
            <h1>Posts</h1>
            <div id="post-list">Loading...</div>
        </div>
    `;
}

export function loadPosts() {
    const postService = new PostService('https://jsonplaceholder.typicode.com');

    postService.getAll().then(posts => {
        const postList = document.getElementById('post-list');
        if (postList) {
            postList.innerHTML = posts.map(post => PostCard(post)).join('');
        }
    });
}
