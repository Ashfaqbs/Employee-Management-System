package com.ashfaq.emsbackend.dto;

import com.ashfaq.emsbackend.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO mapToEmployeeDTO(Employee employee)
    {


        return new EmployeeDTO(
          employee.getID(),employee
        );
    }
}
