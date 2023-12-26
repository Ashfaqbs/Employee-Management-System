package com.ashfaq.emsbackend.entity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity

public class Employee {

    private long id;
    private String firstName;
    private String  lastName;

    private String email;

}
