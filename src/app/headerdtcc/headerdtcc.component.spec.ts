import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdtccComponent } from './headerdtcc.component';

describe('HeaderdtccComponent', () => {
  let component: HeaderdtccComponent;
  let fixture: ComponentFixture<HeaderdtccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderdtccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderdtccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
