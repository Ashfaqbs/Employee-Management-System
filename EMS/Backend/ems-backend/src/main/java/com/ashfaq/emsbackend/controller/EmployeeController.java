package com.ashfaq.emsbackend.controller;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.entity.Employee;
import com.ashfaq.emsbackend.sevices.IEmployeeService;
import com.ashfaq.emsbackend.sevices.impl.EmployeeServiceimpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/employees")
public class EmployeeController {

    private EmployeeServiceimpl employeeService;

    //Autowiring with the constructor
    public EmployeeController(EmployeeServiceimpl employeeService) {
        this.employeeService = employeeService;
    }

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDTO>creteEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
       EmployeeDTO employeeDTO1=  employeeService.createEmployee(employeeDTO);
        return new ResponseEntity(employeeDTO1, HttpStatus.CREATED);
    }


}
