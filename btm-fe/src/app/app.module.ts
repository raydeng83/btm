import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {Http, HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatStepperModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NguCarouselModule} from '@ngu/carousel';

import {HeaderComponent} from './layouts/header/header.component';
import {IntroOneComponent} from './layouts/intro-one/intro-one.component';
import {IntroTwoComponent} from './layouts/intro-two/intro-two.component';
import {PortfolioComponent} from './layouts/portfolio/portfolio.component';
import {ServicesComponent} from './layouts/services/services.component';
import {CtaComponent} from './layouts/cta/cta.component';
import {PricingsComponent} from './layouts/pricings/pricings.component';
import {ContactComponent} from './layouts/contact/contact.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {TestimonialsComponent} from './layouts/testimonials/testimonials.component';
import {PortfolioCarouselComponent} from './layouts/portfolio-carousel/portfolio-carousel.component';
import {TestimonialsCarouselComponent} from './layouts/testimonials-carousel/testimonials-carousel.component';
import {ServicesCarouselComponent} from './layouts/services-carousel/services-carousel.component';

import {WINDOW_PROVIDERS} from './shared/helpers/window.helper';
import {HomeComponent} from './layouts/home/home.component';
import {WorkflowComponent} from './layouts/workflow/workflow.component';
import {ContactService} from './shared/services/contact.service';
import {SimpleNotificationsModule} from 'angular2-notifications';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        SharedModule,
        CommonModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatChipsModule,
        MatInputModule,
        MatListModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        FlexLayoutModule,
        NguCarouselModule,
        MatStepperModule,
        SimpleNotificationsModule.forRoot(),
        RouterModule.forRoot(rootRouterConfig, {useHash: true})
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        IntroOneComponent,
        IntroTwoComponent,
        PortfolioComponent,
        ServicesComponent,
        CtaComponent,
        PricingsComponent,
        ContactComponent,
        FooterComponent,
        TestimonialsComponent,
        PortfolioCarouselComponent,
        TestimonialsCarouselComponent,
        ServicesCarouselComponent,
        HomeComponent, WorkflowComponent
    ],
    providers: [
        WINDOW_PROVIDERS,
        ContactService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}