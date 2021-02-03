import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacraxModalComponent } from './macrax-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MacraxModalComponent],
    exports: [MacraxModalComponent]
})
export class MacraxModalModule { }