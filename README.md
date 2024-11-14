<center>
    <h1>API Routes Document</h1>
</center>

<h3>Student Register</h3>

```
POST /api/v1/user/student/register
cookie: ?
req: student_id, student_password, student_firstname, student_lastname 
```

<h3>Student Auth</h3>

```
POST /api/v1/user/student/auth
cookie: ?
req: student_id, student_password
```

<h3>Student SignOut</h3>

```
POST /api/v1/user/student/signout
cookie: token
req: ?
```

<h3>Activity Student QR</h3>

```
GET /api/v1/activity/student/qr
cookie: token
req: ?
```