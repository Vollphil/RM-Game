package com.Philip.RMGame.Repository;

import com.Philip.RMGame.data.enums.CompanyName;
import com.Philip.RMGame.data.table.ComputerCompany;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComputerCompanyRepository extends JpaRepository<ComputerCompany,Long> {
    ComputerCompany findByCompanyName(CompanyName companyName);
}
