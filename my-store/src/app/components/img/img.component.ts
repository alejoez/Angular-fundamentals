import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/not_found.jpg';

  constructor() {
    //it create the instance to build the component
    //before render
    //No async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  };
  
  ngOnChanges(): void {
    //before render
    //it update the changes in the inputs -- run many times, each time when we change the inputs
    console.log('ngOnchanges', 'imgValue=>', this.img);
  }

  ngOnInit(){
    //before render
    //run in async form and just one time
    console.log('ngOnInit', 'imgValue=>', this.img);
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }
  
  ngOnDestroy(){
    //delete the component
    console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log("Log child");
    this.loaded.emit(this.img);
  }

  

}
