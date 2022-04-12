declare namespace QuoteStyleCssNamespace {
    export interface IQuoteStyleCss {
        authorContainer: string;
        authorName: string;
        authorPosition: string;
        container: string;
        text: string;
    }
}

declare const QuoteStyleCssModule: QuoteStyleCssNamespace.IQuoteStyleCss;

export = QuoteStyleCssModule;
