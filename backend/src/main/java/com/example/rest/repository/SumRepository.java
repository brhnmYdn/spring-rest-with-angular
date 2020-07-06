package com.example.rest.repository;

import com.example.rest.model.Calculator;
import org.springframework.stereotype.Repository;

@Repository
public class SumRepository implements BaseRepository{
    @Override
    public float calculate(Calculator calculator) {
        return Float.parseFloat(calculator.getNumberOne()) + Float.parseFloat(calculator.getNumberTwo());
    }
}
