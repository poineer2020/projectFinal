import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereditProfileComponent } from './manageredit-profile.component';

describe('ManagereditProfileComponent', () => {
  let component: ManagereditProfileComponent;
  let fixture: ComponentFixture<ManagereditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagereditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagereditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
