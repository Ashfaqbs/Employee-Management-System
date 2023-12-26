package com.ashfaq.emsbackend.controller;

import com.ashfaq.emsbackend.sevices.IEmployeeService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {

    private IEmployeeService employeeService;

    //Autowiring with the constructor
    public EmployeeController(IEmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    


}
