import { router } from "../router";

export abstract class HtmlUtil {
    static render(rootDiv: HTMLElement | null) {
        if (!rootDiv) {
            throw new Error('Root element not found');
        }

        const { pathname } = window.location;
        rootDiv.innerHTML = router[pathname] || '<h1>Page Not Found</h1>';
    }

    static navigate(rootDiv: HTMLElement, pathname: string) {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        HtmlUtil.render(rootDiv);
    }
}
