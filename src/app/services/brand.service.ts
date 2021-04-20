import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BrandModel } from "../models/brand.model";

@Injectable({ providedIn: 'root' })
export class BrandService {

    constructor(private http: HttpClient) { }

    getBrands(): Array<BrandModel> {
        /*return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];*/

        this.http.get(environment.urlBrand);


        return [];
    }
}