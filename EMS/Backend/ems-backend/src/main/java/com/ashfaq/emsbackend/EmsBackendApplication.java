package com.ashfaq.emsbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// This code snippet is the entry point for a Spring Boot application. It uses the @SpringBootApplication annotation to configure and start the application. The main method runs the application by calling SpringApplication.run().
@SpringBootApplication
public class EmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);
	}
} 