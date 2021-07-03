import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/**
 * gayathri
 */

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor() { }
  /**
   * form group
   */
  public quoteForm: FormGroup = new FormGroup({});

  // submit
  public isSubmitted:boolean=false;

  //email regx
  public emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  //quote submit
  public quoteSubmit:boolean=false;


  ngOnInit(): void {
    this.quoteForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]+\s?)*$/), Validators.minLength(2), Validators.maxLength(25)]),
      contactNo:new FormControl('', [Validators.required, Validators.pattern('^[0-9.-]*$'), Validators.maxLength(10), Validators.minLength(10)]),
      userEmail:new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      });
    }

    /**
     * quote from
     */

    public submitQuote():void{
      this.isSubmitted=true;
      this.quoteSubmit=false;
    //  console.log(this.quoteForm.value);
      if(this.quoteForm.valid){
        this.isSubmitted=false;
        this.quoteSubmit=true;
        console.log(this.quoteForm.value);
        this.quoteForm.reset();
      
      }
    }
  }

