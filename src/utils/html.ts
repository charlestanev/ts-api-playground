import { router } from "../router";

export abstract class HtmlUtil {
    static render(rootDiv: HTMLElement | null) {
        if (!rootDiv) {
            throw new Error('Root element not found');
        }

        const { pathname } = window.location;
        rootDiv.innerHTML = router[pathname];

        HtmlUtil.addEventListeenr(rootDiv);
    }

    private static addEventListeenr(rootDiv: HTMLElement) {
        const usersBtn: HTMLElement | null = document.getElementById('users');
        const postsBtn: HTMLElement | null = document.getElementById('posts');

        if (usersBtn) {
            usersBtn.addEventListener('click', () => {
                HtmlUtil.navigate(rootDiv, '/');
            });
        }

        if (postsBtn) {
            postsBtn.addEventListener('click', () => {
                HtmlUtil.navigate(rootDiv, '/posts');
            });
        }
    }

    private static navigate(rootDiv: HTMLElement, pathname: string) {
        const { } = window.location;
    }
};
