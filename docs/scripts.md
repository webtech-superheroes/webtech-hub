## Database

```
docker-compose exec db /usr/bin/mysqldump -u <username> --password=<username> <database> > backup.sql
```