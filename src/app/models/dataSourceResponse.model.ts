import { DataGridConfiguration } from './dataGridConfiguration.model';
import { InitialSetup } from './initialSetup.model';

export class DataSourceResponse {
  HttpStatusCode: number = 200;
  Data: DataSourceData = new DataSourceData();
}

export class DataSourceData {
  MarketYearCategoryId: number = 0;
  StudySetup: InitialSetup = new InitialSetup();
  HasAttribute: boolean = false;
  Settings: DataGridConfiguration = new DataGridConfiguration();
  UnitOfValues: UnitOfValues[] = [];
  ColumnList: ColumnList[] = [new ColumnList()];
  YearsList: YearsList[] = [new YearsList()];
  DataList: DataList[] = [];
}

export class UnitOfValues {
  Title: string = '';
  Unit: string = '';
  Id: number = 0;
}

export class ColumnList {
  Title: string = '';
  Index: number = 0;
  IsVisible: boolean = true;
}

export class YearsList {
  Year: string = '';
  Type: string = '';
  Index: number = 0;
  AttributeList: AttributeList[] = [];
}

export class AttributeList {
  Title: string = '';
  Index: number = 0;
}

export class DataList {
  ColumnsData: any[] = [];
  YearsData: any[] = [];
  DataRowId: string = '';
  ChangeLog: any = null;
  IsNewRow: boolean = false;
}
