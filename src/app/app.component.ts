import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';


register();

@Component({
  selector: 'app-root',
  imports: [],
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
          bodyEn: "Faculty Of Computers and Informatics.  Ismailia <br>  BSc of information systems, Suez Canal University.",
          bodyAr: "بكالوريوس نظم المعلومات، جامعة قناة السويس"
        },
        {
          bodyEn: "Information Technology Institute <br>   (ITI) CAIRO, Smart Village Java Enterprise and Web Applications 9-Month Diploma",
          bodyAr: ""
        }
      ]
    },

    {
      titleEn: "Work",
      titleAr: "",
      bodydata: [
        {
          bodyEn: " Globisoft Java Developer  <br>Designed and developed robust and scalable web applications using Spring Boot framework, adhering to best practices and coding standards",
          bodyAr: ""
        }
      ]

    }

  ]


  workData = [
    {
      imageList: [
        {
          urlSrc: 'E_invoice.png'
        }

      ],
      titleEn: "E_invoice And E_RECEIPTS web application",
      titleAr: "تطبيق ويب للفواتير والإيصالات الإلكترونية",
      bodyEn: "current A backend web application for E-Invoice and E-Receipts using Spring Boot, facilitating seamless integration with the Tax System (ETA) ,submission of electronic receipts and invoices . Implemented features for returning receipts , canceling, and rejecting invoices .",
      bodyAr: "تطوير تطبيق ويب للجزء الخلفي (Backend) خاص بالفواتير والإيصالات الإلكترونية باستخدام Spring Boot، مع تمكين التكامل السلس مع مصلحة الضرائب المصرية (ETA). تم تنفيذ خصائص لإرسال الفواتير والإيصالات الإلكترونية، بالإضافة إلى خصائص لإرجاع الإيصالات وإلغاء ورفض الفواتير."

    },
    {
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
      titleEn: "Almongez ERP web application — POS",
      titleAr: "",
      bodyEn: "Web application for point-of-sale system used to facilitate sales transactions, process payments, and manage inventory. Allows businesses to create and manage sales transactions, including adding products to the sale, applying discounts or promotions, and calculating totals. Tracks inventory levels in real-time . updates stock quantities each sale, generates inventory reports, and sends alerts for low stock levels. Supports various payment methods, such as cash, credit cards, loyalty points.",
      bodyAr: ""
    },
    {
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
      titleEn: "Bloom Website — Real Estate website",
      titleAr: "",
      bodyEn: "A Real estate website displays properties and their information. Allows users to search for properties based on various criteria such as location, property usage, and developer. Include advanced search filters to help users narrow down their property search based on specific requirements like price range, property type, size, number of bedrooms, bathrooms, etc.",
      bodyAr: ""
    },
    {
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
      titleEn: "Menu (View-Dining-Delivery) Website",
      titleAr: "",
      bodyEn: "A platform for restaurant owners that enables them to display the restaurant’s menu in the form of an electronic menu that can be accessed from anywhere through the menu’s QR code. Customers can place an order through the menu with ease, whether from home (delivery) or inside the restaurant based on the table number (dine in) or takeaway orders.",
      bodyAr: ""
    },
    {
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
      titleEn: "E-commerce Carpets Website",
      titleAr: "",
      bodyEn: "Online platform designed for buying carpets.<br> Listing provides comprehensive details about the product. The website incorporates a shopping cart system where customers can add carpets to their cart and proceed to the checkout process. During checkout, customers provide shipping details, select payment methods, and complete the purchase.",
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



  openlinkend() {
    window.open('https://www.linkedin.com/in/esraa-salah-3a32a3b1/', '_blank');

  }


  downloadCV() {
    const link = document.createElement('a');
    link.href = 'Esraa Salah _Cv.pdf';
    link.download = 'EsraaSalah-CV.pdf';
    link.click();
  }
}
