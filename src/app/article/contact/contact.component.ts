import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  pobierz(): void{
    this.http.post('http://localhost:3000/users', {post: {ok: 'ok'}}, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/png')
    }).subscribe((a: any) => {
      const pdf = new Blob(a.data, { type: 'application/png' });
      console.log(pdf);
    });
  }

  ngOnInit(): void {
  }

}
