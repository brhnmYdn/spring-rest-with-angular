package com.example.rest.service;

import com.example.rest.model.Calculator;
import com.example.rest.repository.DivideRepository;
import com.example.rest.repository.MultiplyRepository;
import com.example.rest.repository.SubtractRepository;
import com.example.rest.repository.SumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    @Autowired
    private MultiplyRepository multiplyRepository;
    @Autowired
    private SubtractRepository subtractRepository;
    @Autowired
    private DivideRepository divideRepository;
    @Autowired
    private SumRepository sumRepository;

    public float calculate(Calculator calculator){

        switch (calculator.getOperation()){
            case "+":
              return  sumRepository.calculate(calculator);
            case "-":
                return subtractRepository.calculate(calculator);
            case "/":
                return divideRepository.calculate(calculator);
            case "*":
               return multiplyRepository.calculate(calculator);
            default:
                return 0 ;
        }
    }
}
