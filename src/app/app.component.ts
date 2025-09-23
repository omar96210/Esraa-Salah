import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import { CommonModule } from '@angular/common';


register();

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {

  title = 'esraaCV';

  abouData = [
    {
      titleEn: "Education",
      titleAr: "",

      bodydata: [
        {
          bodyEn: "B.Sc. in Information Systems  – Suez Canal University, Faculty of Computers and Informatics",
          bodyAr: "بكالوريوس نظم المعلومات، جامعة قناة السويس"
        }
      ]
    },


    {
      titleEn: "Training and Courses",
      titleAr: "",
      bodydata: [
        {
          bodyEn: "ITI 9-Month Diploma in Java Enterprise & Web Applications  –  Cairo, Smart Village",
          bodyAr: ""
        }
      ]

    },

    {
      titleEn: "Work",
      titleAr: "",
      bodydata: [
        {
          bodyEn: "Java Backend Developer at Globisoft – Full Time  <br>Designed and developed robust and scalable web applications using Spring Boot, Spring Data, Spring Security and Mysql adhering to best practices and coding standards",
          bodyAr: ""
        }
      ]

    }

  ]


  workData = [

    {
      Urlherf:"",
      imageList: [
        {
          urlSrc: 'erp/1.png'
        },
        {
          urlSrc: 'erp/2.png'
        },
        {
          urlSrc: 'erp/3.png'
        },
        {
          urlSrc: 'erp/4.png'
        },
        {
          urlSrc: 'erp/5.png'
        },
        {
          urlSrc: 'erp/6.png'
        },
        {
          urlSrc: 'erp/7.png'
        }






      ],
      titleEn: "Almongez ERP web application",
      titleAr: "",
      bodyEn: "An ERP system (Spring Boot, Mysql ) with inventory , purchasing , sales , manufacturing , POS(point of sale)  and other modules.",
      bodyAr: ""
    },
    {
      Urlherf:"https://bloomwealthproperties.com/",
      imageList: [
        {
          urlSrc: 'bloom/1.webp'
        },
        {
          urlSrc: 'bloom/2.webp'
        },
        {
          urlSrc: 'bloom/3.webp'
        }


      ],
      titleEn: "Bloom Website",
      titleAr: "",
      bodyEn: "A Real estate website (SpringBoot, Mysql ) displays properties and their information. Allows users to search for properties based on various criteria.",
      bodyAr: ""
    },
    {
      Urlherf:"https://globisoft.com/",
      imageList: [
        {
          urlSrc: 'globisoft/1.png'
        },
        {
          urlSrc: 'globisoft/2.png'
        },
        {
          urlSrc: 'globisoft/3.png'
        },
        {
          urlSrc: 'globisoft/4.png'
        },
        {
          urlSrc: 'globisoft/5.png'
        },
        {
          urlSrc: 'globisoft/6.png'
        },
        {
          urlSrc: 'globisoft/7.png'
        }
      ],
      titleEn: "Globisoft Website",
      titleAr: "",
      bodyEn: "A website (Spring Boot, Mysql ) that shows all company projects and their features, about us page,contact us and blogs.",
      bodyAr: ""
    },
    {
      Urlherf:"",
      imageList: [
        {
          urlSrc: 'E_invoice.png'
        }

      ],
      titleEn: "E_invoice And E_RECEIPTS web application",
      titleAr: "",
      bodyEn: "A backend web application(SpringBoot, Mysql) for E-Invoice and E-Receipts using Spring Boot, facilitating seamless integration with the Tax System (ETA).",
      bodyAr: ""
    },

    {
    
      Urlherf:"https://digital.menus-and-more.com/plan/2",
      imageList: [
        {
          urlSrc: 'menu/1.png'
        },
        {
          urlSrc: 'menu/2.png'
        },
        {
          urlSrc: 'menu/3.png'
        }

      ],
      titleEn: "Digital Menu website",
      titleAr: "",
      bodyEn: "A platform (Spring Boot, Mysql) for restaurants to make digital menus and QR code. Customers can place an order through the menu with ease.",
      bodyAr: ""
    },
    {
      Urlherf:"https://hsk.menus-and-more.com/plan/2",
      imageList: [
        {
          urlSrc: 'hsk/1.png'
        },
        {
          urlSrc: 'hsk/2.png'
        },
        {
          urlSrc: 'hsk/3.png'
        }

      ],
      titleEn: "HSK website",
      titleAr: "",
      bodyEn: "Online platform(Spring Boot, Mysql) designed for  carpets stores.",
      bodyAr: ""
    }

  ]



  ngOnInit() {


  }

  openGmail() {
    window.open('mailto:esraasalah937@gmail.com', '_blank');
  }

  openWhatsapp() {
    window.open(`https://wa.me/+201060866571`, '_blank');
  }


  openLink(link:any) {
    if(link){
    window.open(`${link}`, '_blank');
    }

  }


  openlinkend() {
    window.open('https://www.linkedin.com/in/esraa-salah-3a32a3b1/', '_blank');

  }


  downloadCV() {
    const link = document.createElement('a');
    link.href = 'Esraa-Salah _Cv.pdf';
    link.download = 'Esraa-Salah _Cv.pdf';
    link.click();
  }
}
