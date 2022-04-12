declare namespace ServicesStyleCssNamespace {
    export interface IServicesStyleCss {
        container: string;
        header: string;
        servicesContainer: string;
    }
}

declare const ServicesStyleCssModule: ServicesStyleCssNamespace.IServicesStyleCss;

export = ServicesStyleCssModule;
