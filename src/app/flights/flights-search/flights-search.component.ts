import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit, Compiler} from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CmsService } from '../../services/cms.service';
import { MetatagsService } from '../../services/metatags.service';
// import { NotificationLibService } from 'notification-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent implements OnInit {

  response: any;
  taskObservable: Observable<string>;
  // notificationService: any;

  constructor(
    private router: Router,
    private transferState: TransferState,
    private metaTagsService: MetatagsService,
    private cmsService: CmsService,
    private compiler: Compiler,
    private injector: Injector,
      ) {

  }

   ngOnInit(){

    // await import( 'shell/notification' )
    // .then( module => module.NotificationModule )
    // .then( module => {
    //     this.notificationService = module.entrySet.notificationService;
    //     return module;
    // })
    // .then( module => this.compiler.compileModuleAsync( module ) )
    // .then( factory => {
    //     let module = factory.create( this.injector );
    //     this.notificationService = module.injector.get( this.notificationService );
    // });

    // console.log('this.notificationService FlightsSearch --->', this.notificationService);
    
    // console.log('this.notificationService.getData() FlightsSearch --->', this.notificationService.getData());
    this.setMetaTags();

    // this.taskObservable = new Observable((observer) => {
    //   observer.next(this.notificationService.getData().path);
    // });

  }

  setMetaTags() {
    const stateKey = makeStateKey<any>(this.router.url);
    console.log('stateUrl', this.router.url);
    // if (this.transferState.hasKey(stateKey)) {
    //     const stateData = this.transferState.get<any>(stateKey, null);
    //     console.log('recuperando de state --->', stateData);
    //     // if (state.url.indexOf('accidents') !== -1) {
    //         this.metaTagsService.setMetaTags(stateData.titleValidation!, stateData.descriptionValidation!);
    //     // } 
    //     // else if (state.url.indexOf('/cotizacion') !== -1) {
    //     //     this.metaTagsService.setMetaTags(stateData.titleQuotation!, stateData.descriptionQuotation!);
    //     // }
    //     // return the state datа as Observable
    //     // return of(stateData);
    // } else {
      console.log('Server');

      // this.metaTagsService.setMetaTags('TItulo', 'Descripcion');
        this.cmsService.getInfoCMS().subscribe(response => {
          console.log('data antes de setear --->', response);
          this.response = response;
              this.metaTagsService.setMetaTags(response.titleValidation!, response.descriptionValidation!);
          // } 
          // else if (state.url.indexOf('/cotizacion') !== -1) {
          //     this.metaTagsService.setMetaTags(response.titleQuotation!, response.descriptionQuotation!);
          // } 
          this.transferState.set(stateKey, response);
        })

            // .pipe(
            //     tap({
            //         next: (response) => {
            //             // const seoData = {
            //             //     title: response.title,
            //             //     description: response.description
            //             // };
            //             // if (state.url.indexOf('validacion') !== -1) {

            //         }
            //     })
            // );
    // }
  }
}
