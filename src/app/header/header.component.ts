import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clickbtneauto:number = 0;
  constructor() { 
    
  }

  ngOnInit(): void {

    $("#btnauto").mouseover( () => {
      if($( window ).width() > 600){
      $("#contitemauto").addClass("show")
      $("#contitemauto").removeClass("hide")
    }
    })
    $("#btnauto").mouseout( () => {
      if($( window ).width() > 600){
      $("#contitemauto").addClass("hide")
      $("#contitemauto").removeClass("show")
    }
    })
    $("#btnauto").on( "click",() => {
      console.log ($( window ).width())
      if($( window ).width() > 600){
      if(this.clickbtneauto==0){
        this.clickbtneauto=1
        $("#contitemauto").attr("show","true")
      }else{
        this.clickbtneauto=0
        $("#contitemauto").attr("show","false")
      }
     }
    })
    
    
    this.posicionarMenu();

    $(window).scroll( () => {
      this.posicionarMenu();
    });
  }
  posicionarMenu() {
    let altura_del_header = $('.navbar').outerHeight(true);
    let altura_del_menu = $('.navbar').outerHeight(true);
    $("#contitemauto").attr("show","false")
    if ($(window).scrollTop() >= altura_del_header) {
      $('.navbar').addClass('fixed');
      $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
      $('.navbar').removeClass('fixed');
      $('.wrapper').css('margin-top', '0');
    }
  }

}

