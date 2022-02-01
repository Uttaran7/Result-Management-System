package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Education;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EducationRepository;
import net.javaguides.springboot.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EducationController {
	@Autowired
	private EducationRepository educationrepository;
	
	// get all employees
	@GetMapping("/education")
	public List<Education> getEducationList(){
		System.out.println("in spring");
		return educationrepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/education")
	public Education createEmployee(@RequestBody Education education) {
		
		return educationrepository.save(education);
	}
	
	// get employee by id rest api
	@GetMapping("/education/{id}")
	public ResponseEntity<Education> getEmployeeById(@PathVariable Long id) {
		Education education = educationrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(education);
	}
	
	// update employee rest api
	
	@PutMapping("/education/{id}")
	public ResponseEntity<Education> updateEmployee(@PathVariable Long id, @RequestBody Education education){
		Education education1 = educationrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		education1.setBtech(education.getBtech());
		education1.setMtech(education.getMtech());
		education1.setSecondary(education.getSecondary());

		Education updatedEducation = educationrepository.save(education);
		return ResponseEntity.ok(updatedEducation);
	}
	
	// delete employee rest api
//	@DeleteMapping("/employees/{id}")
//	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
//		Employee employee = employeeRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
//		
//		employeeRepository.delete(employee);
//		Map<String, Boolean> response = new HashMap<>();
//		response.put("deleted", Boolean.TRUE);
//		return ResponseEntity.ok(response);
//	}
}
