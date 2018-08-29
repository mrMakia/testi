import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { SharedService } from '../../shared/services/shared.service';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let service = new SharedService();
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ],
      providers: [SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new SharedService();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create ParentComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an app-child tag', async(() => {
    expect(compiled.querySelector('app-child')).not.toEqual(null);
  }));

  it('should have text in h4 tag', async(() => {
    expect(compiled.querySelector('h4').textContent).toContain('This is parent component');
  }));

  it('Will have @ViewChild defined', async(() => {
    expect(fixture.componentInstance.child).toBeDefined();
  }));

  it(`should have the parentMessage 'message from parent'`, async(() => {
    expect(component.parentMessage).toEqual('message from parent');
    expect(typeof component.secoundParentMessage).toEqual('string');
  }));

  it(`should have propery secoundParentMessage 'Secound parent message to child'`, async(() => {
    expect(component.secoundParentMessage).toEqual('Secound parent message to child');
    expect(typeof component.secoundParentMessage).toEqual('string');
  }));

  it('SharedService should be injected to parent component', async(() => {
    expect(service).toBeTruthy();
  }));

  it('should call ngAfterViewInit() ones', async(() => {
    spyOn(component, 'ngAfterViewInit');
    component.ngAfterViewInit();
    expect(component.ngAfterViewInit).toHaveBeenCalled();
    expect(component.ngAfterViewInit).toHaveBeenCalledTimes(1);
  }));

  it('should call deleteMessage() ones', async(() => {
    spyOn(component, 'deleteMessage');
    component.deleteMessage();
    expect(component.deleteMessage).toHaveBeenCalled();
    expect(component.deleteMessage).toHaveBeenCalledTimes(1);
  }));

  it('should call ngOnInit() ones', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  }));
});
