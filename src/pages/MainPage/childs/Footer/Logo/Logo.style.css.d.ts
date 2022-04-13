declare namespace LogoStyleCssNamespace {
    export interface ILogoStyleCss {
        container: string;
        logoText: string;
        text: string;
    }
}

declare const LogoStyleCssModule: LogoStyleCssNamespace.ILogoStyleCss;

export = LogoStyleCssModule;
