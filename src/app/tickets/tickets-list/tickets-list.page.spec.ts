import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsListPage } from './tickets-list.page';

describe('TicketsListPage', () => {
  let component: TicketsListPage;
  let fixture: ComponentFixture<TicketsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
