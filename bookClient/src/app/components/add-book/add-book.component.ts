import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  book: Book = {
    title: '',
    description: '',
    author:'',
    price:0,
    note:0
  };
  submitted = false;

  constructor(private bookService: BookService) { }

  saveBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description,
      author: this.book.author,
      price: this.book.price,
      note: this.book.note

    };

    this.bookService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      description: '',
      author:'',
      price:0,
      note:0
      
    };
  }

}