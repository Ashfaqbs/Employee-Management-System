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
import java.util.stream.Collectors;

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
                orElseThrow(
                        () -> new ResourceNotFoundException("Employee with ID: " + id +" is not found in DB")
                );
        return EmployeeMapper.mapToEmployeeDTO(employee);
    }

//    @Override
//    public List<EmployeeDTO> getAllEmployee() {
//        List<Employee> employees=  employeeRepository.findAll();
//
//        return employees.parallelStream().map(data -> EmployeeMapper.mapToEmployeeDTO(data)).
//                collect(Collectors.toList());
//    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> employees=  employeeRepository.findAll();

        return employees.parallelStream().map(EmployeeMapper::mapToEmployeeDTO)
                .toList();
    }

    @Override
    public EmployeeDTO updateEmployee(Long emplId, EmployeeDTO employeeDTO) {

        Employee employee = employeeRepository.findById(emplId).orElseThrow(()-> new ResourceNotFoundException("Employee with id : "+ emplId +" is not found"));
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employee.getLastName());
        employee.setEmail(employee.getEmail());
    }

}
