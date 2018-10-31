'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">starter-bootstrap-admin-angular6 documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-d64cd40e8b37345618231851690c2216"' : 'data-target="#xs-components-links-module-AppModule-d64cd40e8b37345618231851690c2216"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-d64cd40e8b37345618231851690c2216"' : 'id="xs-components-links-module-AppModule-d64cd40e8b37345618231851690c2216"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"' : 'data-target="#xs-components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"' : 'id="xs-components-links-module-LoginModule-6b456007c6191339ca6846e33e9353e6"' }>
                                        <li class="link">
                                            <a href="components/ForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"' : 'data-target="#xs-components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"' : 'id="xs-components-links-module-PagesModule-923cdd6d40a38e177b6aed1433c39622"' }>
                                        <li class="link">
                                            <a href="components/ForgotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BarChartComponent.html" data-type="entity-link">BarChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link">BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartComponent.html" data-type="entity-link">ChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CircuitsComponent.html" data-type="entity-link">CircuitsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link">DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DoughnutChartComponent.html" data-type="entity-link">DoughnutChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DriversComponent.html" data-type="entity-link">DriversComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link">FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GoogleMapsComponent.html" data-type="entity-link">GoogleMapsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineChartComponent.html" data-type="entity-link">LineChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotpagefoundComponent.html" data-type="entity-link">NotpagefoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PagesComponent.html" data-type="entity-link">PagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PieChartComponent.html" data-type="entity-link">PieChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PolarAreaChartComponent.html" data-type="entity-link">PolarAreaChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RacesComponent.html" data-type="entity-link">RacesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RadarChartComponent.html" data-type="entity-link">RadarChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ScrollTopComponent.html" data-type="entity-link">ScrollTopComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SeasonsComponent.html" data-type="entity-link">SeasonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent.html" data-type="entity-link">SettingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link">SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SupportComponent.html" data-type="entity-link">SupportComponent</a>
                            </li>
                    </ul>
                </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#directives-links"' : 'data-target="#xs-directives-links"' }>
                        <span class="icon ion-md-code-working"></span>
                        <span>Directives</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                            <li class="link">
                                <a href="directives/DefaultImageDirective.html" data-type="entity-link">DefaultImageDirective</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Marker.html" data-type="entity-link">Marker</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CircuitsService.html" data-type="entity-link">CircuitsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/CurrentService.html" data-type="entity-link">CurrentService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DriversService.html" data-type="entity-link">DriversService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RacesService.html" data-type="entity-link">RacesService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RequestService.html" data-type="entity-link">RequestService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SeasonsService.html" data-type="entity-link">SeasonsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SidebarService.html" data-type="entity-link">SidebarService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Confirm.html" data-type="entity-link">Confirm</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Constructor.html" data-type="entity-link">Constructor</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Login.html" data-type="entity-link">Login</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MarkerIF.html" data-type="entity-link">MarkerIF</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Race.html" data-type="entity-link">Race</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Season.html" data-type="entity-link">Season</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#pipes-links"' : 'data-target="#xs-pipes-links"' }>
                        <span class="icon ion-md-add"></span>
                        <span>Pipes</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                            <li class="link">
                                <a href="pipes/GoogleMapsUrlPipe.html" data-type="entity-link">GoogleMapsUrlPipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/GoogleStaticMapUrlPipe.html" data-type="entity-link">GoogleStaticMapUrlPipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/LocationTextPipe.html" data-type="entity-link">LocationTextPipe</a>
                            </li>
                            <li class="link">
                                <a href="pipes/WikipediaUrlMobilePipe.html" data-type="entity-link">WikipediaUrlMobilePipe</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
