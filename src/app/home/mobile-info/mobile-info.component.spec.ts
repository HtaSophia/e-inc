import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInfoComponent } from './mobile-info.component';

describe('MobileInfoComponent', () => {
    let component: MobileInfoComponent;
    let fixture: ComponentFixture<MobileInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MobileInfoComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
