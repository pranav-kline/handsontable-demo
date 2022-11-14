import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import tableData from '../../assets/tableData.json';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css'],
})
export class StudyComponent implements OnInit {
  studyData: any = {};
  marketYearCategoryId: number = 0;
  studyProjectMarketYearId: number = 0;
  studyAreaId: number = 0;
  dataSetId: number = 0;
  studyDataViewId: number = 0;
  lookupDataRelations: any;
  viewNotePopup: boolean = false;
  hasStudyData: boolean = false;
  errorOccured: boolean = false;
  deleteRowConfirmPopup: boolean = false;
  deleteRowData: any;

  signOffConfirmPopup: boolean = false;
  signOffData: any;

  currencyDropdown: any[] = [];
  massUnitDropdown: any[] = [];
  constructor() {
    // const params = this.route.snapshot.params;
    // this.marketYearCategoryId = params['mycId'];
    // this.studyProjectMarketYearId = params['spmId'];
    // this.studyAreaId = params['studyArea'];
    // this.dataSetId = params['dataSetId'];
  }

  ngOnInit(): void {
    this.getStudyData();
  }

  // Call get api for fetch data
  getStudyData() {
    this.studyData = tableData;

    // this.hasStudyData =
    //   this.studyData.Data.DataList !== null &&
    //   this.studyData.Data.DataList.length > 0
    //     ? true
    //     : false;
  }

  processDataSourceDataGrid(dataSourceDataGrid: any) {
    // let studyDataPivotGridPreview: any[] = [];
    // for (let dataSourceItem of dataSourceDataGrid) {
    //   for (let yearItem in dataSourceItem.YearsData) {
    //     const columns = dataSourceItem.ColumnsData;
    //     const year = { Year: yearItem };
    //     const values = dataSourceItem.YearsData[yearItem];
    //     studyDataPivotGridPreview.push({ ...columns, ...year, ...values });
    //   }
    // }
    // this.studyDataPivotGridPreview = studyDataPivotGridPreview;
  }

  // Call save api for saving data
  saveStudyData(data: any) {}

  // Call request for sign off data
  requestForSignOff(event: any) {}

  // Call request for change data
  requestForChange(event: any) {}

  // Call sign off data
  singOffData(dataSourceData: any) {}

  onSignOffData() {}

  onSignOffConfirmHidden() {
    this.signOffData = {};
    this.signOffConfirmPopup = false;
  }

  unlockStudy() {}

  // call when delete row button clicked
  onDeleteRow(row: any) {}

  onDeleteRowConfirmPopupHide() {
    // this.deleteRowData = {};
    // this.deleteRowConfirmPopup = false;
  }

  confirmDeleteRow() {}

  loadCurrentStudy() {
    // let currentUrl = this.router.url;
    // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.router.navigate([currentUrl]);
    // });
  }

  // call for support data
  public getCurrencyList(studyDataSetId: number) {}

  public getUnitOfMassList(studyDataSetId: number) {}
}
