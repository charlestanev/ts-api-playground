export abstract class HtmlUtil {
    static render(rootDiv: HTMLElement | null) {
        if (!rootDiv) {
            throw new Error('Root element not found');
        }

        HtmlUtil.addEventListeenr(rootDiv);
    }



    private static addEventListeenr(rootDiv:HTMLElement) {

    }

    static navigate() { }
};
