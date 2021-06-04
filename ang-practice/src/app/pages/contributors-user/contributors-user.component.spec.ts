import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsUserComponent } from './contributors-user.component';

describe('ContributorsUserComponent', () => {
  let component: ContributorsUserComponent;
  let fixture: ComponentFixture<ContributorsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
