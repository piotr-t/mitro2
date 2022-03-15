import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { endWith, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-mitro',
  templateUrl: './form-mitro.component.html',
  styleUrls: ['./form-mitro.component.scss']
})
export class FormMitroComponent implements OnInit, AfterViewInit {

@ViewChild('inpp')inp1: ElementRef;
files: any = [];
files1: any = [];

sendd = false;



messageForm = new FormGroup({
  firstName: new FormControl('dd', Validators.required),
  lastName: new FormControl('dd', Validators.required),
  tel: new FormControl('123456', [Validators.required, Validators.pattern('[- +()0-9]{6,}') ]),
  email: new FormControl('troc.piotr@gmail.com', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  woj: new FormControl('dd'),
  message: new FormControl('dd'),
  zgoda: new FormControl(true, Validators.requiredTrue)
});

get firstName(): any { return this.messageForm.get('firstName'); }
get lastName(): any { return this.messageForm.get('lastName'); }
get tel(): any { return this.messageForm.get('tel'); }
get email(): any { return this.messageForm.get('email'); }
get zgodaa(): any { return this.messageForm.get('zgoda'); }

controls = [
  {text: 'Imię*', name: 'firstName'},
  {text: 'Nazwisko/Nazwa firmy*', name: 'lastName'},
  {text: 'Telefon*', name: 'tel'},
  {text: 'e-mail*', name: 'email'},
  {text: 'Województwo', name: 'woj'}];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.messageForm.valueChanges.subscribe(a => {
      console.log("a",a);
    });
  }



  dodajZal(): void{
    this.inp1.nativeElement.click();
  }

  delete(i): void{
    this.files.splice(i, 1);
    this.files1.splice(i, 1);
  }

  ngAfterViewInit(): void{
// console.log('inp1', this.inp1);

  }








  send(): void{

    this.sendd = true;
    console.log(this.messageForm.status);

    if (this.messageForm.status === 'VALID'){
      this.sendd = false;
      console.log('this.files1', this.files1);
      const f = this.files1.map(e => {
                                      const fd = new FormData();
                                      fd.append('download', e, e.name);
                                      console.log('e', fd);
                                      return fd; });

      from(f).pipe(endWith(this.messageForm.value ), endWith({ok : true}),
      mergeMap(a => this.http.post('./users', a )))
      .subscribe(
        {
          next(x): void { console.log('got value ' + x); },
          error(err): void { console.error('something wrong occurred: ' + err); },
          complete(): void {
            this.files1 = [];
            this.files = []; }
        }
);
    }

  }

  view(e: any): void{


  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < e.length; i++) {

    this.files.push(e[i].name);
    this.files1.push(e[i]);

  }



  console.log('inprr', e);


  }

}


