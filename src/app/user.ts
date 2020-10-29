import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
// export class User {
//     firmName: string
//     password: string
//     password2: string
//     email: string
//     phone: number
// } 
export function passwordMatchValidator(control:AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
        const password2Value = control.value;
        const passControl = control.root.get('password');
        if(passControl){
            const passValue = passControl.value;
            if(passValue !== password2Value){
                return {
                    isError : true
                };
            }
        }
    }
    return null;
}
