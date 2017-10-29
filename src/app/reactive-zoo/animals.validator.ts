import { FormArray, AbstractControl } from '@angular/forms';

export const AnimalsValidator = (control: AbstractControl): { [key: string]: boolean } => {
    const animals = (control.get('animals') as FormArray).value;
    return animals.length ? null : { noAnimals: true };
};
