# Mentor-Mentee Management System

A role-based web application designed to streamline mentor-mentee interactions within educational institutions. The system allows mentors to manage their assigned mentees, monitor academic progress, and maintain profile information through a secure and user-friendly interface.

## Features

### Mentor Module
Mentors can:

- View assigned mentees
- Access mentee profiles and academic records
- Edit mentee personal and academic information
- Update their own profile details
- Monitor student performance and progress
- Manage mentor dashboard activities

### Mentee Module
Mentees can:

- View their profile information
- Edit their own personal details
- Update academic records and marks
- Access mentor information
- Maintain their academic progress data

## Role-Based Access Control

| Feature | Mentor | Mentee |
|---------|---------|---------|
| View own profile | ✅ | ✅ |
| Edit own profile | ✅ | ✅ |
| View academic details | ✅ | ✅ |
| Edit own academic marks | ✅ | ✅ |
| View assigned mentees | ✅ | ✅ |
| Edit other mentee details | ✅ | ❌ |
| Access mentor dashboard | ✅ | ❌ |

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- PHP
- MySQL Database

## Project Structure

```
mentor-page/
│
├── index.html
├── mentor.html
├── mentees.html
│
├── mentor-profile.html
├── mentor-profile.css
├── mentor-profile.js
│
├── mentees-profile.html
├── mentees-profile.css
├── mentees-profile.js
│
├── mentor-dashboard.html
├── mentees-dashboard.html
│
├── login.js
├── login.css
│
├── script.js
├── animations.js
└── styles.css
```

## System Workflow

1. User logs into the system.
2. System authenticates the user through the PHP backend.
3. User role (Mentor/Mentee) is identified.
4. Dashboard is loaded based on role permissions.
5. Data is fetched dynamically from the MySQL database using PHP APIs.
6. Users can view and update authorized information.

## Database Integration

The application uses a PHP backend to:

- Authenticate users
- Fetch mentor and mentee information
- Retrieve academic records
- Update profile details
- Maintain role-based access control
- Manage mentor-mentee relationships

## Security Features

- Session-based authentication
- Role-based authorization
- Restricted access to sensitive data
- Server-side validation
- Controlled profile editing permissions

## Future Enhancements

- Attendance management
- Internal marks analytics
- Performance visualization charts
- Notification system
- File/document uploads
- Meeting scheduler
- Report generation
- Email integration

## Team & Contributions

### **Pranav R**

**Frontend Development & Documentation Lead**

* Developed mentor and mentee dashboards and core UI components.
* Improved overall user experience and interface design.
* Led project documentation, including reports, presentations, and user manuals.
* Coordinated frontend implementation and project integration.

---

### **Pramukh A Nayak**

**Backend Developer**

* Developed backend logic and server-side functionalities.
* Implemented database operations and data management.
* Built APIs and handled backend integration.

---

### **Pranav Shenoy**

**Frontend Development & Authentication**

* Assisted in frontend development and system integration.
* Implemented role-based authentication and authorization mechanisms.
* Worked on user access control and session management.

---

### **Prarthana Acharya**

**Content & Project Coordination**

* Managed project content and documentation support.
* Assisted in team coordination and project planning.
* Contributed to requirement gathering and organization.

---

### **Prarthana Nayak**

**Testing & Quality Assurance**

* Conducted functional and usability testing.
* Identified and reported bugs and system issues.
* Ensured system reliability and stability.

---

### **Pratham (NNM24IS163)**

**Frontend Development & Debugging**

* Developed responsive user interfaces using Bootstrap.
* Fixed frontend bugs and JavaScript issues.
* Assisted in UI optimization and responsiveness.

---

### **Pratham (NNM24IS164)**

**UI/UX Designer**

* Designed application layouts and visual components.
* Improved visual consistency and user experience.
* Contributed to interface design and styling decisions.

---

> Developed as an academic project to facilitate efficient mentor-mentee management and academic monitoring within educational institutions.
