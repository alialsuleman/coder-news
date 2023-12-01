# Introduction:

Greetings!

I'm Ali, a passionate software engineer, and I'm thrilled to share insights into my latest project. In this venture, I delved into the intricacies of not just building software but understanding the underlying techniques, logic, and algorithms that power it. Yes, there might have been instances of "reinventing the wheel," but for me, the essence lies in comprehending how something works before mastering its application.


# Project Overview:

In this space, I'll walk you through the techniques employed, the logic woven into the code, and the algorithms strategically chosen to breathe life into this project. Each line of code reflects a decision aimed at making the application not just functional but also maintainable, expandable, and easily upgradeable.

Philosophy of Development:

I firmly believe that true mastery comes not just from creating functional software but from crafting solutions that stand the test of time. Therefore, I'll share insights into how I ensured the application's effectiveness extends beyond its immediate use, fostering an environment of maintainability, scalability, and adaptability.

Let's embark on this journey together, exploring the inner workings of a project where every line of code is a conscious choice towards building a robust, forward-looking software solution.



## Database Design and Optimization (SQLite, 3NF, DAO) :


In the heart of my project lies a meticulously crafted database, designed with a focus on optimization, maintainability, and security. Let's dive into the key aspects that define the backbone of this system.

### Database Design:

Implemented a Third Normal Form (3NF) design for the database schema, optimizing data organization and minimizing redundancy.
Utilized 3NF to ensure data integrity and reduce anomalies, resulting in a robust and maintainable database structure.
### Database Technology:

Employed SQLite as the database management system, chosen for its lightweight nature and suitability for embedded systems.
Leveraged SQLite's features for efficient storage, transactions, and ease of integration with the application.

### Data Access Layer (DAO) Pattern:

Implemented the Data Access Object (DAO) pattern to abstract the database interactions, promoting a modular and scalable architecture.
Achieved separation of concerns by encapsulating database operations within dedicated DAO classes, enhancing code maintainability and readability.
It provides ease of movement between database systems without the need to perform maintenance for the entire project

### Singleton Design Pattern in DAO Implementation:

The DAO class employs the Singleton design pattern, ensuring a single instance exists throughout the application. This provides resource efficiency, centralized database access, a global access point, thread safety, and simplified configuration management. By maintaining a consistent state, it optimizes performance and responsiveness, reducing database connection overheads.

### Indexing and Primary Key:

Strategically utilized indexing to optimize query performance, particularly for frequently queried fields.
Defined appropriate primary keys to enforce data uniqueness and enhance search efficiency, contributing to a responsive and streamlined application.
Efficient Statement Instructions:

Employed efficient SQL statement instructions to interact with the database, minimizing resource consumption and improving query execution times.
Leveraged prepared statements and parameterized queries to prevent SQL injection vulnerabilities and enhance security.

### Result :
The combination of a normalized schema, SQLite's efficiency, DAO pattern implementation, and optimization techniques like indexing and primary keys resulted in a performant and maintainable database system for the project.



## Authentication System :
### Custom JWT Authentication System:

For secure user authentication, I implemented a custom JWT solution utilizing cryptographic functions such as crypto and base64url, incorporating the robust RSA-SHA256 algorithm. This bespoke implementation involves meticulously designed functions for token creation, verification, and management.



### Token Creation and Verification:

Implementation: Employed cryptographic libraries (crypto and base64url) to meticulously create and verify JSON Web Tokens (JWTs).
Token Expiry Management:

### Implementation:
 Developed a  mechanism to manage token expiration efficiently.
Functionality: Created a dedicated database table to store relevant data, tracking user logins and associated token expiration dates. This functionality ensures timely token expiration checks and enhances the security of the authentication system.

### Reducing Null Values in User Table:
Mitigated null values in the user table by implementing a separation of the storage of expired token data into a distinct table.


### Token Format, Encoding, Decoding, and Signing:

JWT Format: Comprises three main parts - header, payload, and signature, ensuring a compact and secure representation of user information.
Encoding and Decoding: Implemented base64url encoding and decoding for efficient representation and extraction of user-specific data within the JWT.
Signing: Employed the RSA-SHA256 algorithm for secure digital signature generation and verification, ensuring the integrity and authenticity of the JWT.

By seamlessly integrating these features, the authentication system not only guarantees secure user authentication through custom JWTs but also reflects a commitment to optimal token management, database efficiency, and adherence to industry-standard cryptographic practices.

## Validation and Error Handling:

Implemented robust validation using express-validator to ensure incoming data meets defined criteria, enhancing accuracy and security. The validation checks prevent invalid inputs, promoting data quality.

For error handling, a custom ErrorApp class, extending the standard Error class, is employed. This class systematically manages unexpected situations, logging meaningful error details for efficient troubleshooting. The approach aids in maintaining system stability, resolving issues promptly, and providing clear feedback for a user-friendly experience.

### Benefits:

Validation: Promotes application resilience and security by preventing potential vulnerabilities.
Error Handling: Enhances system stability, aids in efficient issue resolution, and ensures a user-friendly experience with clear feedback.





## Installation
```bash
  npm i 
```

## start

```bash
   npm start
```
