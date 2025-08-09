package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;


    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printServiceMessage() {
        System.out.println("Inside Book Service");
        if (bookRepository != null) {
            bookRepository.printRepoMessage();
        } else {
            System.out.println("Repository is null!");
        }
    }
}