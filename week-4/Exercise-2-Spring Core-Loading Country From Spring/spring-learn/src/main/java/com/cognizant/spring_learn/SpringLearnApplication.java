package com.cognizant.springlearn;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) throws Exception {
		SpringApplication.run(SpringLearnApplication.class, args);
		LOGGER.info("Application Started");

		displayDate();
		displayCountry();
		displayCountries();

		LOGGER.info("Application Ended");
	}

	public static void displayDate() throws Exception {
		LOGGER.info("START: displayDate()");
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = (SimpleDateFormat) context.getBean("dateFormat", SimpleDateFormat.class);
		String dateString = "31/12/2018";
		Date date = format.parse(dateString);
		LOGGER.debug("Parsed Date: {}", date);
		LOGGER.info("END: displayDate()");
	}

	public static void displayCountry() {
		LOGGER.info("START: displayCountry()");
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("country", Country.class);
		LOGGER.debug("Country: {}", country);

		// Singleton/prototype demonstration
		Country anotherCountry = (Country) context.getBean("country", Country.class);
		LOGGER.debug("Another Country instance: {}", anotherCountry);

		LOGGER.info("END: displayCountry()");
	}

	@SuppressWarnings("unchecked")
	public static void displayCountries() {
		LOGGER.info("START: displayCountries()");
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		List<Country> countryList = (List<Country>) context.getBean("countryList", List.class);
		for (Country c : countryList) {
			LOGGER.debug("Country in List: {}", c);
		}
		LOGGER.info("END: displayCountries()");
	}
}
