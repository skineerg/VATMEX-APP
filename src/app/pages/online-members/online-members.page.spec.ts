import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlineMembersPage } from './online-members.page';

describe('OnlineMembersPage', () => {
  let component: OnlineMembersPage;
  let fixture: ComponentFixture<OnlineMembersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
