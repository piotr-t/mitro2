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
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  tel: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{6,}') ]),
  email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  woj: new FormControl(''),
  message: new FormControl(''),
  zgoda: new FormControl(false, Validators.requiredTrue)
});

get firstName(): any { return this.messageForm.get('firstName'); }
get lastName(): any { return this.messageForm.get('lastName'); }
get tel(): any { return this.messageForm.get('tel'); }
get email(): any { return this.messageForm.get('email'); }
get zgoda(): any { return this.messageForm.get('zgoda'); }

  constructor(private http: HttpClient) { }
  options = {
    iconsTemplate: 'font_awesome_5',
    charCounterCount: false,

    toolbarButtons:   {
      moreText: {
        // List of buttons used in the  group.
        buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],

        // Alignment of the group in the toolbar.
        align: 'left',

        // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
        buttonsVisible: 10
      },


      moreParagraph: {
        buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
        align: 'left',
        buttonsVisible: 3
      },

      moreRich: {
        buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
        align: 'left',
        buttonsVisible: 3
      },

      moreMisc: {
        buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
        align: 'right',
        buttonsVisible: 2
      }
    },

// Change buttons for XS screen.
toolbarButtonsXS: [['undo', 'redo'], ['bold', 'italic', 'underline']]
  };


  ngOnInit(): void {
    this.messageForm.valueChanges.subscribe(a => {
      console.log(a);
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
    if (this.messageForm.status === 'VALID'){
      console.log('this.files1', this.files1);
      const f = this.files1.map(e => {
                                      const fd = new FormData();
                                      fd.append('download', e, e.name);
                                      console.log('e', fd);
                                      return fd; });

      from(f).pipe(endWith(this.messageForm.value), endWith({ok : true}),
      mergeMap(a => this.http.post('https://mail.mitro.com.pl/users', a)))
      .subscribe(d => { console.warn('d', d); });
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
