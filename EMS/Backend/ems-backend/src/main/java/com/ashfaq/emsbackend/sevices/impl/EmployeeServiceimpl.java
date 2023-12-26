package com.ashfaq.emsbackend.sevices.impl;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.dto.EmployeeMapper;
import com.ashfaq.emsbackend.entity.Employee;
import com.ashfaq.emsbackend.repository.EmployeeRepository;
import com.ashfaq.emsbackend.sevices.IEmployeeService;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceimpl implements IEmployeeService {

private EmployeeRepository employeeRepository;

    public EmployeeServiceimpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

        Employee employee= EmployeeMapper.mapToEmployee(employeeDTO);
        employeeRepository.save(employee);
        return null;
    }
}
