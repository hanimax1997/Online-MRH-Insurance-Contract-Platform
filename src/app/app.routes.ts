import { Routes } from '@angular/router';
import { MrhComponent } from './components/mrh/mrh.component';
import { AuthguardService } from './core/services/authguard.service';

export const routes: Routes = [
    {
        path: "",
        component: MrhComponent
    }
];