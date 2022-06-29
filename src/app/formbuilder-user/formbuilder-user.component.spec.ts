import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderUserComponent } from './formbuilder-user.component';

describe('FormbuilderUserComponent', () => {
  let component: FormbuilderUserComponent;
  let fixture: ComponentFixture<FormbuilderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbuilderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
