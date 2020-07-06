package com.example.rest.controller;


import com.example.rest.model.Calculator;
import com.example.rest.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = "/api")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @RequestMapping(value = "/calculate",   method = RequestMethod.POST)
    public ResponseEntity<Calculator> calculate(@RequestBody Calculator calculator){

        calculator.setResult(String.valueOf(calculatorService.calculate(calculator)));
        return ResponseEntity.ok().body(calculator);
    }
}
