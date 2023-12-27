package com.ashfaq.emsbackend.sevices.impl;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.dto.EmployeeMapper;
import com.ashfaq.emsbackend.entity.Employee;
import com.ashfaq.emsbackend.exception.ResourceNotFoundException;
import com.ashfaq.emsbackend.repository.EmployeeRepository;
import com.ashfaq.emsbackend.sevices.IEmployeeService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class EmployeeServiceimpl implements IEmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeServiceimpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(employee);
    }

    @Override
    public EmployeeDTO getEmployeeById(long id) {
        Employee employee = employeeRepository.findById(id).
                or(() -> ResourceNotFoundException("Employee with ID: " + id +" is not found in DB"));
        return EmployeeMapper.mapToEmployeeDTO(employee);
    }

    @Override
    public List<Employee> getAllEmployeeById() {
      List<Employee> employees=  employeeRepository.findAll();
        return employees.isEmpty() ? new ArrayList<>() : employees;
    }


}
