import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable/base';
import { DataSourceResponse } from '../models/dataSourceResponse.model';

@Component({
  selector: 'app-handson-table',
  templateUrl: './handson-table.component.html',
  styleUrls: ['./handson-table.component.css'],
})
export class HandsonTableComponent implements OnInit {
  handsontableLicenseKey = 'non-commercial-and-evaluation';

  // hyperformulaInstance = HyperFormula.buildEmpty({
  //   // to use an external HyperFormula instance,
  //   // initialize it with the `'internal-use-in-handsontable'` license key
  //   licenseKey: 'internal-use-in-handsontable'
  // });

  marketYearCategoryId: number = 0;
  studyProjectMarketYearId: number = 0;
  studyAreaId: number = 0;
  dataSetId: number = 0;
  yearsList: any[];
  isLockedStudy: boolean = false;
  isVolumeYear: boolean = false;
  dataSource: DataSourceResponse = new DataSourceResponse();
  currencyDropdown: any[] = [];
  unitsDropdown: any[] = [];

  @Input() set setDataSource(data: any) {
    // if (!lodash.isEmpty(data)) {
    this.dataSource = data;
    // this.getAllColumnsComments();
    // }
  }
  dataRelations: any[] = [];
  @Input() set setCurrency(data: any) {
    this.currencyDropdown = data;
  }

  @Input() set setVolumeUnits(data: any) {
    this.unitsDropdown = data;
  }

  @Input() set setDataRelations(data: any) {
    this.dataRelations = data;
  }

  @Output() dataSourceDataChanged = new EventEmitter<any>();

  clipboardCache: any = '';

  dataSourceData: any[] = [];
  dataSourceDataNoFormulas: any[] = [];

  hiddenColumns: any = {
    columns: [],
    indicators: false,
    copyPasteEnabled: false,
  };

  filterableColumns: any = [];

  dataSettings: DataGridConfiguration = new DataGridConfiguration();

  isManager: boolean = false;
  userDetail: any;

  disabledSignOffButton: boolean = false;
  isStudyEditable: boolean = false;
  studyTitle: string = '';
  isAddNewRowVisible: boolean = true;
  unitOfValues: any[] = [];
  currentCurrency: any;

  colHeaders: any[] = [];
  columns: any;
  data: any;
  cell: any;
  nestedHeaders: any;
  fixedRowsTop: number = 0;
  fixedColumnsLeft: number = 0;
  formulas: any;
  addNewRowForm: FormGroup;
  @Output() onRequestForSignOffClicked = new EventEmitter<string>();
  @Output() onRequestForChangeClicked = new EventEmitter<string>();
  @Output() onSaveDataClicked = new EventEmitter<any>();
  @Output() onSignOffClicked = new EventEmitter<any>();
  @Output() onUnlockStudyClicked = new EventEmitter<string>();
  @Output() onDeleteRowClicked = new EventEmitter<any>();

  private hotRegisterer = new HotTableRegisterer();
  id = 'hotInstance';

  hotSettings: any = {};

  viewNotePopup: boolean = false;
  viewStudyComments: boolean = false;
  showHelpText: boolean = false;
  selectedCommentCellData: any = {};
  selectedRowNotes: any;
  newNoteForm: FormGroup;
  noteSubmit = false;

  isAddNewRowPopup = false;
  newRowFormObj: any[] = [];
  visibleGridColumns: any[] = [];

  calculatorContextMenuItems: any[] = [];
  resetMenuItems: any[] = [];

  valueColsIndexes: any[] = [];
  isDefaultStateMode: boolean = false;
  dataGridState: DataGridState = new DataGridState();
  countOfFormulasInDatagrid: number = 0;

  renderingFinishedTimeout: NodeJS.Timeout = setTimeout(() => {}, 0);
  isRenderingFinished: boolean = false;

  constructor() {}

  ngOnInit() {}
}
