import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Employee } from "../../models/employee";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeService {

    constructor(@Inject('EMPLOYEE_URL_TOKEN') private _url: string, private _http: HttpClient) { }

    getEmployee(): Observable<Employee[]> {
        return this._http.get<Employee[]>(this._url)
    }


}