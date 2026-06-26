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

## Author

**Pranav R**  
Information Science Engineering  
NMAM Institute of Technology

---

> Developed as an academic project to facilitate efficient mentor-mentee management and academic monitoring within educational institutions.
