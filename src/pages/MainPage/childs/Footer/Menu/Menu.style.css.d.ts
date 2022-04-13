declare namespace MenuStyleCssNamespace {
    export interface IMenuStyleCss {
        container: string;
        feedback: string;
        header: string;
        iconsContainer: string;
        mail: string;
        text: string;
    }
}

declare const MenuStyleCssModule: MenuStyleCssNamespace.IMenuStyleCss;

export = MenuStyleCssModule;
