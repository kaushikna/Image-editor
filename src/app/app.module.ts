import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularPinturaModule } from '@pqina/angular-pintura';

import { FilePondModule, registerPlugin } from 'ngx-filepond';

import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor';
import { AppRoutingModule } from './app-routing.module';
import { MAPCreatorComponent } from './mapcreator/mapcreator.component';
import { ImageeditorComponent } from './imageeditor/imageeditor.component';
import { HighchartsChartModule } from 'highcharts-angular';


registerPlugin(FilePondPluginFilePoster, FilePondPluginImageEditor);

@NgModule({
  declarations: [AppComponent, MAPCreatorComponent, ImageeditorComponent],
  imports: [BrowserModule, AngularPinturaModule, FilePondModule,AppRoutingModule,HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule {}
