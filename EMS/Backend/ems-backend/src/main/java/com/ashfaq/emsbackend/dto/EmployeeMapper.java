package com.ashfaq.emsbackend.dto;

import com.ashfaq.emsbackend.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO mapToEmployeeDTO(Employee employee) {


        return new EmployeeDTO(
                employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail());
    }


    public static Employee mapToEmployee(EmployeeDTO employeeDTO) {


        return new EmployeeDTO(
                employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail());
    }
}
