declare namespace ReportStyleCssNamespace {
    export interface IReportStyleCss {
        container: string;
        header: string;
        link: string;
        text: string;
    }
}

declare const ReportStyleCssModule: ReportStyleCssNamespace.IReportStyleCss;

export = ReportStyleCssModule;
