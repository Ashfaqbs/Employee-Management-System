package com.ashfaq.emsbackend.controller;

import com.ashfaq.emsbackend.dto.EmployeeDTO;
import com.ashfaq.emsbackend.sevices.IEmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/employees/")

public class EmployeeController {

    private IEmployeeService employeeService;
    // Note:
//    We have autowired a interface and called its method and in run time its implementation
//    class i.e EmployeeServiceimpl will be called

    //Autowiring with the constructor
    public EmployeeController(IEmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //Build Add Employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDTO>creteEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
       EmployeeDTO employeeDTO1=  employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(employeeDTO1, HttpStatus.CREATED);
    }

    //Build Get Employee REST API
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDTO>getEmployeeById(@PathVariable long id)
    {
        EmployeeDTO employeeDTO1=  employeeService.getEmployeeById(id);
        return new ResponseEntity<>(employeeDTO1, HttpStatus.OK);
    }
    @GetMapping("/")
    public ResponseEntity<List<EmployeeDTO>>getAllEmployees()
    {
        List<EmployeeDTO> employeeDTO1=  employeeService.getAllEmployee();
        return new ResponseEntity<>(employeeDTO1, HttpStatus.OK);
    }
    //Note when we ere returning HttpStatus.Found i.e status code will be 302 and for the above get and getall emp API's
    //we are giving this and while calling from frontEnd , using fetch we were able to get the data and render in UI
    //but when using Axios and calling this we were not able to get the data and it we going in catch block and in error of catch block we were seeing like
//error :
//    AxiosError {message: 'Request failed with status code 302', name: 'AxiosError', config: {…}, request: XMLHttpRequest, response: {…}, …}
//    config
//:
//    {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
//    message
//:
//        "Request failed with status code 302"
//    name
//:
//        "AxiosError"
//    req
//    and to fix this we returned status code as OK , and data started rendering in UI , so AXIOS , need to be careful and need to share 200 status code from Backend




    //Build update employee Rest API
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployeeById(@PathVariable("id") long id, @RequestBody EmployeeDTO employeeDTO)
    {
          EmployeeDTO updatedEmployeeDTO = employeeService.updateEmployee(id,employeeDTO);
          return ResponseEntity.ok(updatedEmployeeDTO);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") long id)
    {
         employeeService.deleteByIdEmployee(id);
        return  ResponseEntity.ok("Employee Deleted Successfully : "+ id);
    }


}
