package com.portfolio.controller;


import com.portfolio.entity.Contact;
import com.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/submit")
    public ResponseEntity<String> submitContactForm(@RequestBody Contact contact) {
        contactRepository.save(contact);
        return ResponseEntity.ok("Contact form submitted successfully");
    }
}

