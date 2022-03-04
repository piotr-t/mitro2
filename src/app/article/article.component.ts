import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  items = [
    'Budowa i modernizacja instalacji gazowych, centralnego ogrzewania, wodociągowych, kanalizacyjnych',
    'Wentylacja z odzyskiem ciepła (rekuperacja)',
    'Montaż instalacji sanitarnych',
    'Usługi spawalnicze',
    'Ogrzewanie hal i magazynów',
'Montaż nagrzewnic i nawiewów',
'Doprowadzenie wody do celów sanitarnych i przeciwpożarowych',
'Ogrzewanie podłogowe i grzejnikowe',
'Montaż zasobników wody',
'Montaż zbiorników na paliwo płynne',
'Układy rekuperacji i pompy ciepła',
'Usługi spawalnicze',
'Pełna instalacja wodno-kanalizacyjna i gazowa',
'Kompleksowe instalacje w budynkach nowych i istniejących. Instalacje dla lokali użytkowych, hoteli i sklepów.',
'Montaż kontrukcji stalowych',
'Odprowadzanie wody opadowej',
'Montaż instalacji gazowych. Doprowadzenie gazu do budynku. Rozprowadzenie instalacji. Podłaczenie odbiorników.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
