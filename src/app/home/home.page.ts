import { Component } from '@angular/core';
import {Firestore,collection,doc,setDoc }from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  tableled1 : any;
  tableled2 : any;
  tableled3 : any;
  
  clBtn1I: boolean = false;
  clBtn1D: boolean = false;
  clBtn2I: boolean = false;
  clBtn2D: boolean = false;
  clBtn3I: boolean = false;
  clBtn3D: boolean = false;
  clBtnAllI: boolean=false;
  clBtnAllD: boolean=false;
  
  constructor(private db:Firestore) {

  }
  async encender(){
    this.tableled1= doc(this.db,'controlLED','LED1');
    this.clBtn1I=true;
    this.clBtn1D=false;
    await setDoc(this.tableled1, { encender: true });//para encender
  }

  async apagar(){
    this.tableled1= doc(this.db,'controlLED','LED1');
    this.clBtn1D=true;
    this.clBtn1I=false;
    await setDoc(this.tableled1, { apagar: false });//para apagar
  }

  async encender2(){
    this.tableled2= doc(this.db,'controlLED','LED2');
    this.clBtn2I=true;
    this.clBtn2D=false;
    await setDoc(this.tableled2, { encender2: true });//para encender

  }

  async apagar2(){
    this.tableled2= doc(this.db,'controlLED','LED2');
    this.clBtn2D=true;
    this.clBtn2I=false;
    await setDoc(this.tableled2, { apagar2: false });//para apagar
  }

  async encender3(){
    this.tableled3= doc(this.db,'controlLED','LED3');
    this.clBtn3I=true;
    this.clBtn3D=false;
    await setDoc(this.tableled3, { encender3: true });//para encender

  }

  async apagar3(){
    this.tableled3= doc(this.db,'controlLED','LED3');
    this.clBtn3D=true;
    this.clBtn3I=false;
    await setDoc(this.tableled3, { apagar3: false });//para apagar
  }

  async encenderAll(){
    this.tableled1= doc(this.db,'controlLED','LED1');
    await setDoc(this.tableled1, { encender: true });//para encender
    this.tableled2= doc(this.db,'controlLED','LED2');
    await setDoc(this.tableled2, { encender2: true });//para encender
    this.tableled3= doc(this.db,'controlLED','LED3');
    await setDoc(this.tableled3, { encender3: true });//para encender

    this.clBtn1I=true;
    this.clBtn1D=false;
    this.clBtn2I=true;
    this.clBtn2D=false;
    this.clBtn3I=true;
    this.clBtn3D=false;

    this.clBtnAllI=true;
    this.clBtnAllD=false;

  }

  async apagarAll(){
    this.tableled1= doc(this.db,'controlLED','LED1');
    await setDoc(this.tableled1, { encender: false });//para encender
    this.tableled2= doc(this.db,'controlLED','LED2');
    await setDoc(this.tableled2, { encender2: false });//para encender
    this.tableled3= doc(this.db,'controlLED','LED3');
    await setDoc(this.tableled3, { encender3: false });//para encender

    this.clBtn1D=true;
    this.clBtn1I=false;
    this.clBtn2D=true;
    this.clBtn2I=false;
    this.clBtn3D=true;
    this.clBtn3I=false;

    this.clBtnAllD=true;
    this.clBtnAllI=false;
  }

  colorBoton1I (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "secondary";
    }
  }
  
  colorBoton1D (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "secondary";
    }
  }

  colorBoton2I (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "secondary";
    }
  }
  
  colorBoton2D (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "secondary";
    }
  }


  colorBoton3I (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "secondary";
    }
  }
  
  colorBoton3D (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "secondary";
    }
  }

  colorBotonAllI (state: boolean):string{
    if(state){
      return "success";
    }else{
      return "secondary";
    }
  }
  
  colorBotonAllD (state: boolean):string{
    if(state){
      return "danger";
    }else{
      return "secondary";
    }
  }

  async saveStateData(){
    const docref = doc(this.db,"controlLED", 'LED1');
    const snap = await getDoc(docref);
    if(snap.exists()){
      this.clBtn1D=snap.data()['encender'];
    }
  }

}

 