declare namespace PortfolioStyleCssNamespace {
    export interface IPortfolioStyleCss {
        caseLeft: string;
        caseRight: string;
        container: string;
        contentContainer: string;
        header: string;
        headerText: string;
        imageLeft: string;
        imageRight: string;
    }
}

declare const PortfolioStyleCssModule: PortfolioStyleCssNamespace.IPortfolioStyleCss;

export = PortfolioStyleCssModule;
