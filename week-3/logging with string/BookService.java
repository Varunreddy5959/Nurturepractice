package com.library.service;

import org.springframework.stereotype.Service;

@Service
public class BookService {

    public void addBook() {
        try {
            Thread.sleep(500); // Simulate processing
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Book added!");
    }
}