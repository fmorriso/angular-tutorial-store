import { Component, OnInit } from '@angular/core';
//
import { AngularVersionInformationService } from '../services/angular-version-information.service';
import { MaterialVersionInformationService } from '../services/material-version-information.service';
import { FlexLayoutVersionInformationService } from '../services/flex-layout-version-information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(
    private ngVersionService: AngularVersionInformationService,
    private matVersionService: MaterialVersionInformationService,
    private fxLayoutVersionService: FlexLayoutVersionInformationService
  ) {}

  ngOnInit() {}

  public get angularVersion(): string {
    return this.ngVersionService.version.full;
  }

  public get flexLayoutVersion(): string {
    return this.fxLayoutVersionService.versionFull;
  }

  public get materialVersion(): string {
    return this.matVersionService.version.full;
  }
}
