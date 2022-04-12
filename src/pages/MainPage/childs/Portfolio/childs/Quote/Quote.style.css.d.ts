declare namespace QuoteStyleCssNamespace {
    export interface IQuoteStyleCss {
        authorContainer: string;
        container: string;
        image: string;
        name: string;
        position: string;
        text: string;
    }
}

declare const QuoteStyleCssModule: QuoteStyleCssNamespace.IQuoteStyleCss;

export = QuoteStyleCssModule;
