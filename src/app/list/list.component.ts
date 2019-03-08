import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: number;
  description: string;
  triggerName: number;
  interimTriggerName: string;
  effectiveDeadlineInfo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 1, description: 'Hydrogen', triggerName: 1.0079, interimTriggerName: 'H', effectiveDeadlineInfo: 'H'},
  {name: 2, description: 'Helium', triggerName: 4.0026, interimTriggerName: 'He', effectiveDeadlineInfo: 'H'},
  {name: 3, description: 'Lithium', triggerName: 6.941, interimTriggerName: 'Li', effectiveDeadlineInfo: 'H'},
  {name: 4, description: 'Beryllium', triggerName: 9.0122, interimTriggerName: 'Be', effectiveDeadlineInfo: 'H'},
  {name: 5, description: 'Boron', triggerName: 10.811, interimTriggerName: 'B', effectiveDeadlineInfo: 'H'},
  {name: 6, description: 'Carbon', triggerName: 12.0107, interimTriggerName: 'C', effectiveDeadlineInfo: 'H'},
  {name: 7, description: 'Nitrogen', triggerName: 14.0067, interimTriggerName: 'N', effectiveDeadlineInfo: 'H'},
  {name: 8, description: 'Oxygen', triggerName: 15.9994, interimTriggerName: 'O', effectiveDeadlineInfo: 'H'},
  {name: 9, description: 'Fluorine', triggerName: 18.9984, interimTriggerName: 'F', effectiveDeadlineInfo: 'H'},
  {name: 10, description: 'Neon', triggerName: 20.1797, interimTriggerName: 'Ne', effectiveDeadlineInfo: 'H'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  items = [1, 2, 3, 4, 6, 7]
  displayedColumns: string[] = ['name', 'description', 'triggerName', 'interimTriggerName', 'effectiveDeadlineIntro', 'empty'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
