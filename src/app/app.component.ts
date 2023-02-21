import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dali-test-2';
  name = "Nombre del producto que mostraremos."
  image = "https://res.cloudinary.com/dalidesignsystem/image/upload/v1653922649/storybook-assests/card-product/4508206_Marquesita_Vainilla_nbgkbc.jpg"
  description = "Detalle de peso/unidad"
  price = 17.44
  discountPrice	= 0.58
  stock = 254
  width = "188px"
  isOpen = false
  
  buttonAlert(){
    this.isOpen = !this.isOpen
  }

}
