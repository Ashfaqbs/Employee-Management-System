package com.ashfaq.emsbackend.sevices;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.entity.Employee;

import java.util.List;

public interface IEmployeeService {


    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(long id);

    List<EmployeeDTO> getAllEmployee();

    EmployeeDTO updateEmployee(Long emplId,EmployeeDTO employeeDTO);

}
