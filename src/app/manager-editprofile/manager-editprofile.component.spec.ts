import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEditprofileComponent } from './manager-editprofile.component';

describe('ManagerEditprofileComponent', () => {
  let component: ManagerEditprofileComponent;
  let fixture: ComponentFixture<ManagerEditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerEditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
