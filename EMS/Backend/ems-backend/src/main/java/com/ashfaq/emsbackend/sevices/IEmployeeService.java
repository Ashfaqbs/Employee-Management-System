package com.ashfaq.emsbackend.sevices;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.entity.Employee;

public interface IEmployeeService {


    EmployeeDTO createEmployee(Employee employee);

}
