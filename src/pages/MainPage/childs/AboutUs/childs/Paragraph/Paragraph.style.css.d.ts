declare namespace ParagraphStyleCssNamespace {
    export interface IParagraphStyleCss {
        container: string;
        header: string;
        label: string;
        link: string;
        text: string;
    }
}

declare const ParagraphStyleCssModule: ParagraphStyleCssNamespace.IParagraphStyleCss;

export = ParagraphStyleCssModule;
