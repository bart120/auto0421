import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    brands: Array<any> = [];
    //private servBrand: BrandService;

    constructor(private servBrand: BrandService) {
        //this.servBrand = servBrand;
    }

    ngOnInit(): void {
        /*this.brands = [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];*/
        this.brands = this.servBrand.getBrands();
    }
}
