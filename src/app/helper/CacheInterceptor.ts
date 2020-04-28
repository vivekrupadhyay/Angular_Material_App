import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const httpRequest=req.clone({
            headers:new HttpHeaders({
                'Cache-Control':'no-cache',
                'Pragma':'no-cache',
                'Expires':'Sat, 01 Jan 2000 00:00:00 GMT',
                'Content-Type':'application/json'
            })
        })
        
        return next.handle(httpRequest);
    }
}