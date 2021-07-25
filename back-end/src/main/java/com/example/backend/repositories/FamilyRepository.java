package com.example.backend.repositories;

import com.example.backend.models.FamilyEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FamilyRepository extends MongoRepository<FamilyEntity,String> {


}
