declare namespace ServiceStyleCssNamespace {
    export interface IServiceStyleCss {
        container: string;
        header: string;
        link: string;
        linkActive: string;
        text: string;
    }
}

declare const ServiceStyleCssModule: ServiceStyleCssNamespace.IServiceStyleCss;

export = ServiceStyleCssModule;
