import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchooseComponent } from './userchoose.component';

describe('UserchooseComponent', () => {
  let component: UserchooseComponent;
  let fixture: ComponentFixture<UserchooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserchooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserchooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
