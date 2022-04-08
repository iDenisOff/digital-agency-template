declare namespace SummaryStyleCssNamespace {
    export interface ISummaryStyleCss {
        container: string;
        header: string;
        label: string;
        link: string;
        summary: string;
        text: string;
    }
}

declare const SummaryStyleCssModule: SummaryStyleCssNamespace.ISummaryStyleCss;

export = SummaryStyleCssModule;
