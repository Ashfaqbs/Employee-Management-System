package com.ashfaq.emsbackend.controller;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.entity.Employee;
import com.ashfaq.emsbackend.sevices.IEmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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

    //Build Add Employee REST API
    public ResponseEntity<EmployeeDTO>creteEmployee(EmployeeDTO employeeDTO)
    {
       EmployeeDTO employeeDTO1=  employeeService.createEmployee(employeeDTO);
        return new ResponseEntity(employeeDTO1, HttpStatus.CREATED);
    }


}
