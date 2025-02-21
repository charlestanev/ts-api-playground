import { router } from "../router";

export abstract class HtmlUtil {
    static render(rootDiv: HTMLElement) {
        const { pathname } = window.location;
        const pageContent = router[pathname] ? router[pathname]() : '<h1>404 Page Not Found</h1>';

        rootDiv.innerHTML = pageContent;
        HtmlUtil.setupDynamicContent();
    }

    static navigate(rootDiv: HTMLElement, pathname: string) {
        window.history.pushState({}, "", pathname);
        HtmlUtil.render(rootDiv);
    }

    private static setupDynamicContent() {
        const { pathname } = window.location;

        if (pathname === "/users") {
            import("../views/users").then((module) => module.loadUsers());
        } else if (pathname === "/posts") {
            import("../views/posts").then((module) => module.loadPosts());
        }
    }
}
