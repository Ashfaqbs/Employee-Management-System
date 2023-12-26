package com.ashfaq.emsbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Employee {

    private long id;
    private String firstName;
    private String  lastName;

    private String email;

}
