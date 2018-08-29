import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SharedService } from '../../shared/services/shared.service';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let service = new SharedService();
  let compiled: any;
  let button: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      providers: [ SharedService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    button = fixture.debugElement.query(By.css('button'));
    service = new SharedService();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text in h4 tag', async(() => {
    expect(compiled.querySelector('h4').textContent).toContain('This is child component');
  }));

  it('@Inputs should be undefined', async(() => {
    expect(fixture.componentInstance.childMessage).toBeUndefined();
    expect(fixture.componentInstance.secoundMessage).toBeUndefined();
  }));

  it('should emit when the button is clicked', () => {
    spyOn(component.messageEvent, 'emit');
    // component.sendMessage();
    button.nativeElement.click();
    expect(component.messageEvent.emit).toHaveBeenCalledTimes(1);
  });

  it('properies should have text value', async(() => {
    expect(typeof component.outputMessage).toEqual('string');
    expect(component.outputMessage).toEqual('Output on click from child');
    expect(typeof component.messageFromChild).toEqual('string');
    expect(component.messageFromChild).toEqual('Message From child');
    expect(typeof component.fromChild).toEqual('string');
    expect(component.fromChild).toEqual('From child');
    expect(typeof component.messageFromChild).toEqual('string');
  }));

  it('SharedService should be injected to parent component', async(() => {
    expect(service).toBeTruthy();
  }));

  it('should call changeMessage on click', () => {
    spyOn(component, 'changeMessage');
    component.changeMessage(); // (click)
    expect(component.changeMessage).toHaveBeenCalled();
  });

  it('should call ngOnInit ones', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  }));
});
